"use client";

import {
    Bell,
    ChevronLeft,
    ChevronRight,
    Mail,
    Menu,
    Search,
} from "lucide-react";

interface TopbarProps {
    username: string;
    email?: string;
    onMenuClick: () => void;
    onMinimizeClick: () => void;
    isMinimized: boolean;
}

export default function Topbar({
    username,
    email,
    onMenuClick,
    onMinimizeClick,
    isMinimized,
}: TopbarProps) {
    return (
        <header className="sticky top-0 z-10 border-b border-gray-200 bg-white">
            <div className="flex h-16 items-center justify-between px-6">
                {/* Left Section - Menu Buttons */}
                <div className="flex items-center gap-3">
                    {/* Mobile Menu Button */}
                    <button
                        type="button"
                        onClick={onMenuClick}
                        className="rounded-lg p-2 text-gray-600 transition-colors hover:bg-gray-100 lg:hidden"
                        aria-label="Open menu"
                    >
                        <Menu className="h-5 w-5" />
                    </button>

                    {/* Desktop Minimize Button */}
                    <button
                        type="button"
                        onClick={onMinimizeClick}
                        className="hidden lg:block rounded-lg p-2 text-gray-600 transition-colors hover:bg-gray-100"
                        aria-label="Toggle sidebar"
                    >
                        {isMinimized ? (
                            <ChevronRight className="h-5 w-5" />
                        ) : (
                            <ChevronLeft className="h-5 w-5" />
                        )}
                    </button>

                    {/* Search Bar */}
                    <div className="relative w-full max-w-md">
                        <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search task"
                            className="w-full rounded-lg border border-gray-200 py-2 pl-10 pr-4 text-sm focus:border-(--primary-color) focus:outline-none focus:ring-2 focus:ring-(--primary-color)"
                        />
                        <kbd className="absolute right-3 top-1/2 -translate-y-1/2 rounded border border-gray-200 bg-gray-50 px-2 py-0.5 text-xs text-gray-500">
                            ⌘ F
                        </kbd>
                    </div>
                </div>

                {/* Right Section */}
                <div className="flex items-center gap-4">
                    <button
                        type="button"
                        className="rounded-lg p-2 text-gray-600 transition-colors hover:bg-gray-100"
                    >
                        <Mail className="h-5 w-5" />
                    </button>
                    <button
                        type="button"
                        className="rounded-lg p-2 text-gray-600 transition-colors hover:bg-gray-100"
                    >
                        <Bell className="h-5 w-5" />
                    </button>

                    {/* User Profile */}
                    <div className="flex items-center gap-3 border-l border-gray-200 pl-4">
                        <div className="text-right">
                            <p className="text-sm font-semibold text-gray-900">
                                {username}
                            </p>
                            <p className="text-xs text-gray-500">
                                {email || "user@indofood.com"}
                            </p>
                        </div>
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br from-(--primary-color) to-(--primary-hover) text-sm font-semibold text-white">
                            {username.charAt(0).toUpperCase()}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
