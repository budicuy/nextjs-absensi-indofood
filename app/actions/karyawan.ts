"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import { prisma } from "@/lib/prisma";

// Validation schema
const karyawanSchema = z.object({
    nik: z
        .string()
        .min(3, "NIK minimal 3 karakter")
        .max(16, "NIK maksimal 16 karakter"),
    nama: z.string().min(3, "Nama minimal 3 karakter"),
    alamat: z.string().optional(),
    no_telp: z
        .string()
        .regex(
            /^08[0-9]+$/,
            "No. Telepon harus diawali dengan 08 dan hanya berisi angka",
        ),
    tanggal_masuk: z.string(),
    departemenId: z.number().min(1, "Departemen harus dipilih"),
    vendorId: z.number().min(1, "Vendor harus dipilih"),
});

export async function getKaryawan() {
    try {
        const karyawan = await prisma.karyawan.findMany({
            select: {
                id: true,
                nik: true,
                NamaLengkap: true,
                alamat: true,
                noTelp: true,
                tanggalMasukKaryawan: true,
                departemen: {
                    select: {
                        id: true,
                        namaDepartemen: true,
                    },
                },
                vendor: {
                    select: {
                        id: true,
                        namaVendor: true,
                    },
                },
            },
            orderBy: {
                createdAt: "desc",
            },
        });

        // Transform data to match expected format
        return karyawan.map((k) => ({
            id: k.id,
            nik: k.nik,
            nama: k.NamaLengkap,
            alamat: k.alamat,
            no_telp: k.noTelp,
            tanggal_masuk: k.tanggalMasukKaryawan,
            departemen: k.departemen
                ? {
                      id: k.departemen.id,
                      nama: k.departemen.namaDepartemen,
                  }
                : null,
            vendor: k.vendor
                ? {
                      id: k.vendor.id,
                      nama: k.vendor.namaVendor,
                  }
                : null,
        }));
    } catch (error) {
        console.error("Error fetching karyawan:", error);
        return [];
    }
}

// Wrapper functions to avoid duplication while maintaining "use server" compatibility
export async function getDepartemen() {
    const { getDepartemen: getDept } = await import("./departemen");
    return getDept();
}

export async function getVendor() {
    const { getVendor: getVend } = await import("./vendor");
    return getVend();
}

export async function createKaryawan(formData: FormData) {
    try {
        const data = {
            nik: formData.get("nik") as string,
            nama: formData.get("nama") as string,
            alamat: formData.get("alamat") as string,
            no_telp: formData.get("no_telp") as string,
            tanggal_masuk: formData.get("tanggal_masuk") as string,
            departemenId: parseInt(formData.get("departemenId") as string, 10),
            vendorId: parseInt(formData.get("vendorId") as string, 10),
        };

        const validated = karyawanSchema.parse(data);

        // Check if NIK or phone already exists in a single query
        const existing = await prisma.karyawan.findFirst({
            where: {
                OR: [{ nik: validated.nik }, { noTelp: validated.no_telp }],
            },
            select: {
                nik: true,
                noTelp: true,
            },
        });

        if (existing) {
            if (existing.nik === validated.nik) {
                return { success: false, error: "NIK sudah terdaftar" };
            }
            return { success: false, error: "No. Telepon sudah terdaftar" };
        }

        await prisma.karyawan.create({
            data: {
                nik: validated.nik,
                NamaLengkap: validated.nama,
                alamat: validated.alamat || "",
                noTelp: validated.no_telp,
                tanggalMasukKaryawan: new Date(validated.tanggal_masuk),
                departemenId: validated.departemenId,
                vendorId: validated.vendorId,
            },
        });

        revalidatePath("/dashboard/karyawan");
        return { success: true, message: "Karyawan berhasil ditambahkan" };
    } catch (error) {
        if (error instanceof z.ZodError) {
            return { success: false, error: error.issues[0].message };
        }
        console.error("Error creating karyawan:", error);
        return { success: false, error: "Gagal menambahkan karyawan" };
    }
}

export async function updateKaryawan(id: number, formData: FormData) {
    try {
        const data = {
            nik: formData.get("nik") as string,
            nama: formData.get("nama") as string,
            alamat: formData.get("alamat") as string,
            no_telp: formData.get("no_telp") as string,
            tanggal_masuk: formData.get("tanggal_masuk") as string,
            departemenId: parseInt(formData.get("departemenId") as string, 10),
            vendorId: parseInt(formData.get("vendorId") as string, 10),
        };

        const validated = karyawanSchema.parse(data);

        // Check if NIK or phone already exists (exclude current record) in a single query
        const existing = await prisma.karyawan.findFirst({
            where: {
                AND: [
                    { NOT: { id } },
                    {
                        OR: [
                            { nik: validated.nik },
                            { noTelp: validated.no_telp },
                        ],
                    },
                ],
            },
            select: {
                nik: true,
                noTelp: true,
            },
        });

        if (existing) {
            if (existing.nik === validated.nik) {
                return { success: false, error: "NIK sudah terdaftar" };
            }
            return { success: false, error: "No. Telepon sudah terdaftar" };
        }

        await prisma.karyawan.update({
            where: { id },
            data: {
                nik: validated.nik,
                NamaLengkap: validated.nama,
                alamat: validated.alamat || "",
                noTelp: validated.no_telp,
                tanggalMasukKaryawan: new Date(validated.tanggal_masuk),
                departemenId: validated.departemenId,
                vendorId: validated.vendorId,
            },
        });

        revalidatePath("/dashboard/karyawan");
        return { success: true, message: "Karyawan berhasil diperbarui" };
    } catch (error) {
        if (error instanceof z.ZodError) {
            return { success: false, error: error.issues[0].message };
        }
        console.error("Error updating karyawan:", error);
        return { success: false, error: "Gagal memperbarui karyawan" };
    }
}

export async function deleteKaryawan(id: number) {
    try {
        await prisma.karyawan.delete({
            where: { id },
        });

        revalidatePath("/dashboard/karyawan");
        return { success: true, message: "Karyawan berhasil dihapus" };
    } catch (error) {
        console.error("Error deleting karyawan:", error);
        return { success: false, error: "Gagal menghapus karyawan" };
    }
}
