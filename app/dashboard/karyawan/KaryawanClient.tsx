"use client";

import {
    Building2,
    ListFilter,
    Pencil,
    Trash2,
    TruckIcon,
    Users,
} from "lucide-react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { deleteKaryawan, getKaryawan } from "@/app/actions/karyawan";
import DeleteConfirmationModal from "@/app/components/DataTable/DeleteConfirmationModal";
import FilterSelect from "@/app/components/DataTable/FilterSelect";
import PageHeader from "@/app/components/DataTable/PageHeader";
import Pagination from "@/app/components/DataTable/Pagination";
import SearchBar from "@/app/components/DataTable/SearchBar";
import { useDeleteModal } from "@/hooks/useDeleteModal";
import { usePagination } from "@/hooks/usePagination";
import { useTableFilters } from "@/hooks/useTableFilters";
import { getAvatarColor, getInitials } from "@/lib/utils/avatar";
import type {
    DepartemenOption,
    KaryawanWithRelations,
    VendorOption,
} from "@/types";
import KaryawanModal from "./KaryawanModal";

type Props = {
    initialKaryawan: KaryawanWithRelations[];
    departemenList: DepartemenOption[];
    vendorList: VendorOption[];
};

export default function KaryawanClient({
    initialKaryawan,
    departemenList,
    vendorList,
}: Props) {
    const [karyawanList, setKaryawanList] =
        useState<KaryawanWithRelations[]>(initialKaryawan);
    const [selectedDepartemen, setSelectedDepartemen] = useState<string>("");
    const [selectedVendor, setSelectedVendor] = useState<string>("");
    const [itemsPerPage, setItemsPerPage] = useState(50);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedKaryawan, setSelectedKaryawan] =
        useState<KaryawanWithRelations | null>(null);

    // Use custom hooks for filtering
    const { searchQuery, setSearchQuery, filteredData } = useTableFilters({
        data: karyawanList,
        searchFields: ["nik", "nama", "no_telp"],
    });

    // Apply additional filters for departemen and vendor
    const filteredKaryawan = filteredData.filter((k) => {
        const matchesDepartemen =
            !selectedDepartemen ||
            k.departemen?.id.toString() === selectedDepartemen;

        const matchesVendor =
            !selectedVendor || k.vendor?.id.toString() === selectedVendor;

        return matchesDepartemen && matchesVendor;
    });

    // Use custom hooks
    const pagination = usePagination({
        data: filteredKaryawan,
        itemsPerPage,
    });

    const deleteModal = useDeleteModal();

    const handleAddClick = () => {
        setSelectedKaryawan(null);
        setIsModalOpen(true);
    };

    const handleEditClick = (karyawan: KaryawanWithRelations) => {
        setSelectedKaryawan(karyawan);
        setIsModalOpen(true);
    };

    const handleDeleteClick = async (karyawan: KaryawanWithRelations) => {
        deleteModal.openDeleteModal({
            id: karyawan.id,
            name: karyawan.nama,
        });
    };

    const confirmDelete = async () => {
        if (!deleteModal.itemToDelete) return;

        const result = await deleteKaryawan(deleteModal.itemToDelete.id);
        if (result.success) {
            toast.success(result.message || "Karyawan berhasil dihapus");
            setKaryawanList(
                karyawanList.filter(
                    (k) => k.id !== deleteModal.itemToDelete?.id,
                ),
            );
            deleteModal.closeDeleteModal();
        } else {
            toast.error(result.error || "Gagal menghapus karyawan");
        }
    };

    // Generate consistent color for departemen
    const getDepartemenColor = (nama: string) => {
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
            nama.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0) %
            colors.length;
        return colors[index];
    };

    // Generate consistent color for vendor
    const getVendorColor = (nama: string) => {
        const colors = [
            "bg-violet-100 text-violet-800 border-violet-200",
            "bg-fuchsia-100 text-fuchsia-800 border-fuchsia-200",
            "bg-sky-100 text-sky-800 border-sky-200",
            "bg-green-100 text-green-800 border-green-200",
            "bg-yellow-100 text-yellow-800 border-yellow-200",
            "bg-red-100 text-red-800 border-red-200",
            "bg-slate-100 text-slate-800 border-slate-200",
        ];
        const index =
            nama.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0) %
            colors.length;
        return colors[index];
    };

    const handleModalClose = async (updatedData?: KaryawanWithRelations) => {
        setIsModalOpen(false);
        setSelectedKaryawan(null);

        if (updatedData) {
            // Refresh data setelah create/update dengan memanggil server action
            try {
                const freshData = await getKaryawan();
                setKaryawanList(freshData);
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
                title="Data Karyawan"
                description="Kelola data karyawan Absensi Indofood"
                onAddClick={handleAddClick}
                addButtonText="Tambah Karyawan"
                icon={Users}
            />

            {/* Table with Integrated Filters */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
                {/* Filters Section Inside Card */}
                <div className="p-6 bg-gray-50 border-b border-gray-200">
                    {/* Search Bar */}
                    <SearchBar
                        id="search-karyawan"
                        placeholder="Cari berdasarkan NIK, nama, departemen, vendor..."
                        value={searchQuery}
                        onChange={(value) => {
                            setSearchQuery(value);
                            pagination.setCurrentPage(1);
                        }}
                    />

                    {/* Filters Row */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <FilterSelect
                            id="filter-departemen"
                            label="Departemen"
                            value={selectedDepartemen}
                            onChange={(value) => {
                                setSelectedDepartemen(value);
                                pagination.setCurrentPage(1);
                            }}
                            options={[
                                { value: "", label: "Semua Departemen" },
                                ...departemenList.map((dept) => ({
                                    value: dept.id.toString(),
                                    label: dept.nama || "Tidak ada nama",
                                })),
                            ]}
                            icon={Building2}
                        />

                        <FilterSelect
                            id="filter-vendor"
                            label="Vendor"
                            value={selectedVendor}
                            onChange={(value) => {
                                setSelectedVendor(value);
                                pagination.setCurrentPage(1);
                            }}
                            options={[
                                { value: "", label: "Semua Vendor" },
                                ...vendorList.map((vendor) => ({
                                    value: vendor.id.toString(),
                                    label: vendor.nama || "Tidak ada nama",
                                })),
                            ]}
                            icon={TruckIcon}
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
                                    Nama Lengkap
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider">
                                    Departemen
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider">
                                    Vendor
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider">
                                    No. Telephone
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider">
                                    Tanggal Masuk
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
                                        colSpan={8}
                                        className="px-6 py-8 text-center text-gray-500"
                                    >
                                        Tidak ada data karyawan
                                    </td>
                                </tr>
                            ) : (
                                pagination.currentData.map((karyawan) => (
                                    <tr
                                        key={karyawan.id}
                                        className="hover:bg-gray-50 transition-colors"
                                    >
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            {karyawan.nik}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                                            <div className="flex items-center gap-3">
                                                <div
                                                    className={`flex items-center justify-center w-10 h-10 rounded-full ${getAvatarColor(karyawan.nama)} text-white font-bold text-sm shadow-sm`}
                                                >
                                                    {getInitials(karyawan.nama)}
                                                </div>
                                                <span className="text-gray-900 font-medium">
                                                    {karyawan.nama}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                                            {karyawan.departemen ? (
                                                <span
                                                    className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold border ${getDepartemenColor(karyawan.departemen.nama)}`}
                                                >
                                                    {karyawan.departemen.nama}
                                                </span>
                                            ) : (
                                                <span className="text-gray-400 italic">
                                                    -
                                                </span>
                                            )}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                                            {karyawan.vendor ? (
                                                <span
                                                    className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold border ${getVendorColor(karyawan.vendor.nama)}`}
                                                >
                                                    {karyawan.vendor.nama}
                                                </span>
                                            ) : (
                                                <span className="text-gray-400 italic">
                                                    -
                                                </span>
                                            )}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                            {karyawan.no_telp}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                            {new Date(
                                                karyawan.tanggal_masuk,
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
                                                            karyawan,
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
                                                            karyawan,
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
                    totalItems={filteredKaryawan.length}
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
            <KaryawanModal
                isOpen={isModalOpen}
                onClose={handleModalClose}
                karyawan={selectedKaryawan}
                departemenList={departemenList}
                vendorList={vendorList}
            />

            <DeleteConfirmationModal
                isOpen={deleteModal.isDeleteModalOpen}
                itemName={deleteModal.itemToDelete?.name || ""}
                itemType="karyawan"
                onConfirm={confirmDelete}
                onCancel={deleteModal.closeDeleteModal}
            />
        </div>
    );
}
