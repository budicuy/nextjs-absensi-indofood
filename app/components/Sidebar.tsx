"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  LayoutDashboard,
  Database,
  Fingerprint,
  CalendarClock,
  FileBarChart,
  Users,
  UserCircle,
  Clock,
  MessageCircle,
  Building2,
  TruckIcon,
  Banknote,
  PlusCircle,
  ClipboardList,
  Timer,
  CirclePlus,
  X,
} from "lucide-react";

interface MenuItem {
  title: string;
  icon: React.ReactNode;
  href?: string;
  children?: {
    title: string;
    icon: React.ReactNode;
    href: string;
  }[];
}

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  isMinimized: boolean;
  onToggleMinimize?: () => void;
}

export default function Sidebar({
  isOpen,
  onClose,
  isMinimized,
}: SidebarProps) {
  const pathname = usePathname();
  const [openMenus, setOpenMenus] = useState<string[]>([]);

  const menuItems: MenuItem[] = [
    {
      title: "Dashboard",
      icon: <LayoutDashboard className="h-5 w-5" />,
      href: "/dashboard",
    },
    {
      title: "Data Master",
      icon: <Database className="h-5 w-5" />,
      children: [
        {
          title: "Data Karyawan",
          icon: <Users className="h-5 w-5" />,
          href: "/dashboard/karyawan",
        },
        {
          title: "Data User",
          icon: <UserCircle className="h-5 w-5" />,
          href: "/dashboard/user",
        },
        {
          title: "Data Jam Kerja",
          icon: <Clock className="h-5 w-5" />,
          href: "/dashboard/jam-kerja",
        },
        {
          title: "Data Alasan Lembur",
          icon: <MessageCircle className="h-5 w-5" />,
          href: "/dashboard/alasan-lembur",
        },
        {
          title: "Data Departemen",
          icon: <Building2 className="h-5 w-5" />,
          href: "/dashboard/departemen",
        },
        {
          title: "Data Vendor",
          icon: <TruckIcon className="h-5 w-5" />,
          href: "/dashboard/vendor",
        },
        {
          title: "Data Gaji Pokok",
          icon: <Banknote className="h-5 w-5" />,
          href: "/dashboard/gaji-pokok",
        },
      ],
    },
    {
      title: "Absensi",
      icon: <Fingerprint className="h-5 w-5" />,
      children: [
        {
          title: "Tambah Absensi",
          icon: <PlusCircle className="h-5 w-5" />,
          href: "/dashboard/absensi/tambah",
        },
        {
          title: "Daftar Data Absensi",
          icon: <ClipboardList className="h-5 w-5" />,
          href: "/dashboard/absensi/daftar",
        },
      ],
    },
    {
      title: "Work Schedule Overtime",
      icon: <CalendarClock className="h-5 w-5" />,
      children: [
        {
          title: "Daftar Data Overtime",
          icon: <Timer className="h-5 w-5" />,
          href: "/dashboard/overtime/daftar",
        },
        {
          title: "Tambah Data Overtime",
          icon: <CirclePlus className="h-5 w-5" />,
          href: "/dashboard/overtime/tambah",
        },
      ],
    },
    {
      title: "Laporan",
      icon: <FileBarChart className="h-5 w-5" />,
      children: [
        {
          title: "Laporan Absensi Karyawan",
          icon: <Fingerprint className="h-5 w-5" />,
          href: "/dashboard/laporan/absensi",
        },
        {
          title: "Laporan Overtime",
          icon: <CalendarClock className="h-5 w-5" />,
          href: "/dashboard/laporan/overtime",
        },
        {
          title: "Rekap Data Laporan",
          icon: <FileBarChart className="h-5 w-5" />,
          href: "/dashboard/laporan/rekap",
        },
      ],
    },
  ];

  // Auto-open menu berdasarkan pathname
  useEffect(() => {
    const activeMenus: string[] = [];

    menuItems.forEach((item) => {
      if (item.children) {
        const hasActiveChild = item.children.some(
          (child) => pathname === child.href,
        );
        if (hasActiveChild) {
          activeMenus.push(item.title);
        }
      }
    });

    setOpenMenus(activeMenus);
  }, [pathname]);

  const toggleMenu = (title: string) => {
    setOpenMenus((prev) =>
      prev.includes(title)
        ? prev.filter((item) => item !== title)
        : [...prev, title],
    );
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-gray-900/50 lg:hidden"
          onClick={onClose}
          onKeyDown={(e) => {
            if (e.key === "Escape") onClose();
          }}
          aria-label="Close sidebar"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex flex-col border-r border-gray-200 bg-white transition-all duration-300 lg:static lg:z-auto ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        } ${isMinimized ? "lg:w-20" : "w-64"}`}
      >
        {/* Logo */}
        <div className="flex h-16 items-center justify-between border-b border-gray-200 px-6">
          {!isMinimized && (
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-linear-to-br from-(--primary-color) to-(--primary-hover) shadow-md">
                <Fingerprint className="h-6 w-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-gray-900">Absensi</span>
                <span className="text-xs font-semibold text-(--primary-color)">
                  Indofood
                </span>
              </div>
            </div>
          )}
          {isMinimized && (
            <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-lg bg-linear-to-br from-(--primary-color) to-(--primary-hover) shadow-md">
              <Fingerprint className="h-6 w-6 text-white" />
            </div>
          )}

          {/* Close button for mobile */}
          <button
            type="button"
            onClick={onClose}
            className="lg:hidden rounded-lg p-2 text-gray-600 hover:bg-gray-100"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Menu Section */}
        <div className="flex-1 overflow-y-auto px-3 py-4">
          <div className="mb-4">
            {!isMinimized && (
              <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
                Menu
              </p>
            )}
            <nav className="space-y-1">
              {menuItems.map((item) => (
                <div key={item.title}>
                  {item.children ? (
                    <div>
                      <button
                        type="button"
                        onClick={() => toggleMenu(item.title)}
                        className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100"
                        title={isMinimized ? item.title : ""}
                      >
                        <div className="flex items-center gap-3 text-left">
                          {item.icon}
                          {!isMinimized && (
                            <span className="whitespace-normal wrap-break-word">
                              {item.title}
                            </span>
                          )}
                        </div>
                        {!isMinimized && (
                          <ChevronDown
                            className={`h-4 w-4 shrink-0 transition-transform duration-200 ${
                              openMenus.includes(item.title) ? "rotate-180" : ""
                            }`}
                          />
                        )}
                      </button>
                      {!isMinimized && (
                        <div
                          className={`ml-4 overflow-hidden border-l-2 border-gray-200 pl-4 transition-all duration-300 ${
                            openMenus.includes(item.title)
                              ? "mt-1 max-h-[500px] opacity-100"
                              : "max-h-0 opacity-0"
                          }`}
                        >
                          <div className="space-y-1 py-1">
                            {item.children.map((child) => {
                              const isActive = pathname === child.href;
                              return (
                                <Link
                                  key={child.title}
                                  href={child.href}
                                  className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors ${
                                    isActive
                                      ? "bg-(--primary-color) text-white shadow-sm font-semibold"
                                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                                  }`}
                                >
                                  {child.icon}
                                  <span>{child.title}</span>
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href || "#"}
                      className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-semibold transition-all ${
                        pathname === item.href
                          ? "bg-(--primary-color) text-white shadow-md hover:bg-(--primary-hover) hover:shadow-lg"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                      title={isMinimized ? item.title : ""}
                    >
                      {item.icon}
                      {!isMinimized && <span>{item.title}</span>}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>

        {/* Copyright */}
        {!isMinimized && (
          <div className="border-t border-gray-200 px-6 py-4">
            <div className="text-center">
              <p className="text-xs text-gray-500">
                © {new Date().getFullYear()} Indofood
              </p>
              <p className="mt-1 text-xs text-gray-400">All rights reserved</p>
            </div>
          </div>
        )}
      </aside>
    </>
  );
}
