"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import { PrismaClient } from "@/lib/generated/prisma/client";

const prisma = new PrismaClient();

// Validation schema
const vendorSchema = z.object({
    namaVendor: z
        .string()
        .min(3, "Nama vendor minimal 3 karakter")
        .max(100, "Nama vendor maksimal 100 karakter"),
    alamat: z
        .string()
        .min(5, "Alamat minimal 5 karakter")
        .max(255, "Alamat maksimal 255 karakter"),
    noTelp: z
        .string()
        .min(10, "No. Telepon minimal 10 digit")
        .max(15, "No. Telepon maksimal 15 digit")
        .regex(
            /^08[0-9]+$/,
            "No. Telepon harus diawali dengan 08 dan hanya berisi angka",
        ),
});

export async function getVendor() {
    try {
        const vendor = await prisma.vendor.findMany({
            orderBy: {
                namaVendor: "asc",
            },
        });

        return vendor.map((v) => ({
            id: v.id,
            namaVendor: v.namaVendor,
            alamat: v.alamat,
            noTelp: v.noTelp,
            slugVendor: v.slugVendor,
            createdAt: v.createdAt,
            updatedAt: v.updatedAt,
        }));
    } catch (error) {
        console.error("Error fetching vendor:", error);
        return [];
    }
}

export async function createVendor(formData: FormData) {
    try {
        const data = {
            namaVendor: formData.get("namaVendor") as string,
            alamat: formData.get("alamat") as string,
            noTelp: formData.get("noTelp") as string,
        };

        const validated = vendorSchema.parse(data);

        // Check if vendor name already exists
        const existingName = await prisma.vendor.findUnique({
            where: { namaVendor: validated.namaVendor },
        });

        if (existingName) {
            return { success: false, error: "Nama vendor sudah terdaftar" };
        }

        // Check if phone already exists
        const existingPhone = await prisma.vendor.findUnique({
            where: { noTelp: validated.noTelp },
        });

        if (existingPhone) {
            return { success: false, error: "No. Telepon sudah terdaftar" };
        }

        // Generate slug from nama vendor
        const slugVendor = validated.namaVendor
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-+|-+$/g, "");

        await prisma.vendor.create({
            data: {
                namaVendor: validated.namaVendor,
                alamat: validated.alamat,
                noTelp: validated.noTelp,
                slugVendor,
            },
        });

        revalidatePath("/dashboard/vendor");
        return { success: true, message: "Vendor berhasil ditambahkan" };
    } catch (error) {
        if (error instanceof z.ZodError) {
            return { success: false, error: error.issues[0].message };
        }
        console.error("Error creating vendor:", error);
        return { success: false, error: "Gagal menambahkan vendor" };
    }
}

export async function updateVendor(id: string, formData: FormData) {
    try {
        const data = {
            namaVendor: formData.get("namaVendor") as string,
            alamat: formData.get("alamat") as string,
            noTelp: formData.get("noTelp") as string,
        };

        const validated = vendorSchema.parse(data);

        // Check if vendor name already exists (exclude current record)
        const existingName = await prisma.vendor.findFirst({
            where: {
                namaVendor: validated.namaVendor,
                NOT: { id },
            },
        });

        if (existingName) {
            return { success: false, error: "Nama vendor sudah terdaftar" };
        }

        // Check if phone already exists (exclude current record)
        const existingPhone = await prisma.vendor.findFirst({
            where: {
                noTelp: validated.noTelp,
                NOT: { id },
            },
        });

        if (existingPhone) {
            return { success: false, error: "No. Telepon sudah terdaftar" };
        }

        // Generate slug from nama vendor
        const slugVendor = validated.namaVendor
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-+|-+$/g, "");

        await prisma.vendor.update({
            where: { id },
            data: {
                namaVendor: validated.namaVendor,
                alamat: validated.alamat,
                noTelp: validated.noTelp,
                slugVendor,
            },
        });

        revalidatePath("/dashboard/vendor");
        return { success: true, message: "Vendor berhasil diperbarui" };
    } catch (error) {
        if (error instanceof z.ZodError) {
            return { success: false, error: error.issues[0].message };
        }
        console.error("Error updating vendor:", error);
        return { success: false, error: "Gagal memperbarui vendor" };
    }
}

export async function deleteVendor(id: string) {
    try {
        // Check if vendor has related karyawan
        const karyawanCount = await prisma.karyawan.count({
            where: { vendorId: id },
        });

        if (karyawanCount > 0) {
            return {
                success: false,
                error: `Vendor tidak dapat dihapus karena memiliki ${karyawanCount} karyawan terkait`,
            };
        }

        await prisma.vendor.delete({
            where: { id },
        });

        revalidatePath("/dashboard/vendor");
        return { success: true, message: "Vendor berhasil dihapus" };
    } catch (error) {
        console.error("Error deleting vendor:", error);
        return { success: false, error: "Gagal menghapus vendor" };
    }
}
