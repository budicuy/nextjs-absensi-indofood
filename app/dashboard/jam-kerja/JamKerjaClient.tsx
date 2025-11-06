"use client";

import { Clock, ListFilter, Pencil, Trash2 } from "lucide-react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { deleteJamKerja, getJamKerja } from "@/app/actions/jamKerja";
import DeleteConfirmationModal from "@/app/components/DataTable/DeleteConfirmationModal";
import FilterSelect from "@/app/components/DataTable/FilterSelect";
import PageHeader from "@/app/components/DataTable/PageHeader";
import Pagination from "@/app/components/DataTable/Pagination";
import SearchBar from "@/app/components/DataTable/SearchBar";
import { useDeleteModal } from "@/hooks/useDeleteModal";
import { usePagination } from "@/hooks/usePagination";
import type { JamKerjaModel } from "@/lib/generated/prisma/models/JamKerja";
import JamKerjaModal from "./JamKerjaModal";

type Props = {
    initialJamKerja: JamKerjaModel[];
};

export default function JamKerjaClient({ initialJamKerja }: Props) {
    const [jamKerjaList, setJamKerjaList] =
        useState<JamKerjaModel[]>(initialJamKerja);
    const [searchQuery, setSearchQuery] = useState("");
    const [itemsPerPage, setItemsPerPage] = useState(50);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedJamKerja, setSelectedJamKerja] =
        useState<JamKerjaModel | null>(null);

    // Filter jam kerja berdasarkan search query
    const filteredJamKerja = jamKerjaList.filter((jamKerja) => {
        return jamKerja.kodeShift
            .toLowerCase()
            .includes(searchQuery.toLowerCase());
    });

    // Use custom hooks
    const pagination = usePagination({
        data: filteredJamKerja,
        itemsPerPage,
    });

    const deleteModal = useDeleteModal();

    const handleAddClick = () => {
        setSelectedJamKerja(null);
        setIsModalOpen(true);
    };

    const handleEditClick = (jamKerja: JamKerjaModel) => {
        setSelectedJamKerja(jamKerja);
        setIsModalOpen(true);
    };

    const handleDeleteClick = async (jamKerja: JamKerjaModel) => {
        deleteModal.openDeleteModal({
            id: jamKerja.id,
            name: jamKerja.kodeShift,
        });
    };

    const confirmDelete = async () => {
        if (!deleteModal.itemToDelete) return;

        const result = await deleteJamKerja(deleteModal.itemToDelete.id);
        if (result.success) {
            toast.success(result.message || "Jam kerja berhasil dihapus");
            setJamKerjaList(
                jamKerjaList.filter(
                    (jk) => jk.id !== deleteModal.itemToDelete?.id,
                ),
            );
            deleteModal.closeDeleteModal();
        } else {
            toast.error(result.error || "Gagal menghapus jam kerja");
        }
    };

    // Format time to HH:MM
    const formatTime = (date: Date) => {
        return new Date(date).toLocaleTimeString("id-ID", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
        });
    };

    // Get shift color based on kode shift
    const getShiftColor = (kodeShift: string) => {
        const colors = [
            "bg-blue-500",
            "bg-purple-500",
            "bg-pink-500",
            "bg-indigo-500",
            "bg-cyan-500",
            "bg-teal-500",
            "bg-emerald-500",
            "bg-amber-500",
            "bg-orange-500",
            "bg-rose-500",
        ];
        const index =
            kodeShift
                .split("")
                .reduce((acc, char) => acc + char.charCodeAt(0), 0) %
            colors.length;
        return colors[index];
    };

    const handleModalClose = async (updatedData?: JamKerjaModel) => {
        setIsModalOpen(false);
        setSelectedJamKerja(null);

        if (updatedData) {
            // Refresh data setelah create/update dengan memanggil server action
            try {
                const freshData = await getJamKerja();
                setJamKerjaList(freshData);
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
                title="Data Jam Kerja"
                description="Kelola data jam kerja sistem Absensi Indofood"
                onAddClick={handleAddClick}
                addButtonText="Tambah Jam Kerja"
                icon={Clock}
            />

            {/* Table with Integrated Filters */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
                {/* Filters Section Inside Card */}
                <div className="p-6 bg-gray-50 border-b border-gray-200">
                    {/* Search Bar */}
                    <SearchBar
                        id="search-jam-kerja"
                        placeholder="Cari berdasarkan kode shift..."
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
                                    Kode Shift
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider">
                                    Jam Masuk
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider">
                                    Jam Pulang
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
                                        Tidak ada data jam kerja
                                    </td>
                                </tr>
                            ) : (
                                pagination.currentData.map((jamKerja) => (
                                    <tr
                                        key={jamKerja.id}
                                        className="hover:bg-gray-50 transition-colors"
                                    >
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                                            <div className="flex items-center gap-3">
                                                <div
                                                    className={`flex items-center justify-center w-10 h-10 rounded-full ${getShiftColor(
                                                        jamKerja.kodeShift,
                                                    )} text-white font-bold text-sm shadow-sm`}
                                                >
                                                    <Clock className="w-5 h-5" />
                                                </div>
                                                <span className="text-gray-900 font-medium">
                                                    {jamKerja.kodeShift}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                                            <div className="flex items-center gap-2">
                                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                                <span className="text-gray-900 font-medium">
                                                    {formatTime(
                                                        jamKerja.jamMasuk,
                                                    )}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                                            <div className="flex items-center gap-2">
                                                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                                <span className="text-gray-900 font-medium">
                                                    {formatTime(
                                                        jamKerja.jamPulang,
                                                    )}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                            {new Date(
                                                jamKerja.createdAt,
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
                                                jamKerja.updatedAt,
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
                                                            jamKerja,
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
                                                            jamKerja,
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
                    totalItems={filteredJamKerja.length}
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
            <JamKerjaModal
                isOpen={isModalOpen}
                onClose={handleModalClose}
                jamKerja={selectedJamKerja}
            />

            <DeleteConfirmationModal
                isOpen={deleteModal.isDeleteModalOpen}
                itemName={deleteModal.itemToDelete?.name || ""}
                itemType="jam kerja"
                onConfirm={confirmDelete}
                onCancel={deleteModal.closeDeleteModal}
            />
        </div>
    );
}
