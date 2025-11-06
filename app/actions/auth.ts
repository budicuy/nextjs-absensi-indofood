"use server";

import { redirect } from "next/navigation";
import { AuthError } from "next-auth";
import { signIn } from "@/lib/auth";

export async function authenticate(
  _prevState: string | undefined,
  formData: FormData,
): Promise<string | undefined> {
  try {
    await signIn("credentials", {
      ...Object.fromEntries(formData),
      redirect: false, // Penting! Jangan redirect otomatis, kita akan melakukannya secara manual
    });
    // Jika berhasil, arahkan ke dashboard dengan parameter success
    redirect("/dashboard?success=true");
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Username atau Password salah.";
        default:
          return "Terjadi kesalahan yang tidak terduga.";
      }
    }
    // Jika redirect gagal (karena kita memanggil redirect() di atas), tangani
    throw error;
  }
}
