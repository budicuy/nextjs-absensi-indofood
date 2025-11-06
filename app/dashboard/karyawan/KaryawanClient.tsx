"use client";

import { useState } from "react";
import {
  Search,
  Plus,
  Pencil,
  Trash2,
  ChevronLeft,
  ChevronRight,
  TruckIcon,
  Building2,
  ListFilter,
  AlertTriangle,
  X,
} from "lucide-react";
import KaryawanModal from "./KaryawanModal";
import { deleteKaryawan } from "@/app/actions/karyawan";
import { toast } from "react-hot-toast";

type Karyawan = {
  id: string;
  nik: string;
  nama: string;
  alamat: string | null;
  no_telp: string;
  tanggal_masuk: Date;
  departemen: { id: string; nama: string };
  vendor: { id: string; nama: string };
};

type Departemen = {
  id: string;
  nama: string;
};

type Vendor = {
  id: string;
  nama: string;
};

type Props = {
  initialKaryawan: Karyawan[];
  departemenList: Departemen[];
  vendorList: Vendor[];
};

export default function KaryawanClient({
  initialKaryawan,
  departemenList,
  vendorList,
}: Props) {
  const [karyawanList, setKaryawanList] = useState<Karyawan[]>(initialKaryawan);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDepartemen, setSelectedDepartemen] = useState<string>("");
  const [selectedVendor, setSelectedVendor] = useState<string>("");
  const [itemsPerPage, setItemsPerPage] = useState(50);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [karyawanToDelete, setKaryawanToDelete] = useState<{
    id: string;
    nama: string;
  } | null>(null);
  const [selectedKaryawan, setSelectedKaryawan] = useState<Karyawan | null>(
    null,
  );
  const [currentPage, setCurrentPage] = useState(1);

  // Filter karyawan berdasarkan search query, departemen, dan vendor
  const filteredKaryawan = karyawanList.filter((k) => {
    const matchesSearch =
      k.nik.toLowerCase().includes(searchQuery.toLowerCase()) ||
      k.nama.toLowerCase().includes(searchQuery.toLowerCase()) ||
      k.departemen.nama.toLowerCase().includes(searchQuery.toLowerCase()) ||
      k.vendor.nama.toLowerCase().includes(searchQuery.toLowerCase()) ||
      k.no_telp.includes(searchQuery);

    const matchesDepartemen =
      !selectedDepartemen || k.departemen.id === selectedDepartemen;

    const matchesVendor = !selectedVendor || k.vendor.id === selectedVendor;

    return matchesSearch && matchesDepartemen && matchesVendor;
  });

  // Pagination
  const totalPages = Math.ceil(filteredKaryawan.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentKaryawan = filteredKaryawan.slice(startIndex, endIndex);

  const handleAddClick = () => {
    setSelectedKaryawan(null);
    setIsModalOpen(true);
  };

  const handleEditClick = (karyawan: Karyawan) => {
    setSelectedKaryawan(karyawan);
    setIsModalOpen(true);
  };

  const handleDeleteClick = async (karyawan: Karyawan) => {
    setKaryawanToDelete({ id: karyawan.id, nama: karyawan.nama });
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = async () => {
    if (!karyawanToDelete) return;

    const result = await deleteKaryawan(karyawanToDelete.id);
    if (result.success) {
      toast.success(result.message || "Karyawan berhasil dihapus");
      setKaryawanList(karyawanList.filter((k) => k.id !== karyawanToDelete.id));
    } else {
      toast.error(result.error || "Gagal menghapus karyawan");
    }

    setIsDeleteModalOpen(false);
    setKaryawanToDelete(null);
  };

  const cancelDelete = () => {
    setIsDeleteModalOpen(false);
    setKaryawanToDelete(null);
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

  // Get initials from name
  const getInitials = (nama: string) => {
    const words = nama.trim().split(" ");
    if (words.length === 1) {
      return words[0].substring(0, 2).toUpperCase();
    }
    return (words[0][0] + words[words.length - 1][0]).toUpperCase();
  };

  // Generate avatar color based on name
  const getAvatarColor = (nama: string) => {
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
      nama.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0) %
      colors.length;
    return colors[index];
  };

  const handleModalClose = (updatedData?: Karyawan) => {
    setIsModalOpen(false);
    setSelectedKaryawan(null);

    if (updatedData) {
      // Refresh data setelah create/update
      window.location.reload();
    }
  };

  return (
    <div className="p-6">
      {/* Header with Gradient Background */}
      <div className="mb-6 bg-linear-to-r from-emerald-600 to-emerald-500 rounded-xl p-6 shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white">Data Karyawan</h1>
            <p className="text-emerald-50 mt-2">
              Kelola data karyawan Absensi Indofood
            </p>
          </div>
          <button
            type="button"
            onClick={handleAddClick}
            className="flex items-center gap-2 px-5 py-3 bg-white text-emerald-600 rounded-lg hover:bg-emerald-50 transition-all shadow-md hover:shadow-lg font-semibold"
          >
            <Plus className="w-5 h-5" />
            <span className="hidden sm:inline">Tambah Karyawan</span>
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
              htmlFor="search-karyawan"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Pencarian
            </label>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                id="search-karyawan"
                placeholder="Cari berdasarkan NIK, nama, departemen, vendor..."
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all bg-white"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
              />
            </div>
          </div>

          {/* Filters Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label
                htmlFor="filter-departemen"
                className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2"
              >
                <Building2 className="w-4 h-4 text-emerald-600" />
                Departemen
              </label>
              <div className="relative">
                <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <select
                  id="filter-departemen"
                  value={selectedDepartemen}
                  onChange={(e) => {
                    setSelectedDepartemen(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all bg-white appearance-none"
                >
                  <option value="">Semua Departemen</option>
                  {departemenList.map((dept) => (
                    <option key={dept.id} value={dept.id}>
                      {dept.nama}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="filter-vendor"
                className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2"
              >
                <TruckIcon className="w-4 h-4 text-emerald-600" />
                Vendor
              </label>
              <div className="relative">
                <TruckIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <select
                  id="filter-vendor"
                  value={selectedVendor}
                  onChange={(e) => {
                    setSelectedVendor(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all bg-white appearance-none"
                >
                  <option value="">Semua Vendor</option>
                  {vendorList.map((vendor) => (
                    <option key={vendor.id} value={vendor.id}>
                      {vendor.nama}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="items-per-page"
                className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2"
              >
                <ListFilter className="w-4 h-4 text-emerald-600" />
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
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all bg-white appearance-none"
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
            <thead className="bg-emerald-600 border-b border-emerald-700">
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
              {currentKaryawan.length === 0 ? (
                <tr>
                  <td
                    colSpan={7}
                    className="px-6 py-8 text-center text-gray-500"
                  >
                    Tidak ada data karyawan
                  </td>
                </tr>
              ) : (
                currentKaryawan.map((karyawan) => (
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
                      <span
                        className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold border ${getDepartemenColor(karyawan.departemen.nama)}`}
                      >
                        {karyawan.departemen.nama}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span
                        className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold border ${getVendorColor(karyawan.vendor.nama)}`}
                      >
                        {karyawan.vendor.nama}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {karyawan.no_telp}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {new Date(karyawan.tanggal_masuk).toLocaleDateString(
                        "id-ID",
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => handleEditClick(karyawan)}
                          className="p-2 bg-blue-600 text-white hover:bg-blue-700 rounded-lg transition-colors border border-blue-700 shadow-sm"
                          title="Edit"
                        >
                          <Pencil className="w-4 h-4" />
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDeleteClick(karyawan)}
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
              {Math.min(endIndex, filteredKaryawan.length)} dari{" "}
              {filteredKaryawan.length} karyawan
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
                          ? "bg-emerald-600 text-white shadow-sm"
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
      <KaryawanModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        karyawan={selectedKaryawan}
        departemenList={departemenList}
        vendorList={vendorList}
      />

      {/* Delete Confirmation Modal */}
      {isDeleteModalOpen && karyawanToDelete && (
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
                Apakah Anda yakin ingin menghapus karyawan:
              </p>
              <p className="text-lg font-semibold text-gray-900 mb-4">
                {karyawanToDelete.nama}
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
