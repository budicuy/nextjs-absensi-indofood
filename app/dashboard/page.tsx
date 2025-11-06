import { auth, signOut } from "@/lib/auth";
import { redirect } from "next/navigation";
import { LoginSuccessNotification } from "../components/LoginSuccessNotification";
import DashboardLayout from "../components/DashboardLayout";
import StatCard from "../components/StatCard";
import ProjectCard from "../components/ProjectCard";
import {
  Users,
  CheckCircle2,
  Clock,
  AlertCircle,
  Code,
  Palette,
  Server,
  Database,
  LogOut,
} from "lucide-react";

export default async function DashboardPage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/");
  }

  return (
    <DashboardLayout username={session.user.username}>
      <LoginSuccessNotification />
      <div className="bg-white p-5 rounded-2xl shadow min-h-full">
        <div className="mb-8 flex items-center justify-between ">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Dashboard Absensi Indofood
            </h1>
            <p className="mt-1 text-gray-500">
              Selamat datang kembali, {session.user.username}!
            </p>
          </div>
          <form
            action={async () => {
              "use server";
              await signOut({ redirectTo: "/?logout=true" });
            }}
          >
            <button
              type="submit"
              className="flex items-center gap-2 rounded-lg bg-red-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-red-700 hover:shadow-lg"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </button>
          </form>
        </div>
        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Total Karyawan"
            value="156"
            trend="+12%"
            icon={<Users className="h-6 w-6" />}
            bgColor="bg-linear-to-br from-blue-500 to-blue-600"
          />
          <StatCard
            title="Hadir Hari Ini"
            value="142"
            trend="+5%"
            icon={<CheckCircle2 className="h-6 w-6" />}
            bgColor="bg-linear-to-br from-emerald-500 to-emerald-600"
          />
          <StatCard
            title="Lembur Bulan Ini"
            value="23"
            trend="+8%"
            icon={<Clock className="h-6 w-6" />}
            bgColor="bg-linear-to-br from-amber-500 to-amber-600"
          />
          <StatCard
            title="Absensi Pending"
            value="7"
            trend="-3%"
            trendUp={false}
            icon={<AlertCircle className="h-6 w-6" />}
            bgColor="bg-linear-to-br from-red-500 to-red-600"
          />
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="rounded-2xl bg-white p-6 shadow-md">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-900">
                  Departemen Aktif
                </h2>
                <button
                  type="button"
                  className="text-sm font-medium text-emerald-600 hover:text-emerald-700"
                >
                  View all
                </button>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <ProjectCard
                  title="IT Development"
                  deadline="Active"
                  icon={<Code className="h-5 w-5" />}
                  color="bg-blue-500"
                />
                <ProjectCard
                  title="Human Resources"
                  deadline="Active"
                  icon={<Users className="h-5 w-5" />}
                  color="bg-emerald-500"
                />
                <ProjectCard
                  title="Marketing"
                  deadline="Active"
                  icon={<Palette className="h-5 w-5" />}
                  color="bg-purple-500"
                />
                <ProjectCard
                  title="Operations"
                  deadline="Active"
                  icon={<Server className="h-5 w-5" />}
                  color="bg-amber-500"
                />
              </div>
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="rounded-2xl bg-white p-6 shadow-md">
              <h2 className="mb-6 text-xl font-bold text-gray-900">
                Aktivitas Terbaru
              </h2>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                    <Database className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">
                      Data karyawan updated
                    </p>
                    <p className="text-xs text-gray-500">2 minutes ago</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">
                      Absensi approved
                    </p>
                    <p className="text-xs text-gray-500">15 minutes ago</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100">
                    <Clock className="h-5 w-5 text-amber-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">
                      Overtime request
                    </p>
                    <p className="text-xs text-gray-500">1 hour ago</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100">
                    <Users className="h-5 w-5 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">
                      New employee added
                    </p>
                    <p className="text-xs text-gray-500">3 hours ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
