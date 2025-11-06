"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import { PrismaClient } from "@/lib/generated/prisma/client";

const prisma = new PrismaClient();

// Validation schema
const departemenSchema = z.object({
    namaDepartemen: z
        .string()
        .min(3, "Nama departemen minimal 3 karakter")
        .max(100, "Nama departemen maksimal 100 karakter"),
});

export async function getDepartemen() {
    try {
        const departemen = await prisma.departemen.findMany({
            orderBy: {
                namaDepartemen: "asc",
            },
        });

        return departemen.map((d) => ({
            id: d.id,
            namaDepartemen: d.namaDepartemen,
            slugDepartemen: d.slugDepartemen,
            createdAt: d.createdAt,
            updatedAt: d.updatedAt,
        }));
    } catch (error) {
        console.error("Error fetching departemen:", error);
        return [];
    }
}

export async function createDepartemen(formData: FormData) {
    try {
        const data = {
            namaDepartemen: formData.get("namaDepartemen") as string,
        };

        const validated = departemenSchema.parse(data);

        // Check if departemen name already exists
        const existingDepartemen = await prisma.departemen.findUnique({
            where: { namaDepartemen: validated.namaDepartemen },
        });

        if (existingDepartemen) {
            return { success: false, error: "Nama departemen sudah terdaftar" };
        }

        // Generate slug from nama departemen
        const slugDepartemen = validated.namaDepartemen
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-+|-+$/g, "");

        await prisma.departemen.create({
            data: {
                namaDepartemen: validated.namaDepartemen,
                slugDepartemen,
            },
        });

        revalidatePath("/dashboard/departemen");
        return { success: true, message: "Departemen berhasil ditambahkan" };
    } catch (error) {
        if (error instanceof z.ZodError) {
            return { success: false, error: error.issues[0].message };
        }
        console.error("Error creating departemen:", error);
        return { success: false, error: "Gagal menambahkan departemen" };
    }
}

export async function updateDepartemen(id: string, formData: FormData) {
    try {
        const data = {
            namaDepartemen: formData.get("namaDepartemen") as string,
        };

        const validated = departemenSchema.parse(data);

        // Check if departemen name already exists (exclude current record)
        const existingDepartemen = await prisma.departemen.findFirst({
            where: {
                namaDepartemen: validated.namaDepartemen,
                NOT: { id },
            },
        });

        if (existingDepartemen) {
            return { success: false, error: "Nama departemen sudah terdaftar" };
        }

        // Generate slug from nama departemen
        const slugDepartemen = validated.namaDepartemen
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-+|-+$/g, "");

        await prisma.departemen.update({
            where: { id },
            data: {
                namaDepartemen: validated.namaDepartemen,
                slugDepartemen,
            },
        });

        revalidatePath("/dashboard/departemen");
        return { success: true, message: "Departemen berhasil diperbarui" };
    } catch (error) {
        if (error instanceof z.ZodError) {
            return { success: false, error: error.issues[0].message };
        }
        console.error("Error updating departemen:", error);
        return { success: false, error: "Gagal memperbarui departemen" };
    }
}

export async function deleteDepartemen(id: string) {
    try {
        // Check if departemen has related karyawan
        const karyawanCount = await prisma.karyawan.count({
            where: { departemenId: id },
        });

        if (karyawanCount > 0) {
            return {
                success: false,
                error: `Departemen tidak dapat dihapus karena memiliki ${karyawanCount} karyawan terkait`,
            };
        }

        await prisma.departemen.delete({
            where: { id },
        });

        revalidatePath("/dashboard/departemen");
        return { success: true, message: "Departemen berhasil dihapus" };
    } catch (error) {
        console.error("Error deleting departemen:", error);
        return { success: false, error: "Gagal menghapus departemen" };
    }
}
