import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { getDepartemen } from "@/app/actions/departemen";
import DepartemenClient from "./DepartemenClient";
import DashboardLayout from "@/app/components/DashboardLayout";

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
