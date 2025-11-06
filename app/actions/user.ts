"use server";

import bcrypt from "bcryptjs";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { PrismaClient, type Role } from "@/lib/generated/prisma/client";

const prisma = new PrismaClient();

// Validation schema
const userSchema = z.object({
    username: z
        .string()
        .min(3, "Username minimal 3 karakter")
        .max(50, "Username maksimal 50 karakter"),
    password: z
        .string()
        .min(6, "Password minimal 6 karakter")
        .max(100, "Password maksimal 100 karakter"),
    role: z.enum(["SUPER_ADMIN", "ADMIN", "HRD", "KARYAWAN"], {
        message: "Role harus dipilih",
    }),
});

// Validation schema for update (password optional)
const userUpdateSchema = z.object({
    username: z
        .string()
        .min(3, "Username minimal 3 karakter")
        .max(50, "Username maksimal 50 karakter"),
    password: z
        .string()
        .min(6, "Password minimal 6 karakter")
        .max(100, "Password maksimal 100 karakter")
        .optional(),
    role: z.enum(["SUPER_ADMIN", "ADMIN", "HRD", "KARYAWAN"], {
        message: "Role harus dipilih",
    }),
});

export async function getUser() {
    try {
        const users = await prisma.user.findMany({
            select: {
                id: true,
                username: true,
                role: true,
                lastLogin: true,
                createdAt: true,
                updatedAt: true,
            },
            orderBy: {
                createdAt: "desc",
            },
        });

        return users;
    } catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
}

export async function createUser(formData: FormData) {
    try {
        const data = {
            username: formData.get("username") as string,
            password: formData.get("password") as string,
            role: formData.get("role") as string,
        };

        const validated = userSchema.parse(data);

        // Check if username already exists
        const existingUser = await prisma.user.findUnique({
            where: { username: validated.username },
        });

        if (existingUser) {
            return { success: false, error: "Username sudah terdaftar" };
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(validated.password, 10);

        await prisma.user.create({
            data: {
                username: validated.username,
                password: hashedPassword,
                role: validated.role,
            },
        });

        revalidatePath("/dashboard/user");
        return { success: true, message: "User berhasil ditambahkan" };
    } catch (error) {
        if (error instanceof z.ZodError) {
            return { success: false, error: error.issues[0].message };
        }
        console.error("Error creating user:", error);
        return { success: false, error: "Gagal menambahkan user" };
    }
}

export async function updateUser(id: string, formData: FormData) {
    try {
        const data = {
            username: formData.get("username") as string,
            password: formData.get("password") as string,
            role: formData.get("role") as string,
        };

        // Only validate password if it's provided
        const validated = userUpdateSchema.parse(
            data.password ? data : { ...data, password: undefined },
        );

        // Check if username already exists (exclude current record)
        const existingUser = await prisma.user.findFirst({
            where: {
                username: validated.username,
                NOT: { id },
            },
        });

        if (existingUser) {
            return { success: false, error: "Username sudah terdaftar" };
        }

        // Prepare update data with proper typing
        const updateData: {
            username: string;
            role: Role;
            password?: string;
        } = {
            username: validated.username,
            role: validated.role as Role,
        };

        // Only update password if provided
        if (data.password && validated.password) {
            updateData.password = await bcrypt.hash(validated.password, 10);
        }

        await prisma.user.update({
            where: { id },
            data: updateData,
        });

        revalidatePath("/dashboard/user");
        return { success: true, message: "User berhasil diperbarui" };
    } catch (error) {
        if (error instanceof z.ZodError) {
            return { success: false, error: error.issues[0].message };
        }
        console.error("Error updating user:", error);
        return { success: false, error: "Gagal memperbarui user" };
    }
}

export async function deleteUser(id: string) {
    try {
        await prisma.user.delete({
            where: { id },
        });

        revalidatePath("/dashboard/user");
        return { success: true, message: "User berhasil dihapus" };
    } catch (error) {
        console.error("Error deleting user:", error);
        return { success: false, error: "Gagal menghapus user" };
    }
}
