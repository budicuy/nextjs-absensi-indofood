import { redirect } from "next/navigation";
import { getGajiPokok, getKaryawan } from "@/app/actions/gajiPokok";
import DashboardLayout from "@/app/components/DashboardLayout";
import { auth } from "@/lib/auth";
import GajiPokokClient from "./GajiPokokClient";

export default async function GajiPokokPage() {
    const session = await auth();
    if (!session) {
        redirect("/");
    }

    const gajiPokokData = await getGajiPokok();
    const karyawanData = await getKaryawan();

    return (
        <DashboardLayout username={session.user.username}>
            <GajiPokokClient
                initialGajiPokok={gajiPokokData}
                karyawanList={karyawanData}
            />
        </DashboardLayout>
    );
}
