// Shared types untuk aplikasi
import type { UserModel } from "@/lib/generated/prisma/models/User";

// Type untuk Karyawan dengan relasi (digunakan di Client dan Modal)
export type KaryawanWithRelations = {
    id: number;
    nik: string;
    nama: string;
    alamat: string | null;
    no_telp: string;
    tanggal_masuk: Date;
    departemen: { id: number; nama: string } | null;
    vendor: { id: number; nama: string } | null;
};

// Type untuk User display (tanpa password)
export type UserDisplay = Omit<UserModel, 'password'>;

// Type untuk Departemen dengan alias
export type DepartemenOption = {
    id: number;
    nama?: string;
    namaDepartemen?: string;
};

// Type untuk Vendor dengan alias  
export type VendorOption = {
    id: number;
    nama?: string;
    namaVendor?: string;
};
