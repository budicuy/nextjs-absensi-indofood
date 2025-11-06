// Auth configuration dengan Prisma (untuk route handlers)
import * as bcrypt from "bcryptjs";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { ZodError, z } from "zod";
import { authConfig } from "./auth.config";
import { PrismaClient } from "./generated/prisma/client";

// Gunakan Prisma Client
const prisma = new PrismaClient();

// Definisikan Skema Validasi Input Login (Type-Safe!)
const LoginSchema = z.object({
  username: z.string().min(3, "Username minimal 3 karakter."),
  password: z.string().min(6, "Password minimal 6 karakter."),
});

// Ekspor handler dan fungsi-fungsi
export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  session: {
    strategy: "jwt",
  },
  providers: [
    Credentials({
      name: "Username & Password",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          // Validasi input dengan Zod (Type-Safe!)
          const validatedFields = LoginSchema.parse(credentials);

          const { username, password } = validatedFields;

          // Cari pengguna di database berdasarkan username
          const user = await prisma.user.findUnique({
            where: { username },
          });

          // 1. Cek apakah pengguna ada
          if (!user || !user.password) {
            return null; // Pengguna tidak ditemukan
          }

          // 2. Bandingkan password yang dimasukkan dengan hash di database
          const isValidPassword = await bcrypt.compare(password, user.password);

          if (isValidPassword) {
            // Jika valid, kembalikan objek user yang akan disimpan di JWT/session
            return {
              id: user.id,
              username: user.username,
              // JANGAN pernah mengembalikan password/hash!
            };
          }

          return null; // Password tidak cocok
        } catch (error) {
          if (error instanceof ZodError) {
            // Jika validasi Zod gagal
            console.error("Zod Validation Error:", error.issues);
            throw new Error("Input tidak valid.");
          }
          console.error("Authorization Error:", error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.username = user.username;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string;
        session.user.username = token.username as string;
      }
      return session;
    },
  },
});
