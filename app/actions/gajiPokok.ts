"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import { prisma } from "@/lib/prisma";

// Validation schema
const gajiPokokSchema = z.object({
    jumlahGaji: z
        .string()
        .min(1, "Jumlah gaji wajib diisi")
        .refine(
            (val) => !Number.isNaN(Number(val)) && Number(val) > 0,
            "Jumlah gaji harus berupa angka positif",
        ),
    karyawanId: z.number().min(1, "Karyawan harus dipilih"),
});

export async function getGajiPokok() {
    try {
        const gajiPokok = await prisma.gajiPokok.findMany({
            select: {
                id: true,
                jumlahGaji: true,
                karyawan: {
                    select: {
                        id: true,
                        nik: true,
                        NamaLengkap: true,
                    },
                },
                createdAt: true,
                updatedAt: true,
            },
            orderBy: {
                createdAt: "desc",
            },
        });

        return gajiPokok.map((g) => ({
            id: g.id,
            jumlahGaji: Number(g.jumlahGaji),
            karyawan: g.karyawan
                ? {
                      id: g.karyawan.id,
                      nik: g.karyawan.nik,
                      nama: g.karyawan.NamaLengkap,
                  }
                : null,
            createdAt: g.createdAt,
            updatedAt: g.updatedAt,
        }));
    } catch (error) {
        console.error("Error fetching gaji pokok:", error);
        return [];
    }
}

// Wrapper function to avoid duplication while maintaining "use server" compatibility
export async function getKaryawan() {
    const { getKaryawan: getKaryawanData } = await import("./karyawan");
    const karyawanData = await getKaryawanData();

    // Transform to KaryawanOption format
    return karyawanData.map((k) => ({
        id: k.id,
        nik: k.nik,
        nama: k.nama,
    }));
}

export async function createGajiPokok(formData: FormData) {
    try {
        const data = {
            jumlahGaji: formData.get("jumlahGaji") as string,
            karyawanId: parseInt(formData.get("karyawanId") as string, 10),
        };

        const validated = gajiPokokSchema.parse(data);

        // Check if gaji pokok for this karyawan already exists
        const existingGajiPokok = await prisma.gajiPokok.findFirst({
            where: { karyawanId: validated.karyawanId },
        });

        if (existingGajiPokok) {
            return {
                success: false,
                error: "Karyawan ini sudah memiliki gaji pokok",
            };
        }

        await prisma.gajiPokok.create({
            data: {
                jumlahGaji: Number(validated.jumlahGaji),
                karyawanId: validated.karyawanId,
            },
        });

        revalidatePath("/dashboard/gaji-pokok");
        return { success: true, message: "Gaji pokok berhasil ditambahkan" };
    } catch (error) {
        if (error instanceof z.ZodError) {
            return { success: false, error: error.issues[0].message };
        }
        console.error("Error creating gaji pokok:", error);
        return { success: false, error: "Gagal menambahkan gaji pokok" };
    }
}

export async function updateGajiPokok(id: number, formData: FormData) {
    try {
        const data = {
            jumlahGaji: formData.get("jumlahGaji") as string,
            karyawanId: parseInt(formData.get("karyawanId") as string, 10),
        };

        const validated = gajiPokokSchema.parse(data);

        // Check if gaji pokok for this karyawan already exists (exclude current record)
        const existingGajiPokok = await prisma.gajiPokok.findFirst({
            where: {
                karyawanId: validated.karyawanId,
                NOT: { id },
            },
        });

        if (existingGajiPokok) {
            return {
                success: false,
                error: "Karyawan ini sudah memiliki gaji pokok",
            };
        }

        await prisma.gajiPokok.update({
            where: { id },
            data: {
                jumlahGaji: Number(validated.jumlahGaji),
                karyawanId: validated.karyawanId,
            },
        });

        revalidatePath("/dashboard/gaji-pokok");
        return { success: true, message: "Gaji pokok berhasil diperbarui" };
    } catch (error) {
        if (error instanceof z.ZodError) {
            return { success: false, error: error.issues[0].message };
        }
        console.error("Error updating gaji pokok:", error);
        return { success: false, error: "Gagal memperbarui gaji pokok" };
    }
}

export async function deleteGajiPokok(id: number) {
    try {
        await prisma.gajiPokok.delete({
            where: { id },
        });

        revalidatePath("/dashboard/gaji-pokok");
        return { success: true, message: "Gaji pokok berhasil dihapus" };
    } catch (error) {
        console.error("Error deleting gaji pokok:", error);
        return { success: false, error: "Gagal menghapus gaji pokok" };
    }
}
