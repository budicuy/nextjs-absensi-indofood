import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { getVendor } from "@/app/actions/vendor";
import VendorClient from "./VendorClient";
import DashboardLayout from "@/app/components/DashboardLayout";

export default async function VendorPage() {
  const session = await auth();
  if (!session) {
    redirect("/");
  }

  const vendorData = await getVendor();

  return (
    <DashboardLayout username={session.user.username}>
      <VendorClient initialVendors={vendorData} />
    </DashboardLayout>
  );
}
