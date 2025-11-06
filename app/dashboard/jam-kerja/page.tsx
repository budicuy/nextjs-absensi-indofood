import { redirect } from "next/navigation";
import { getJamKerja } from "@/app/actions/jamKerja";
import DashboardLayout from "@/app/components/DashboardLayout";
import { auth } from "@/lib/auth";
import JamKerjaClient from "./JamKerjaClient";

export default async function JamKerjaPage() {
    const session = await auth();
    if (!session) {
        redirect("/");
    }

    const jamKerjaData = await getJamKerja();

    return (
        <DashboardLayout username={session.user.username}>
            <JamKerjaClient initialJamKerja={jamKerjaData} />
        </DashboardLayout>
    );
}
