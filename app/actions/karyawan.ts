"use server";

import { PrismaClient } from "@/lib/generated/prisma/client";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const prisma = new PrismaClient();

// Validation schema
const karyawanSchema = z.object({
  nik: z
    .string()
    .min(3, "NIK minimal 3 karakter")
    .max(16, "NIK maksimal 16 karakter"),
  nama: z.string().min(3, "Nama minimal 3 karakter"),
  alamat: z.string().optional(),
  no_telp: z.string().min(10, "No. Telepon minimal 10 digit"),
  tanggal_masuk: z.string(),
  departemenId: z.string().min(1, "Departemen harus dipilih"),
  vendorId: z.string().min(1, "Vendor harus dipilih"),
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
      departemen: {
        id: k.departemen.id,
        nama: k.departemen.namaDepartemen,
      },
      vendor: {
        id: k.vendor.id,
        nama: k.vendor.namaVendor,
      },
    }));
  } catch (error) {
    console.error("Error fetching karyawan:", error);
    return [];
  }
}

export async function getDepartemen() {
  try {
    const departemen = await prisma.departemen.findMany({
      select: {
        id: true,
        namaDepartemen: true,
      },
      orderBy: {
        namaDepartemen: "asc",
      },
    });

    return departemen.map((d) => ({
      id: d.id,
      nama: d.namaDepartemen,
    }));
  } catch (error) {
    console.error("Error fetching departemen:", error);
    return [];
  }
}

export async function getVendor() {
  try {
    const vendor = await prisma.vendor.findMany({
      select: {
        id: true,
        namaVendor: true,
      },
      orderBy: {
        namaVendor: "asc",
      },
    });

    return vendor.map((v) => ({
      id: v.id,
      nama: v.namaVendor,
    }));
  } catch (error) {
    console.error("Error fetching vendor:", error);
    return [];
  }
}

export async function createKaryawan(formData: FormData) {
  try {
    const data = {
      nik: formData.get("nik") as string,
      nama: formData.get("nama") as string,
      alamat: formData.get("alamat") as string,
      no_telp: formData.get("no_telp") as string,
      tanggal_masuk: formData.get("tanggal_masuk") as string,
      departemenId: formData.get("departemenId") as string,
      vendorId: formData.get("vendorId") as string,
    };

    const validated = karyawanSchema.parse(data);

    // Check if NIK already exists
    const existingNIK = await prisma.karyawan.findUnique({
      where: { nik: validated.nik },
    });

    if (existingNIK) {
      return { success: false, error: "NIK sudah terdaftar" };
    }

    // Check if phone already exists
    const existingPhone = await prisma.karyawan.findUnique({
      where: { noTelp: validated.no_telp },
    });

    if (existingPhone) {
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

export async function updateKaryawan(id: string, formData: FormData) {
  try {
    const data = {
      nik: formData.get("nik") as string,
      nama: formData.get("nama") as string,
      alamat: formData.get("alamat") as string,
      no_telp: formData.get("no_telp") as string,
      tanggal_masuk: formData.get("tanggal_masuk") as string,
      departemenId: formData.get("departemenId") as string,
      vendorId: formData.get("vendorId") as string,
    };

    const validated = karyawanSchema.parse(data);

    // Check if NIK already exists (exclude current record)
    const existingNIK = await prisma.karyawan.findFirst({
      where: {
        nik: validated.nik,
        NOT: { id },
      },
    });

    if (existingNIK) {
      return { success: false, error: "NIK sudah terdaftar" };
    }

    // Check if phone already exists (exclude current record)
    const existingPhone = await prisma.karyawan.findFirst({
      where: {
        noTelp: validated.no_telp,
        NOT: { id },
      },
    });

    if (existingPhone) {
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

export async function deleteKaryawan(id: string) {
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
