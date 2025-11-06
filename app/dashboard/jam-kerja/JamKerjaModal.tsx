"use client";

import type { JamKerja } from "@prisma/client";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { createJamKerja, updateJamKerja } from "@/app/actions/jamKerja";

type Props = {
    isOpen: boolean;
    onClose: (updatedData?: JamKerja) => void;
    jamKerja: JamKerja | null;
};

export default function JamKerjaModal({ isOpen, onClose, jamKerja }: Props) {
    const [formData, setFormData] = useState({
        kodeShift: "",
        jamMasuk: "",
        jamPulang: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Reset form ketika modal dibuka/ditutup atau jamKerja berubah
    useEffect(() => {
        if (isOpen) {
            if (jamKerja) {
                // Format time to HH:MM for input
                const formatTimeForInput = (date: Date) => {
                    const d = new Date(date);
                    const hours = d.getHours().toString().padStart(2, "0");
                    const minutes = d.getMinutes().toString().padStart(2, "0");
                    return `${hours}:${minutes}`;
                };

                setFormData({
                    kodeShift: jamKerja.kodeShift,
                    jamMasuk: formatTimeForInput(jamKerja.jamMasuk),
                    jamPulang: formatTimeForInput(jamKerja.jamPulang),
                });
            } else {
                setFormData({
                    kodeShift: "",
                    jamMasuk: "",
                    jamPulang: "",
                });
            }
        }
    }, [isOpen, jamKerja]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const formDataObj = new FormData();
            formDataObj.append("kodeShift", formData.kodeShift);
            formDataObj.append("jamMasuk", formData.jamMasuk);
            formDataObj.append("jamPulang", formData.jamPulang);

            const result = jamKerja
                ? await updateJamKerja(jamKerja.id, formDataObj)
                : await createJamKerja(formDataObj);

            if (result.success) {
                toast.success(result.message || "Berhasil menyimpan data");
                onClose({} as JamKerja);
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
                        {jamKerja ? "Edit Jam Kerja" : "Tambah Jam Kerja"}
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
                        {/* Kode Shift */}
                        <div>
                            <label
                                htmlFor="kodeShift"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Kode Shift{" "}
                                <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="kodeShift"
                                name="kodeShift"
                                value={formData.kodeShift}
                                onChange={handleChange}
                                minLength={1}
                                maxLength={10}
                                placeholder="Masukkan kode shift (contoh: PAGI, SIANG, MALAM)"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-(--primary-color)"
                                required
                                disabled={isSubmitting}
                            />
                        </div>

                        {/* Jam Masuk */}
                        <div>
                            <label
                                htmlFor="jamMasuk"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Jam Masuk{" "}
                                <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="time"
                                id="jamMasuk"
                                name="jamMasuk"
                                value={formData.jamMasuk}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-(--primary-color)"
                                required
                                disabled={isSubmitting}
                            />
                        </div>

                        {/* Jam Pulang */}
                        <div>
                            <label
                                htmlFor="jamPulang"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Jam Pulang{" "}
                                <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="time"
                                id="jamPulang"
                                name="jamPulang"
                                value={formData.jamPulang}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-(--primary-color)"
                                required
                                disabled={isSubmitting}
                            />
                        </div>

                        {/* Info */}
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                            <p className="text-sm text-blue-800">
                                <strong>Catatan:</strong> Pastikan jam pulang
                                lebih besar dari jam masuk. Format waktu yang
                                digunakan adalah 24 jam (HH:MM).
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
                                : jamKerja
                                  ? "Perbarui"
                                  : "Simpan"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
