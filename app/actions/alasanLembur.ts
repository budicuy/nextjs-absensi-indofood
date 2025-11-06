"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import { PrismaClient } from "@/lib/generated/prisma/client";

const prisma = new PrismaClient();

// Validation schema
const alasanLemburSchema = z.object({
    description: z
        .string()
        .min(3, "Deskripsi minimal 3 karakter")
        .max(200, "Deskripsi maksimal 200 karakter"),
});

export async function getAlasanLembur() {
    try {
        const alasanLembur = await prisma.alasanLembur.findMany({
            select: {
                id: true,
                description: true,
                createdAt: true,
                updatedAt: true,
            },
            orderBy: {
                description: "asc",
            },
        });

        return alasanLembur;
    } catch (error) {
        console.error("Error fetching alasan lembur:", error);
        return [];
    }
}

export async function createAlasanLembur(formData: FormData) {
    try {
        const data = {
            description: formData.get("description") as string,
        };

        const validated = alasanLemburSchema.parse(data);

        await prisma.alasanLembur.create({
            data: {
                description: validated.description,
            },
        });

        revalidatePath("/dashboard/alasan-lembur");
        return { success: true, message: "Alasan lembur berhasil ditambahkan" };
    } catch (error) {
        if (error instanceof z.ZodError) {
            return { success: false, error: error.issues[0].message };
        }
        console.error("Error creating alasan lembur:", error);
        return { success: false, error: "Gagal menambahkan alasan lembur" };
    }
}

export async function updateAlasanLembur(id: number, formData: FormData) {
    try {
        const data = {
            description: formData.get("description") as string,
        };

        const validated = alasanLemburSchema.parse(data);

        await prisma.alasanLembur.update({
            where: { id },
            data: {
                description: validated.description,
            },
        });

        revalidatePath("/dashboard/alasan-lembur");
        return { success: true, message: "Alasan lembur berhasil diperbarui" };
    } catch (error) {
        if (error instanceof z.ZodError) {
            return { success: false, error: error.issues[0].message };
        }
        console.error("Error updating alasan lembur:", error);
        return { success: false, error: "Gagal memperbarui alasan lembur" };
    }
}

export async function deleteAlasanLembur(id: number) {
    try {
        await prisma.alasanLembur.delete({
            where: { id },
        });

        revalidatePath("/dashboard/alasan-lembur");
        return { success: true, message: "Alasan lembur berhasil dihapus" };
    } catch (error) {
        console.error("Error deleting alasan lembur:", error);
        return { success: false, error: "Gagal menghapus alasan lembur" };
    }
}
