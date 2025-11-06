"use client";

import { useState } from "react";
import {
  Search,
  Plus,
  Pencil,
  Trash2,
  ChevronLeft,
  ChevronRight,
  ListFilter,
  AlertTriangle,
  X,
  Building2,
  Users,
} from "lucide-react";
import DepartemenModal from "./DepartemenModal";
import { deleteDepartemen, getDepartemen } from "@/app/actions/departemen";
import { toast } from "react-hot-toast";

type Departemen = {
  id: string;
  namaDepartemen: string;
  slugDepartemen: string;
  createdAt: Date;
  updatedAt: Date;
};

type Props = {
  initialDepartemen: Departemen[];
};

export default function DepartemenClient({ initialDepartemen }: Props) {
  const [departemenList, setDepartemenList] =
    useState<Departemen[]>(initialDepartemen);
  const [searchQuery, setSearchQuery] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(50);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [departemenToDelete, setDepartemenToDelete] = useState<{
    id: string;
    namaDepartemen: string;
  } | null>(null);
  const [selectedDepartemen, setSelectedDepartemen] =
    useState<Departemen | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  // Filter departemen berdasarkan search query
  const filteredDepartemen = departemenList.filter((departemen) => {
    const matchesSearch = departemen.namaDepartemen
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    return matchesSearch;
  });

  // Pagination
  const totalPages = Math.ceil(filteredDepartemen.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentDepartemen = filteredDepartemen.slice(startIndex, endIndex);

  const handleAddClick = () => {
    setSelectedDepartemen(null);
    setIsModalOpen(true);
  };

  const handleEditClick = (departemen: Departemen) => {
    setSelectedDepartemen(departemen);
    setIsModalOpen(true);
  };

  const handleDeleteClick = async (departemen: Departemen) => {
    setDepartemenToDelete({
      id: departemen.id,
      namaDepartemen: departemen.namaDepartemen,
    });
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = async () => {
    if (!departemenToDelete) return;

    const result = await deleteDepartemen(departemenToDelete.id);
    if (result.success) {
      toast.success(result.message || "Departemen berhasil dihapus");
      setDepartemenList(
        departemenList.filter((d) => d.id !== departemenToDelete.id),
      );
    } else {
      toast.error(result.error || "Gagal menghapus departemen");
    }

    setIsDeleteModalOpen(false);
    setDepartemenToDelete(null);
  };

  const cancelDelete = () => {
    setIsDeleteModalOpen(false);
    setDepartemenToDelete(null);
  };

  // Get initials from departemen name
  const getInitials = (namaDepartemen: string) => {
    const words = namaDepartemen.trim().split(" ");
    if (words.length === 1) {
      return words[0].substring(0, 2).toUpperCase();
    }
    return (words[0][0] + words[words.length - 1][0]).toUpperCase();
  };

  // Generate avatar color based on departemen name
  const getAvatarColor = (namaDepartemen: string) => {
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
      namaDepartemen
        .split("")
        .reduce((acc, char) => acc + char.charCodeAt(0), 0) % colors.length;
    return colors[index];
  };

  const handleModalClose = async (updatedData?: Departemen) => {
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
      {/* Header with Gradient Background */}
      <div className="mb-6 bg-linear-to-r from-(--primary-hover) to-(--primary-color) rounded-xl p-6 shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white">Data Departemen</h1>
            <p className="text-(--primary-light) mt-2">
              Kelola data departemen Absensi Indofood
            </p>
          </div>
          <button
            type="button"
            onClick={handleAddClick}
            className="flex items-center gap-2 px-5 py-3 bg-white text-(--primary-color) rounded-lg hover:bg-(--primary-light) transition-all shadow-md hover:shadow-lg font-semibold"
          >
            <Plus className="w-5 h-5" />
            <span className="hidden sm:inline">Tambah Departemen</span>
            <span className="sm:hidden">Tambah</span>
          </button>
        </div>
      </div>

      {/* Table with Integrated Filters */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
        {/* Filters Section Inside Card */}
        <div className="p-6 bg-gray-50 border-b border-gray-200">
          {/* Search Bar */}
          <div className="mb-4">
            <label
              htmlFor="search-departemen"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Pencarian
            </label>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                id="search-departemen"
                placeholder="Cari berdasarkan nama departemen..."
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-(--primary-color) focus:border-transparent transition-all bg-white"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
              />
            </div>
          </div>

          {/* Filters Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="items-per-page"
                className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2"
              >
                <ListFilter className="w-4 h-4 text-(--primary-color)" />
                Tampilkan
              </label>
              <div className="relative">
                <ListFilter className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <select
                  id="items-per-page"
                  value={itemsPerPage}
                  onChange={(e) => {
                    setItemsPerPage(Number(e.target.value));
                    setCurrentPage(1);
                  }}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-(--primary-color) focus:border-transparent transition-all bg-white appearance-none"
                >
                  <option value={50}>50 per halaman</option>
                  <option value={100}>100 per halaman</option>
                  <option value={150}>150 per halaman</option>
                  <option value={200}>200 per halaman</option>
                </select>
              </div>
            </div>
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
              {currentDepartemen.length === 0 ? (
                <tr>
                  <td
                    colSpan={4}
                    className="px-6 py-8 text-center text-gray-500"
                  >
                    Tidak ada data departemen
                  </td>
                </tr>
              ) : (
                currentDepartemen.map((departemen) => (
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
                          {getInitials(departemen.namaDepartemen)}
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-gray-900 font-medium">
                            {departemen.namaDepartemen}
                          </span>
                          <Building2 className="w-4 h-4 text-gray-400" />
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {new Date(departemen.createdAt).toLocaleDateString(
                        "id-ID",
                        {
                          weekday: "long",
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        },
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {new Date(departemen.updatedAt).toLocaleDateString(
                        "id-ID",
                        {
                          weekday: "long",
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        },
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => handleEditClick(departemen)}
                          className="p-2 bg-amber-500 text-white hover:bg-amber-600 rounded-lg transition-colors border border-amber-600 shadow-sm"
                          title="Edit"
                        >
                          <Pencil className="w-4 h-4" />
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDeleteClick(departemen)}
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
        {totalPages > 1 && (
          <div className="px-6 py-4 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm text-gray-600">
              Menampilkan {startIndex + 1} -{" "}
              {Math.min(endIndex, filteredDepartemen.length)} dari{" "}
              {filteredDepartemen.length} departemen
            </div>
            <div className="flex gap-1">
              {/* Previous Button */}
              <button
                type="button"
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-1.5 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors flex items-center gap-1"
              >
                <ChevronLeft className="h-4 w-4" />
                <span className="hidden sm:inline">Previous</span>
              </button>

              {/* Page Numbers with Ellipsis */}
              {(() => {
                const pages: (number | string)[] = [];
                const delta = 1; // Number of pages to show around current page

                // Always show first page
                pages.push(1);

                // Calculate range around current page
                const rangeStart = Math.max(2, currentPage - delta);
                const rangeEnd = Math.min(totalPages - 1, currentPage + delta);

                // Add ellipsis after first page if needed
                if (rangeStart > 2) {
                  pages.push("ellipsis-start");
                }

                // Add pages around current page
                for (let i = rangeStart; i <= rangeEnd; i++) {
                  pages.push(i);
                }

                // Add ellipsis before last page if needed
                if (rangeEnd < totalPages - 1) {
                  pages.push("ellipsis-end");
                }

                // Always show last page (if more than 1 page)
                if (totalPages > 1) {
                  pages.push(totalPages);
                }

                return pages.map((page) => {
                  if (typeof page === "string") {
                    return (
                      <span key={page} className="px-3 py-1.5 text-gray-400">
                        ...
                      </span>
                    );
                  }

                  return (
                    <button
                      type="button"
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`px-3 py-1.5 rounded-lg transition-colors min-w-10 ${
                        currentPage === page
                          ? "bg-(--primary-color) text-white shadow-sm"
                          : "border border-gray-300 hover:bg-gray-50"
                      }`}
                    >
                      {page}
                    </button>
                  );
                });
              })()}

              {/* Next Button */}
              <button
                type="button"
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-3 py-1.5 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors flex items-center gap-1"
              >
                <span className="hidden sm:inline">Next</span>
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Modal */}
      <DepartemenModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        departemen={selectedDepartemen}
      />

      {/* Delete Confirmation Modal */}
      {isDeleteModalOpen && departemenToDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <button
            type="button"
            className="absolute inset-0 bg-black/50 cursor-default"
            onClick={cancelDelete}
            aria-label="Close modal"
          />

          {/* Modal */}
          <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-md mx-4 overflow-hidden">
            {/* Header with Red Background */}
            <div className="bg-red-600 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-lg">
                  <AlertTriangle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  Konfirmasi Hapus
                </h3>
              </div>
              <button
                type="button"
                onClick={cancelDelete}
                className="text-white hover:bg-white/20 rounded-lg p-1 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              <p className="text-gray-700 mb-2">
                Apakah Anda yakin ingin menghapus departemen:
              </p>
              <p className="text-lg font-semibold text-gray-900 mb-4">
                {departemenToDelete.namaDepartemen}
              </p>
              <p className="text-sm text-gray-600">
                Data yang sudah dihapus tidak dapat dikembalikan.
              </p>
            </div>

            {/* Footer */}
            <div className="bg-gray-50 px-6 py-4 flex gap-3 justify-end">
              <button
                type="button"
                onClick={cancelDelete}
                className="px-5 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors font-medium"
              >
                Batal
              </button>
              <button
                type="button"
                onClick={confirmDelete}
                className="px-5 py-2.5 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium shadow-sm flex items-center gap-2"
              >
                <Trash2 className="w-4 h-4" />
                Hapus
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
