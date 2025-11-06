import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { getKaryawan, getDepartemen, getVendor } from "@/app/actions/karyawan";
import KaryawanClient from "./KaryawanClient";
import DashboardLayout from "@/app/components/DashboardLayout";

export default async function KaryawanPage() {
  const session = await auth();
  if (!session) {
    redirect("/");
  }

  const karyawanData = await getKaryawan();
  const departemenData = await getDepartemen();
  const vendorData = await getVendor();

  return (
    <DashboardLayout username={session.user.username}>
      <KaryawanClient
        initialKaryawan={karyawanData}
        departemenList={departemenData}
        vendorList={vendorData}
      />
    </DashboardLayout>
  );
}
