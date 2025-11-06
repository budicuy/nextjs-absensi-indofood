import { redirect } from "next/navigation";
import { getDepartemen, getKaryawan, getVendor } from "@/app/actions/karyawan";
import DashboardLayout from "@/app/components/DashboardLayout";
import { auth } from "@/lib/auth";
import KaryawanClient from "./KaryawanClient";

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
