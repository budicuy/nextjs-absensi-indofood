"use client";

import { Search, X } from "lucide-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { createGajiPokok, updateGajiPokok } from "@/app/actions/gajiPokok";
import type { GajiPokokWithRelations, KaryawanOption } from "@/types";

type Props = {
    isOpen: boolean;
    onClose: (updatedData?: GajiPokokWithRelations) => void;
    gajiPokok: GajiPokokWithRelations | null;
    karyawanList: KaryawanOption[];
};

export default function GajiPokokModal({
    isOpen,
    onClose,
    gajiPokok,
    karyawanList,
}: Props) {
    const [formData, setFormData] = useState({
        jumlahGaji: "",
        karyawanId: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [karyawanSearch, setKaryawanSearch] = useState("");
    const [showKaryawanDropdown, setShowKaryawanDropdown] = useState(false);

    // Reset form ketika modal dibuka/ditutup atau gajiPokok berubah
    useEffect(() => {
        if (isOpen) {
            if (gajiPokok) {
                setFormData({
                    jumlahGaji: gajiPokok.jumlahGaji.toString(),
                    karyawanId: gajiPokok.karyawan?.id.toString() || "",
                });
                // Set search text to show selected karyawan name
                const selectedKaryawan = karyawanList.find(
                    (k) =>
                        k.id.toString() === gajiPokok.karyawan?.id.toString(),
                );
                setKaryawanSearch(
                    selectedKaryawan
                        ? `${selectedKaryawan.nik} - ${selectedKaryawan.nama}`
                        : "",
                );
            } else {
                setFormData({
                    jumlahGaji: "",
                    karyawanId: "",
                });
                setKaryawanSearch("");
            }
            setShowKaryawanDropdown(false);
        }
    }, [isOpen, gajiPokok, karyawanList]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const formDataObj = new FormData();
            formDataObj.append("jumlahGaji", formData.jumlahGaji);
            formDataObj.append("karyawanId", formData.karyawanId);

            const result = gajiPokok
                ? await updateGajiPokok(gajiPokok.id, formDataObj)
                : await createGajiPokok(formDataObj);

            if (result.success) {
                toast.success(result.message || "Berhasil menyimpan data");
                onClose({} as GajiPokokWithRelations);
            } else {
                toast.error(result.error || "Terjadi kesalahan");
            }
        } catch (error) {
            toast.error("Terjadi kesalahan sistem");
            console.error(error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >,
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // Filter karyawan based on search
    const filteredKaryawan = karyawanList.filter((karyawan) => {
        const searchLower = karyawanSearch.toLowerCase();
        return (
            karyawan.nik.toLowerCase().includes(searchLower) ||
            karyawan.nama.toLowerCase().includes(searchLower)
        );
    });

    const handleKaryawanSelect = (karyawan: KaryawanOption) => {
        setFormData((prev) => ({
            ...prev,
            karyawanId: karyawan.id.toString(),
        }));
        setKaryawanSearch(`${karyawan.nik} - ${karyawan.nama}`);
        setShowKaryawanDropdown(false);
    };

    const handleKaryawanSearchChange = (
        e: React.ChangeEvent<HTMLInputElement>,
    ) => {
        const value = e.target.value;
        setKaryawanSearch(value);
        setShowKaryawanDropdown(true);

        // Clear karyawanId if search is empty
        if (!value.trim()) {
            setFormData((prev) => ({ ...prev, karyawanId: "" }));
        }
    };

    const handleKaryawanFocus = () => {
        setShowKaryawanDropdown(true);
    };

    const handleKaryawanBlur = () => {
        // Delay hiding dropdown to allow click on options
        setTimeout(() => setShowKaryawanDropdown(false), 200);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Backdrop */}
            <button
                type="button"
                className="absolute inset-0 bg-black/50 cursor-default"
                onClick={() => !isSubmitting && onClose()}
                aria-label="Close modal"
            />

            {/* Modal */}
            <div className="relative bg-white rounded-lg shadow-xl w-full max-w-md mx-4 max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                    <h2 className="text-xl font-bold text-gray-900">
                        {gajiPokok ? "Edit Gaji Pokok" : "Tambah Gaji Pokok"}
                    </h2>
                    <button
                        type="button"
                        onClick={() => !isSubmitting && onClose()}
                        className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
                        disabled={isSubmitting}
                    >
                        <X className="w-5 h-5 text-gray-500" />
                    </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-6">
                    <div className="space-y-4">
                        {/* Karyawan dengan Search */}
                        <div>
                            <label
                                htmlFor="karyawanSearch"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Karyawan <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                                    <input
                                        type="text"
                                        id="karyawanSearch"
                                        name="karyawanSearch"
                                        value={karyawanSearch}
                                        onChange={handleKaryawanSearchChange}
                                        onFocus={handleKaryawanFocus}
                                        onBlur={handleKaryawanBlur}
                                        placeholder="Cari berdasarkan NIK atau nama karyawan..."
                                        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-(--primary-color)"
                                        required
                                        disabled={isSubmitting}
                                    />
                                </div>

                                {/* Hidden input for form submission */}
                                <input
                                    type="hidden"
                                    name="karyawanId"
                                    value={formData.karyawanId}
                                    required
                                />

                                {/* Dropdown Options */}
                                {showKaryawanDropdown && karyawanSearch && (
                                    <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                                        {filteredKaryawan.length === 0 ? (
                                            <div className="px-3 py-2 text-sm text-gray-500">
                                                Tidak ada karyawan yang
                                                ditemukan
                                            </div>
                                        ) : (
                                            filteredKaryawan.map((karyawan) => (
                                                <div
                                                    key={karyawan.id}
                                                    className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm border-b border-gray-100 last:border-b-0"
                                                    onClick={() =>
                                                        handleKaryawanSelect(
                                                            karyawan,
                                                        )
                                                    }
                                                    onKeyDown={(e) => {
                                                        if (
                                                            e.key === "Enter" ||
                                                            e.key === " "
                                                        ) {
                                                            handleKaryawanSelect(
                                                                karyawan,
                                                            );
                                                        }
                                                    }}
                                                    role="option"
                                                    tabIndex={0}
                                                >
                                                    <div className="font-medium text-gray-900">
                                                        {karyawan.nama}
                                                    </div>
                                                    <div className="text-xs text-gray-500">
                                                        NIK: {karyawan.nik}
                                                    </div>
                                                </div>
                                            ))
                                        )}
                                    </div>
                                )}
                            </div>
                            <p className="mt-1 text-xs text-gray-500">
                                Ketik NIK atau nama karyawan untuk mencari
                            </p>
                        </div>

                        {/* Jumlah Gaji */}
                        <div>
                            <label
                                htmlFor="jumlahGaji"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Jumlah Gaji{" "}
                                <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                                    Rp
                                </span>
                                <input
                                    type="number"
                                    id="jumlahGaji"
                                    name="jumlahGaji"
                                    value={formData.jumlahGaji}
                                    onChange={handleChange}
                                    placeholder="0"
                                    min="0"
                                    step="1"
                                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-(--primary-color)"
                                    required
                                    disabled={isSubmitting}
                                />
                            </div>
                            <p className="mt-1 text-xs text-gray-500">
                                Masukkan jumlah gaji pokok dalam Rupiah
                            </p>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="flex justify-end gap-3 mt-6 pt-6 border-t border-gray-200">
                        <button
                            type="button"
                            onClick={() => onClose()}
                            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                            disabled={isSubmitting}
                        >
                            Batal
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-(--primary-color) text-white rounded-lg hover:bg-(--primary-hover) transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            disabled={isSubmitting}
                        >
                            {isSubmitting
                                ? "Menyimpan..."
                                : gajiPokok
                                  ? "Perbarui"
                                  : "Simpan"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
