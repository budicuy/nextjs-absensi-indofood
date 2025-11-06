import { redirect } from "next/navigation";
import { getVendor } from "@/app/actions/vendor";
import DashboardLayout from "@/app/components/DashboardLayout";
import { auth } from "@/lib/auth";
import VendorClient from "./VendorClient";

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
