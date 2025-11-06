"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useActionState, useEffect, useRef } from "react";
import toast from "react-hot-toast";
import { authenticate } from "@/app/actions/auth";

export default function LoginForm() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [errorMessage, formAction, isPending] = useActionState(
        authenticate,
        undefined,
    );
    const hasShownLogout = useRef(false);

    // Show toast notification when there's an error
    useEffect(() => {
        if (errorMessage) {
            toast.error(errorMessage);
        }
    }, [errorMessage]);

    // Show logout success notification (only once)
    useEffect(() => {
        const logout = searchParams.get("logout");
        if (logout === "true" && !hasShownLogout.current) {
            hasShownLogout.current = true;
            toast.success("Logout berhasil. Sampai jumpa!");
            // Remove the logout parameter from URL
            router.replace("/");
        }
    }, [searchParams, router]);

    return (
        <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-blue-50 to-indigo-100">
            <div className="w-full max-w-md space-y-8 rounded-lg bg-white p-8 shadow-xl">
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                        Login
                    </h2>
                    <p className="mt-2 text-sm text-gray-600">
                        Masukkan username dan password Anda
                    </p>
                </div>

                <form action={formAction} className="mt-8 space-y-6">
                    <div className="space-y-4">
                        <div>
                            <label
                                htmlFor="username"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Username
                            </label>
                            <input
                                id="username"
                                name="username"
                                type="text"
                                required
                                minLength={3}
                                className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-(--primary-color) focus:outline-none focus:ring-2 focus:ring-(--primary-color)"
                                placeholder="Masukkan username"
                                disabled={isPending}
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                minLength={6}
                                className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-(--primary-color) focus:outline-none focus:ring-2 focus:ring-(--primary-color)"
                                placeholder="Masukkan password"
                                disabled={isPending}
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={isPending}
                        className="w-full rounded-md bg-(--primary-color) px-4 py-2 font-semibold text-white hover:bg-(--primary-hover) focus:outline-none focus:ring-2 focus:ring-(--primary-color) focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                        {isPending ? "Loading..." : "Login"}
                    </button>
                </form>
            </div>
        </div>
    );
}
