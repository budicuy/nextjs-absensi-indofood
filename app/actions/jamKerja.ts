"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import { prisma } from "@/lib/prisma";

// Validation schema
const jamKerjaSchema = z
    .object({
        kodeShift: z
            .string()
            .min(1, "Kode shift wajib diisi")
            .max(10, "Kode shift maksimal 10 karakter"),
        jamMasuk: z
            .string()
            .regex(
                /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/,
                "Format jam masuk tidak valid (HH:MM)",
            ),
        jamPulang: z
            .string()
            .regex(
                /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/,
                "Format jam pulang tidak valid (HH:MM)",
            ),
    })
    .refine(
        (data) => {
            // Convert time strings to Date objects for comparison
            const [masukHour, masukMinute] = data.jamMasuk
                .split(":")
                .map(Number);
            const [pulangHour, pulangMinute] = data.jamPulang
                .split(":")
                .map(Number);

            const masukTime = masukHour * 60 + masukMinute;
            const pulangTime = pulangHour * 60 + pulangMinute;

            return pulangTime > masukTime;
        },
        {
            message: "Jam pulang harus lebih besar dari jam masuk",
            path: ["jamPulang"],
        },
    );

export async function getJamKerja() {
    try {
        const jamKerja = await prisma.jamKerja.findMany({
            select: {
                id: true,
                kodeShift: true,
                jamMasuk: true,
                jamPulang: true,
                createdAt: true,
                updatedAt: true,
            },
            orderBy: {
                kodeShift: "asc",
            },
        });

        return jamKerja;
    } catch (error) {
        console.error("Error fetching jam kerja:", error);
        return [];
    }
}

export async function createJamKerja(formData: FormData) {
    try {
        const data = {
            kodeShift: formData.get("kodeShift") as string,
            jamMasuk: formData.get("jamMasuk") as string,
            jamPulang: formData.get("jamPulang") as string,
        };

        const validated = jamKerjaSchema.parse(data);

        // Check if kode shift already exists
        const existingJamKerja = await prisma.jamKerja.findUnique({
            where: { kodeShift: validated.kodeShift },
        });

        if (existingJamKerja) {
            return { success: false, error: "Kode shift sudah terdaftar" };
        }

        // Convert time strings to Date objects
        const [masukHour, masukMinute] = validated.jamMasuk
            .split(":")
            .map(Number);
        const [pulangHour, pulangMinute] = validated.jamPulang
            .split(":")
            .map(Number);

        const jamMasukDate = new Date();
        jamMasukDate.setHours(masukHour, masukMinute, 0, 0);

        const jamPulangDate = new Date();
        jamPulangDate.setHours(pulangHour, pulangMinute, 0, 0);

        await prisma.jamKerja.create({
            data: {
                kodeShift: validated.kodeShift,
                jamMasuk: jamMasukDate,
                jamPulang: jamPulangDate,
            },
        });

        revalidatePath("/dashboard/jam-kerja");
        return { success: true, message: "Jam kerja berhasil ditambahkan" };
    } catch (error) {
        if (error instanceof z.ZodError) {
            return { success: false, error: error.issues[0].message };
        }
        console.error("Error creating jam kerja:", error);
        return { success: false, error: "Gagal menambahkan jam kerja" };
    }
}

export async function updateJamKerja(id: number, formData: FormData) {
    try {
        const data = {
            kodeShift: formData.get("kodeShift") as string,
            jamMasuk: formData.get("jamMasuk") as string,
            jamPulang: formData.get("jamPulang") as string,
        };

        const validated = jamKerjaSchema.parse(data);

        // Check if kode shift already exists (exclude current record)
        const existingJamKerja = await prisma.jamKerja.findFirst({
            where: {
                kodeShift: validated.kodeShift,
                NOT: { id },
            },
        });

        if (existingJamKerja) {
            return { success: false, error: "Kode shift sudah terdaftar" };
        }

        // Convert time strings to Date objects
        const [masukHour, masukMinute] = validated.jamMasuk
            .split(":")
            .map(Number);
        const [pulangHour, pulangMinute] = validated.jamPulang
            .split(":")
            .map(Number);

        const jamMasukDate = new Date();
        jamMasukDate.setHours(masukHour, masukMinute, 0, 0);

        const jamPulangDate = new Date();
        jamPulangDate.setHours(pulangHour, pulangMinute, 0, 0);

        await prisma.jamKerja.update({
            where: { id },
            data: {
                kodeShift: validated.kodeShift,
                jamMasuk: jamMasukDate,
                jamPulang: jamPulangDate,
            },
        });

        revalidatePath("/dashboard/jam-kerja");
        return { success: true, message: "Jam kerja berhasil diperbarui" };
    } catch (error) {
        if (error instanceof z.ZodError) {
            return { success: false, error: error.issues[0].message };
        }
        console.error("Error updating jam kerja:", error);
        return { success: false, error: "Gagal memperbarui jam kerja" };
    }
}

export async function deleteJamKerja(id: number) {
    try {
        await prisma.jamKerja.delete({
            where: { id },
        });

        revalidatePath("/dashboard/jam-kerja");
        return { success: true, message: "Jam kerja berhasil dihapus" };
    } catch (error) {
        console.error("Error deleting jam kerja:", error);
        return { success: false, error: "Gagal menghapus jam kerja" };
    }
}
