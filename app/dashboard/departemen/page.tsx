import { redirect } from "next/navigation";
import { getDepartemen } from "@/app/actions/departemen";
import DashboardLayout from "@/app/components/DashboardLayout";
import { auth } from "@/lib/auth";
import DepartemenClient from "./DepartemenClient";

export default async function DepartemenPage() {
    const session = await auth();
    if (!session) {
        redirect("/");
    }

    const departemenData = await getDepartemen();

    return (
        <DashboardLayout username={session.user.username}>
            <DepartemenClient initialDepartemen={departemenData} />
        </DashboardLayout>
    );
}
