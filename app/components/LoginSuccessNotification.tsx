"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";
import toast from "react-hot-toast";

export function LoginSuccessNotification() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const hasShownSuccess = useRef(false);

    useEffect(() => {
        const success = searchParams.get("success");
        if (success === "true" && !hasShownSuccess.current) {
            hasShownSuccess.current = true;
            toast.success("Login berhasil! Selamat datang.");
            // Remove the success parameter from URL
            router.replace("/dashboard");
        }
    }, [searchParams, router]);

    return null;
}
