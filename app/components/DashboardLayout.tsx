"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

interface DashboardLayoutProps {
    children: React.ReactNode;
    username: string;
}

export default function DashboardLayout({
    children,
    username,
}: DashboardLayoutProps) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [sidebarMinimized, setSidebarMinimized] = useState(false);

    return (
        <div className="flex h-screen overflow-hidden bg-gray-50">
            <Sidebar
                isOpen={sidebarOpen}
                onClose={() => setSidebarOpen(false)}
                isMinimized={sidebarMinimized}
                onToggleMinimize={() => setSidebarMinimized(!sidebarMinimized)}
            />

            <div className="flex flex-1 flex-col overflow-hidden">
                <Topbar
                    username={username}
                    onMenuClick={() => setSidebarOpen(true)}
                    onMinimizeClick={() =>
                        setSidebarMinimized(!sidebarMinimized)
                    }
                    isMinimized={sidebarMinimized}
                />
                <main className="flex-1 overflow-y-auto p-3">{children}</main>
            </div>
        </div>
    );
}
