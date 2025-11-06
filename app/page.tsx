import { Suspense } from "react";
import LoginForm from "@/app/components/Form/LoginForm";

export default function LoginPage() {
    return (
        <Suspense fallback={<LoginPageSkeleton />}>
            <LoginForm />
        </Suspense>
    );
}

function LoginPageSkeleton() {
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
                <div className="mt-8 space-y-6">
                    <div className="h-32 animate-pulse space-y-4 rounded bg-gray-200" />
                    <div className="h-12 animate-pulse rounded bg-gray-200" />
                </div>
            </div>
        </div>
    );
}
