"use client";

import type { AlasanLembur } from "@prisma/client";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
    createAlasanLembur,
    updateAlasanLembur,
} from "@/app/actions/alasanLembur";

type Props = {
    isOpen: boolean;
    onClose: (updatedData?: AlasanLembur) => void;
    alasanLembur: AlasanLembur | null;
};

export default function AlasanLemburModal({
    isOpen,
    onClose,
    alasanLembur,
}: Props) {
    const [formData, setFormData] = useState({
        description: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Reset form ketika modal dibuka/ditutup atau alasanLembur berubah
    useEffect(() => {
        if (isOpen) {
            if (alasanLembur) {
                setFormData({
                    description: alasanLembur.description,
                });
            } else {
                setFormData({
                    description: "",
                });
            }
        }
    }, [isOpen, alasanLembur]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const formDataObj = new FormData();
            formDataObj.append("description", formData.description);

            const result = alasanLembur
                ? await updateAlasanLembur(alasanLembur.id, formDataObj)
                : await createAlasanLembur(formDataObj);

            if (result.success) {
                toast.success(result.message || "Berhasil menyimpan data");
                onClose({} as AlasanLembur);
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
                        {alasanLembur
                            ? "Edit Alasan Lembur"
                            : "Tambah Alasan Lembur"}
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
                        {/* Description */}
                        <div>
                            <label
                                htmlFor="description"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Deskripsi Alasan Lembur{" "}
                                <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                id="description"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                minLength={3}
                                maxLength={200}
                                rows={4}
                                placeholder="Masukkan deskripsi alasan lembur (3-200 karakter)"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-(--primary-color) resize-none"
                                required
                                disabled={isSubmitting}
                            />
                            <div className="mt-1 text-xs text-gray-500">
                                {formData.description.length}/200 karakter
                            </div>
                        </div>

                        {/* Info */}
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                            <p className="text-sm text-blue-800">
                                <strong>Catatan:</strong> Deskripsi alasan
                                lembur akan digunakan sebagai pilihan saat
                                pengajuan lembur karyawan.
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
                                : alasanLembur
                                  ? "Perbarui"
                                  : "Simpan"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
