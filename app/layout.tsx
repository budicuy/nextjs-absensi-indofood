import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Absensi Indofood",
    description: "Sistem Absensi Indofood",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="id" className="light">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                {children}
                <Toaster
                    position="top-center"
                    toastOptions={{
                        duration: 4000,
                        style: {
                            background: "#ffffff",
                            color: "#1f2937",
                            border: "1px solid #e5e7eb",
                        },
                        success: {
                            duration: 3000,
                            iconTheme: {
                                primary: "#10b981",
                                secondary: "#ffffff",
                            },
                        },
                        error: {
                            duration: 4000,
                            iconTheme: {
                                primary: "#ef4444",
                                secondary: "#ffffff",
                            },
                        },
                    }}
                />
            </body>
        </html>
    );
}
