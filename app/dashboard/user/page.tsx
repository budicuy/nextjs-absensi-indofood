import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { getUser } from "@/app/actions/user";
import UserClient from "./UserClient";
import DashboardLayout from "@/app/components/DashboardLayout";

export default async function UserPage() {
  const session = await auth();
  if (!session) {
    redirect("/");
  }

  const userData = await getUser();

  return (
    <DashboardLayout username={session.user.username}>
      <UserClient initialUsers={userData} />
    </DashboardLayout>
  );
}
