"use client";

import { DollarSign, ListFilter, Pencil, Trash2, Users } from "lucide-react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { deleteGajiPokok, getGajiPokok } from "@/app/actions/gajiPokok";
import DeleteConfirmationModal from "@/app/components/DataTable/DeleteConfirmationModal";
import FilterSelect from "@/app/components/DataTable/FilterSelect";
import PageHeader from "@/app/components/DataTable/PageHeader";
import Pagination from "@/app/components/DataTable/Pagination";
import SearchBar from "@/app/components/DataTable/SearchBar";
import { useDeleteModal } from "@/hooks/useDeleteModal";
import { usePagination } from "@/hooks/usePagination";
import { useTableFilters } from "@/hooks/useTableFilters";
import { getAvatarColor, getInitials } from "@/lib/utils/avatar";
import type { GajiPokokWithRelations, KaryawanOption } from "@/types";
import GajiPokokModal from "./GajiPokokModal";

type Props = {
    initialGajiPokok: GajiPokokWithRelations[];
    karyawanList: KaryawanOption[];
};

export default function GajiPokokClient({
    initialGajiPokok,
    karyawanList,
}: Props) {
    const [gajiPokokList, setGajiPokokList] =
        useState<GajiPokokWithRelations[]>(initialGajiPokok);
    const [selectedKaryawan, setSelectedKaryawan] = useState<string>("");
    const [itemsPerPage, setItemsPerPage] = useState(50);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedGajiPokok, setSelectedGajiPokok] =
        useState<GajiPokokWithRelations | null>(null);

    // Use custom hooks for filtering
    const { searchQuery, setSearchQuery, filteredData } = useTableFilters({
        data: gajiPokokList,
        searchFields: ["karyawan"],
    });

    // Apply additional filters for karyawan and search
    const filteredGajiPokok = filteredData.filter((g) => {
        const matchesKaryawan =
            !selectedKaryawan || g.karyawan?.id.toString() === selectedKaryawan;

        // Apply search filter manually for karyawan nested object
        const matchesSearch =
            !searchQuery ||
            (g.karyawan &&
                (g.karyawan.nik
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase()) ||
                    g.karyawan.nama
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase())));

        return matchesKaryawan && matchesSearch;
    });

    // Use custom hooks
    const pagination = usePagination({
        data: filteredGajiPokok,
        itemsPerPage,
    });

    const deleteModal = useDeleteModal();

    const handleAddClick = () => {
        setSelectedGajiPokok(null);
        setIsModalOpen(true);
    };

    const handleEditClick = (gajiPokok: GajiPokokWithRelations) => {
        setSelectedGajiPokok(gajiPokok);
        setIsModalOpen(true);
    };

    const handleDeleteClick = async (gajiPokok: GajiPokokWithRelations) => {
        deleteModal.openDeleteModal({
            id: gajiPokok.id,
            name: gajiPokok.karyawan?.nama || "Tidak diketahui",
        });
    };

    const confirmDelete = async () => {
        if (!deleteModal.itemToDelete) return;

        const result = await deleteGajiPokok(deleteModal.itemToDelete.id);
        if (result.success) {
            toast.success(result.message || "Gaji pokok berhasil dihapus");
            setGajiPokokList(
                gajiPokokList.filter(
                    (g) => g.id !== deleteModal.itemToDelete?.id,
                ),
            );
            deleteModal.closeDeleteModal();
        } else {
            toast.error(result.error || "Gagal menghapus gaji pokok");
        }
    };

    const handleModalClose = async (updatedData?: GajiPokokWithRelations) => {
        setIsModalOpen(false);
        setSelectedGajiPokok(null);

        if (updatedData) {
            // Refresh data setelah create/update dengan memanggil server action
            try {
                const freshData = await getGajiPokok();
                setGajiPokokList(freshData);
            } catch (error) {
                console.error("Error refreshing data:", error);
                // Fallback ke reload jika fetch gagal
                window.location.reload();
            }
        }
    };

    // Format currency
    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
        }).format(amount);
    };

    return (
        <div className="p-6">
            {/* Header */}
            <PageHeader
                title="Data Gaji Pokok"
                description="Kelola data gaji pokok karyawan Absensi Indofood"
                onAddClick={handleAddClick}
                addButtonText="Tambah Gaji Pokok"
                icon={DollarSign}
            />

            {/* Table with Integrated Filters */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
                {/* Filters Section Inside Card */}
                <div className="p-6 bg-gray-50 border-b border-gray-200">
                    {/* Search Bar */}
                    <SearchBar
                        id="search-gaji-pokok"
                        placeholder="Cari berdasarkan NIK, nama karyawan..."
                        value={searchQuery}
                        onChange={(value) => {
                            setSearchQuery(value);
                            pagination.setCurrentPage(1);
                        }}
                    />

                    {/* Filters Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FilterSelect
                            id="filter-karyawan"
                            label="Karyawan"
                            value={selectedKaryawan}
                            onChange={(value) => {
                                setSelectedKaryawan(value);
                                pagination.setCurrentPage(1);
                            }}
                            options={[
                                { value: "", label: "Semua Karyawan" },
                                ...karyawanList.map((karyawan) => ({
                                    value: karyawan.id.toString(),
                                    label: `${karyawan.nik} - ${karyawan.nama}`,
                                })),
                            ]}
                            icon={Users}
                        />

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
                                    NIK
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider">
                                    Nama Karyawan
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider">
                                    Jumlah Gaji
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider">
                                    Tanggal Dibuat
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
                                        colSpan={5}
                                        className="px-6 py-8 text-center text-gray-500"
                                    >
                                        Tidak ada data gaji pokok
                                    </td>
                                </tr>
                            ) : (
                                pagination.currentData.map((gajiPokok) => (
                                    <tr
                                        key={gajiPokok.id}
                                        className="hover:bg-gray-50 transition-colors"
                                    >
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            {gajiPokok.karyawan?.nik || "-"}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                                            {gajiPokok.karyawan ? (
                                                <div className="flex items-center gap-3">
                                                    <div
                                                        className={`flex items-center justify-center w-10 h-10 rounded-full ${getAvatarColor(gajiPokok.karyawan.nama)} text-white font-bold text-sm shadow-sm`}
                                                    >
                                                        {getInitials(
                                                            gajiPokok.karyawan
                                                                .nama,
                                                        )}
                                                    </div>
                                                    <span className="text-gray-900 font-medium">
                                                        {
                                                            gajiPokok.karyawan
                                                                .nama
                                                        }
                                                    </span>
                                                </div>
                                            ) : (
                                                <span className="text-gray-400 italic">
                                                    Karyawan tidak ditemukan
                                                </span>
                                            )}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-800 border border-green-200">
                                                {formatCurrency(
                                                    gajiPokok.jumlahGaji,
                                                )}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                            {new Date(
                                                gajiPokok.createdAt,
                                            ).toLocaleDateString("id-ID", {
                                                weekday: "long",
                                                day: "numeric",
                                                month: "long",
                                                year: "numeric",
                                            })}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                                            <div className="flex items-center gap-2">
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        handleEditClick(
                                                            gajiPokok,
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
                                                            gajiPokok,
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
                    totalItems={filteredGajiPokok.length}
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
            <GajiPokokModal
                isOpen={isModalOpen}
                onClose={handleModalClose}
                gajiPokok={selectedGajiPokok}
                karyawanList={karyawanList}
            />

            <DeleteConfirmationModal
                isOpen={deleteModal.isDeleteModalOpen}
                itemName={deleteModal.itemToDelete?.name || ""}
                itemType="gaji pokok"
                onConfirm={confirmDelete}
                onCancel={deleteModal.closeDeleteModal}
            />
        </div>
    );
}
