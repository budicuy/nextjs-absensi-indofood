import { redirect } from "next/navigation";
import { getAlasanLembur } from "@/app/actions/alasanLembur";
import DashboardLayout from "@/app/components/DashboardLayout";
import { auth } from "@/lib/auth";
import AlasanLemburClient from "./AlasanLemburClient";

export default async function AlasanLemburPage() {
    const session = await auth();
    if (!session) {
        redirect("/");
    }

    const alasanLemburData = await getAlasanLembur();

    return (
        <DashboardLayout username={session.user.username}>
            <AlasanLemburClient initialAlasanLembur={alasanLemburData} />
        </DashboardLayout>
    );
}
