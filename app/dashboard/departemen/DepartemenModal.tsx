"use client";

import { X } from "lucide-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { createDepartemen, updateDepartemen } from "@/app/actions/departemen";

type Departemen = {
    id: string;
    namaDepartemen: string;
    slugDepartemen: string;
    createdAt: Date;
    updatedAt: Date;
};

type Props = {
    isOpen: boolean;
    onClose: (updatedData?: Departemen) => void;
    departemen: Departemen | null;
};

export default function DepartemenModal({
    isOpen,
    onClose,
    departemen,
}: Props) {
    const [formData, setFormData] = useState({
        namaDepartemen: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Reset form ketika modal dibuka/ditutup atau departemen berubah
    useEffect(() => {
        if (isOpen) {
            if (departemen) {
                setFormData({
                    namaDepartemen: departemen.namaDepartemen,
                });
            } else {
                setFormData({
                    namaDepartemen: "",
                });
            }
        }
    }, [isOpen, departemen]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const formDataObj = new FormData();
            formDataObj.append("namaDepartemen", formData.namaDepartemen);

            const result = departemen
                ? await updateDepartemen(departemen.id, formDataObj)
                : await createDepartemen(formDataObj);

            if (result.success) {
                toast.success(result.message || "Berhasil menyimpan data");
                onClose({} as Departemen);
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
                        {departemen ? "Edit Departemen" : "Tambah Departemen"}
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
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                        {/* Nama Departemen */}
                        <div>
                            <label
                                htmlFor="namaDepartemen"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Nama Departemen{" "}
                                <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="namaDepartemen"
                                name="namaDepartemen"
                                value={formData.namaDepartemen}
                                onChange={handleChange}
                                minLength={3}
                                maxLength={100}
                                placeholder="Masukkan nama departemen (3-100 karakter)"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-(--primary-color)"
                                required
                                disabled={isSubmitting}
                            />
                            <p className="mt-1 text-xs text-gray-500">
                                Slug akan dibuat otomatis dari nama departemen
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
                                : departemen
                                  ? "Perbarui"
                                  : "Simpan"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
