"use client";

import { FileText, ListFilter, Pencil, Trash2 } from "lucide-react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import {
    deleteAlasanLembur,
    getAlasanLembur,
} from "@/app/actions/alasanLembur";
import DeleteConfirmationModal from "@/app/components/DataTable/DeleteConfirmationModal";
import FilterSelect from "@/app/components/DataTable/FilterSelect";
import PageHeader from "@/app/components/DataTable/PageHeader";
import Pagination from "@/app/components/DataTable/Pagination";
import SearchBar from "@/app/components/DataTable/SearchBar";
import { useDeleteModal } from "@/hooks/useDeleteModal";
import { usePagination } from "@/hooks/usePagination";
import type { AlasanLemburModel } from "@/lib/generated/prisma/models/AlasanLembur";
import AlasanLemburModal from "./AlasanLemburModal";

type Props = {
    initialData: AlasanLemburModel[];
};

export default function AlasanLemburClient({ initialData }: Props) {
    const [alasanLemburList, setAlasanLemburList] =
        useState<AlasanLemburModel[]>(initialData);
    const [searchQuery, setSearchQuery] = useState("");
    const [itemsPerPage, setItemsPerPage] = useState(50);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedAlasanLembur, setSelectedAlasanLembur] =
        useState<AlasanLemburModel | null>(null);

    // Filter alasan lembur berdasarkan search query
    const filteredAlasanLembur = alasanLemburList.filter((alasan) => {
        return alasan.description
            .toLowerCase()
            .includes(searchQuery.toLowerCase());
    });

    // Use custom hooks
    const pagination = usePagination({
        data: filteredAlasanLembur,
        itemsPerPage,
    });

    const deleteModal = useDeleteModal();

    const handleAddClick = () => {
        setSelectedAlasanLembur(null);
        setIsModalOpen(true);
    };

    const handleEditClick = (alasan: AlasanLemburModel) => {
        setSelectedAlasanLembur(alasan);
        setIsModalOpen(true);
    };

    const handleDeleteClick = (alasan: AlasanLemburModel) => {
        deleteModal.openDeleteModal({
            id: alasan.id,
            name: alasan.description,
        });
    };

    const confirmDelete = async () => {
        if (!deleteModal.itemToDelete) return;

        const result = await deleteAlasanLembur(deleteModal.itemToDelete.id);
        if (result.success) {
            toast.success(result.message || "Alasan lembur berhasil dihapus");
            setAlasanLemburList(
                alasanLemburList.filter(
                    (a) => a.id !== deleteModal.itemToDelete?.id,
                ),
            );
            deleteModal.closeDeleteModal();
        } else {
            toast.error(result.error || "Gagal menghapus alasan lembur");
        }
    };

    // Get description color based on description
    const getDescriptionColor = (description: string) => {
        const colors = [
            "bg-blue-100 text-blue-800 border-blue-200",
            "bg-purple-100 text-purple-800 border-purple-200",
            "bg-pink-100 text-pink-800 border-pink-200",
            "bg-indigo-100 text-indigo-800 border-indigo-200",
            "bg-cyan-100 text-cyan-800 border-cyan-200",
            "bg-teal-100 text-teal-800 border-teal-200",
            "bg-emerald-100 text-emerald-800 border-emerald-200",
            "bg-lime-100 text-lime-800 border-lime-200",
            "bg-amber-100 text-amber-800 border-amber-200",
            "bg-orange-100 text-orange-800 border-orange-200",
            "bg-rose-100 text-rose-800 border-rose-200",
        ];
        const index =
            description
                .split("")
                .reduce((acc, char) => acc + char.charCodeAt(0), 0) %
            colors.length;
        return colors[index];
    };

    const handleModalClose = async (updatedData?: AlasanLemburModel) => {
        setIsModalOpen(false);
        setSelectedAlasanLembur(null);

        if (updatedData) {
            // Refresh data setelah create/update dengan memanggil server action
            try {
                const freshData = await getAlasanLembur();
                setAlasanLemburList(freshData);
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
                title="Data Alasan Lembur"
                description="Kelola data alasan lembur sistem Absensi Indofood"
                onAddClick={handleAddClick}
                addButtonText="Tambah Alasan Lembur"
                icon={FileText}
            />

            {/* Table with Integrated Filters */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
                {/* Filters Section Inside Card */}
                <div className="p-6 bg-gray-50 border-b border-gray-200">
                    {/* Search Bar */}
                    <SearchBar
                        id="search-alasan-lembur"
                        placeholder="Cari berdasarkan deskripsi..."
                        value={searchQuery}
                        onChange={(value) => {
                            setSearchQuery(value);
                            pagination.setCurrentPage(1);
                        }}
                    />

                    {/* Items Per Page */}
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
                        <thead className="bg-(--primary-color) border-b border-(--primary-border)">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider">
                                    Deskripsi
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
                                        Tidak ada data alasan lembur
                                    </td>
                                </tr>
                            ) : (
                                pagination.currentData.map((alasan) => (
                                    <tr
                                        key={alasan.id}
                                        className="hover:bg-gray-50 transition-colors"
                                    >
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                                            <div className="flex items-center gap-3">
                                                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white font-bold text-sm shadow-sm">
                                                    <FileText className="w-5 h-5" />
                                                </div>
                                                <div className="flex-1">
                                                    <span
                                                        className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold border ${getDescriptionColor(alasan.description)}`}
                                                    >
                                                        {alasan.description}
                                                    </span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                            {new Date(
                                                alasan.createdAt,
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
                                                alasan.updatedAt,
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
                                                        handleEditClick(alasan)
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
                                                            alasan,
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
                    totalItems={filteredAlasanLembur.length}
                    startIndex={pagination.startIndex}
                    endIndex={pagination.endIndex}
                    onPageChange={pagination.setCurrentPage}
                    onNextPage={pagination.goToNextPage}
                    onPreviousPage={pagination.goToPreviousPage}
                    canGoNext={pagination.canGoNext}
                    canGoPrevious={pagination.canGoPrevious}
                />
            </div>

            {/* Modals */}
            <AlasanLemburModal
                isOpen={isModalOpen}
                onClose={handleModalClose}
                alasanLembur={selectedAlasanLembur}
            />

            <DeleteConfirmationModal
                isOpen={deleteModal.isDeleteModalOpen}
                itemName={deleteModal.itemToDelete?.name || ""}
                itemType="alasan lembur"
                onConfirm={confirmDelete}
                onCancel={deleteModal.closeDeleteModal}
            />
        </div>
    );
}
``;
