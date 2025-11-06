"use client";

import {
    ListFilter,
    MapPin,
    Pencil,
    Phone,
    Trash2,
    TruckIcon,
} from "lucide-react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { deleteVendor, getVendor } from "@/app/actions/vendor";
import DeleteConfirmationModal from "@/app/components/DataTable/DeleteConfirmationModal";
import FilterSelect from "@/app/components/DataTable/FilterSelect";
import PageHeader from "@/app/components/DataTable/PageHeader";
import Pagination from "@/app/components/DataTable/Pagination";
import SearchBar from "@/app/components/DataTable/SearchBar";
import { useDeleteModal } from "@/hooks/useDeleteModal";
import { usePagination } from "@/hooks/usePagination";
import type { VendorModel } from "@/lib/generated/prisma/models/Vendor";
import { getAvatarColor, getInitials } from "@/lib/utils/avatar";
import VendorModal from "./VendorModal";

type Props = {
    initialVendors: VendorModel[];
};

export default function VendorClient({ initialVendors }: Props) {
    const [vendorList, setVendorList] = useState<VendorModel[]>(initialVendors);
    const [searchQuery, setSearchQuery] = useState("");
    const [itemsPerPage, setItemsPerPage] = useState(50);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedVendor, setSelectedVendor] = useState<VendorModel | null>(
        null,
    );

    // Filter vendors berdasarkan search query
    const filteredVendors = vendorList.filter((vendor) => {
        return (
            vendor.namaVendor
                .toLowerCase()
                .includes(searchQuery.toLowerCase()) ||
            vendor.alamat.toLowerCase().includes(searchQuery.toLowerCase()) ||
            vendor.noTelp.includes(searchQuery)
        );
    });

    // Use custom hooks
    const pagination = usePagination({
        data: filteredVendors,
        itemsPerPage,
    });

    const deleteModal = useDeleteModal();

    const handleAddClick = () => {
        setSelectedVendor(null);
        setIsModalOpen(true);
    };

    const handleEditClick = (vendor: VendorModel) => {
        setSelectedVendor(vendor);
        setIsModalOpen(true);
    };

    const handleDeleteClick = (vendor: VendorModel) => {
        deleteModal.openDeleteModal({
            id: vendor.id,
            name: vendor.namaVendor,
        });
    };

    const confirmDelete = async () => {
        if (!deleteModal.itemToDelete) return;

        const result = await deleteVendor(deleteModal.itemToDelete.id);
        if (result.success) {
            toast.success(result.message || "Vendor berhasil dihapus");
            setVendorList(
                vendorList.filter((v) => v.id !== deleteModal.itemToDelete?.id),
            );
            deleteModal.closeDeleteModal();
        } else {
            toast.error(result.error || "Gagal menghapus vendor");
        }
    };

    const handleModalClose = async (updatedData?: VendorModel) => {
        setIsModalOpen(false);
        setSelectedVendor(null);

        if (updatedData) {
            // Refresh data setelah create/update dengan memanggil server action
            try {
                const freshData = await getVendor();
                setVendorList(freshData);
            } catch (error) {
                console.error("Error refreshing data:", error);
                // Fallback ke reload jika fetch gagal
                window.location.reload();
            }
        }
    };

    return (
        <div className="p-6">
            {/* Header */}
            <PageHeader
                title="Data Vendor"
                description="Kelola data vendor Absensi Indofood"
                onAddClick={handleAddClick}
                addButtonText="Tambah Vendor"
                icon={TruckIcon}
            />

            {/* Table with Integrated Filters */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
                {/* Filters Section Inside Card */}
                <div className="p-6 bg-gray-50 border-b border-gray-200">
                    {/* Search Bar */}
                    <SearchBar
                        id="search-vendor"
                        placeholder="Cari berdasarkan nama, alamat, atau no. telepon..."
                        value={searchQuery}
                        onChange={(value) => {
                            setSearchQuery(value);
                            pagination.setCurrentPage(1);
                        }}
                    />

                    {/* Filters Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FilterSelect
                            id="items-per-page"
                            label="Tampilkan"
                            value={itemsPerPage.toString()}
                            onChange={(value) => {
                                setItemsPerPage(Number(value));
                                pagination.setCurrentPage(1);
                            }}
                            options={[
                                { value: "50", label: "50 per halaman" },
                                { value: "100", label: "100 per halaman" },
                                { value: "150", label: "150 per halaman" },
                                { value: "200", label: "200 per halaman" },
                            ]}
                            icon={ListFilter}
                        />
                    </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-(--primary-color) border-b border-(--primary-hover)">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider">
                                    Nama Vendor
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider">
                                    Alamat
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider">
                                    No. Telepon
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider">
                                    Tanggal Dibuat
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider">
                                    Terakhir Diupdate
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider">
                                    Aksi
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {pagination.currentData.length === 0 ? (
                                <tr>
                                    <td
                                        colSpan={6}
                                        className="px-6 py-8 text-center text-gray-500"
                                    >
                                        Tidak ada data vendor
                                    </td>
                                </tr>
                            ) : (
                                pagination.currentData.map((vendor) => (
                                    <tr
                                        key={vendor.id}
                                        className="hover:bg-gray-50 transition-colors"
                                    >
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                                            <div className="flex items-center gap-3">
                                                <div
                                                    className={`flex items-center justify-center w-10 h-10 rounded-full ${getAvatarColor(
                                                        vendor.namaVendor,
                                                    )} text-white font-bold text-sm shadow-sm`}
                                                >
                                                    {getInitials(
                                                        vendor.namaVendor,
                                                    )}
                                                </div>
                                                <div>
                                                    <span className="text-gray-900 font-medium block">
                                                        {vendor.namaVendor}
                                                    </span>
                                                    <span className="text-gray-500 text-xs">
                                                        {vendor.slugVendor}
                                                    </span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-sm">
                                            <div className="flex items-start gap-2">
                                                <MapPin className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" />
                                                <span className="text-gray-600 line-clamp-2">
                                                    {vendor.alamat}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                                            <div className="flex items-center gap-2">
                                                <Phone className="w-4 h-4 text-gray-400" />
                                                <span className="text-gray-600">
                                                    {vendor.noTelp}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                            {new Date(
                                                vendor.createdAt,
                                            ).toLocaleDateString("id-ID", {
                                                weekday: "long",
                                                day: "numeric",
                                                month: "long",
                                                year: "numeric",
                                                hour: "2-digit",
                                                minute: "2-digit",
                                            })}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                            {new Date(
                                                vendor.updatedAt,
                                            ).toLocaleDateString("id-ID", {
                                                weekday: "long",
                                                day: "numeric",
                                                month: "long",
                                                year: "numeric",
                                                hour: "2-digit",
                                                minute: "2-digit",
                                            })}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                                            <div className="flex items-center gap-2">
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        handleEditClick(vendor)
                                                    }
                                                    className="p-2 bg-amber-500 text-white hover:bg-amber-600 rounded-lg transition-colors border border-amber-600 shadow-sm"
                                                    title="Edit"
                                                >
                                                    <Pencil className="w-4 h-4" />
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        handleDeleteClick(
                                                            vendor,
                                                        )
                                                    }
                                                    className="p-2 bg-red-600 text-white hover:bg-red-700 rounded-lg transition-colors border border-red-700 shadow-sm"
                                                    title="Hapus"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <Pagination
                    currentPage={pagination.currentPage}
                    totalPages={pagination.totalPages}
                    totalItems={filteredVendors.length}
                    startIndex={pagination.startIndex}
                    endIndex={pagination.endIndex}
                    onPageChange={pagination.setCurrentPage}
                    onNextPage={pagination.goToNextPage}
                    onPreviousPage={pagination.goToPreviousPage}
                    canGoNext={pagination.canGoNext}
                    canGoPrevious={pagination.canGoPrevious}
                />
            </div>

            {/* Modal */}
            <VendorModal
                isOpen={isModalOpen}
                onClose={handleModalClose}
                vendor={selectedVendor}
            />

            {/* Delete Confirmation Modal */}
            <DeleteConfirmationModal
                isOpen={deleteModal.isDeleteModalOpen}
                itemName={deleteModal.itemToDelete?.name || ""}
                itemType="vendor"
                onConfirm={confirmDelete}
                onCancel={deleteModal.closeDeleteModal}
            />
        </div>
    );
}
