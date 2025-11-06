"use client";

import { Building2, ListFilter, Pencil, Trash2 } from "lucide-react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { deleteDepartemen, getDepartemen } from "@/app/actions/departemen";
import DeleteConfirmationModal from "@/app/components/DataTable/DeleteConfirmationModal";
import FilterSelect from "@/app/components/DataTable/FilterSelect";
import PageHeader from "@/app/components/DataTable/PageHeader";
import Pagination from "@/app/components/DataTable/Pagination";
import SearchBar from "@/app/components/DataTable/SearchBar";
import { useDeleteModal } from "@/hooks/useDeleteModal";
import { usePagination } from "@/hooks/usePagination";
import type { DepartemenModel } from "@/lib/generated/prisma/models";
import { getAvatarColor, getInitials } from "@/lib/utils/avatar";
import DepartemenModal from "./DepartemenModal";

type Props = {
    initialDepartemen: DepartemenModel[];
};

export default function DepartemenClient({ initialDepartemen }: Props) {
    const [departemenList, setDepartemenList] =
        useState<DepartemenModel[]>(initialDepartemen);
    const [searchQuery, setSearchQuery] = useState("");
    const [itemsPerPage, setItemsPerPage] = useState(50);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedDepartemen, setSelectedDepartemen] =
        useState<DepartemenModel | null>(null);

    // Filter departemen berdasarkan search query
    const filteredDepartemen = departemenList.filter((departemen) => {
        return departemen.namaDepartemen
            .toLowerCase()
            .includes(searchQuery.toLowerCase());
    });

    // Use custom hooks
    const pagination = usePagination({
        data: filteredDepartemen,
        itemsPerPage,
    });

    const deleteModal = useDeleteModal();

    const handleAddClick = () => {
        setSelectedDepartemen(null);
        setIsModalOpen(true);
    };

    const handleEditClick = (departemen: DepartemenModel) => {
        setSelectedDepartemen(departemen);
        setIsModalOpen(true);
    };

    const handleDeleteClick = (departemen: DepartemenModel) => {
        deleteModal.openDeleteModal({
            id: departemen.id,
            name: departemen.namaDepartemen,
        });
    };

    const confirmDelete = async () => {
        if (!deleteModal.itemToDelete) return;

        const result = await deleteDepartemen(deleteModal.itemToDelete.id);
        if (result.success) {
            toast.success(result.message || "Departemen berhasil dihapus");
            setDepartemenList(
                departemenList.filter(
                    (d) => d.id !== deleteModal.itemToDelete?.id,
                ),
            );
            deleteModal.closeDeleteModal();
        } else {
            toast.error(result.error || "Gagal menghapus departemen");
        }
    };

    const handleModalClose = async (updatedData?: DepartemenModel) => {
        setIsModalOpen(false);
        setSelectedDepartemen(null);

        if (updatedData) {
            // Refresh data setelah create/update dengan memanggil server action
            try {
                const freshData = await getDepartemen();
                setDepartemenList(freshData);
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
                title="Data Departemen"
                description="Kelola data departemen Absensi Indofood"
                onAddClick={handleAddClick}
                addButtonText="Tambah Departemen"
                icon={Building2}
            />

            {/* Table with Integrated Filters */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
                {/* Filters Section Inside Card */}
                <div className="p-6 bg-gray-50 border-b border-gray-200">
                    {/* Search Bar */}
                    <SearchBar
                        id="search-departemen"
                        placeholder="Cari berdasarkan nama departemen..."
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
                                    Nama Departemen
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
                                        colSpan={4}
                                        className="px-6 py-8 text-center text-gray-500"
                                    >
                                        Tidak ada data departemen
                                    </td>
                                </tr>
                            ) : (
                                pagination.currentData.map((departemen) => (
                                    <tr
                                        key={departemen.id}
                                        className="hover:bg-gray-50 transition-colors"
                                    >
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                                            <div className="flex items-center gap-3">
                                                <div
                                                    className={`flex items-center justify-center w-10 h-10 rounded-full ${getAvatarColor(
                                                        departemen.namaDepartemen,
                                                    )} text-white font-bold text-sm shadow-sm`}
                                                >
                                                    {getInitials(
                                                        departemen.namaDepartemen,
                                                    )}
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <span className="text-gray-900 font-medium">
                                                        {
                                                            departemen.namaDepartemen
                                                        }
                                                    </span>
                                                    <Building2 className="w-4 h-4 text-gray-400" />
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                            {new Date(
                                                departemen.createdAt,
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
                                                departemen.updatedAt,
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
                                                        handleEditClick(
                                                            departemen,
                                                        )
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
                                                            departemen,
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
                    totalItems={filteredDepartemen.length}
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
            <DepartemenModal
                isOpen={isModalOpen}
                onClose={handleModalClose}
                departemen={selectedDepartemen}
            />

            {/* Delete Confirmation Modal */}
            <DeleteConfirmationModal
                isOpen={deleteModal.isDeleteModalOpen}
                itemName={deleteModal.itemToDelete?.name || ""}
                itemType="departemen"
                onConfirm={confirmDelete}
                onCancel={deleteModal.closeDeleteModal}
            />
        </div>
    );
}
