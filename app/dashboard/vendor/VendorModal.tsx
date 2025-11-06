"use client";

import { X } from "lucide-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { createVendor, updateVendor } from "@/app/actions/vendor";
import type { VendorModel } from "@/lib/generated/prisma/models/Vendor";

type Props = {
    isOpen: boolean;
    onClose: (updatedData?: VendorModel) => void;
    vendor: VendorModel | null;
};

export default function VendorModal({ isOpen, onClose, vendor }: Props) {
    const [formData, setFormData] = useState({
        namaVendor: "",
        alamat: "",
        noTelp: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Reset form ketika modal dibuka/ditutup atau vendor berubah
    useEffect(() => {
        if (isOpen) {
            if (vendor) {
                setFormData({
                    namaVendor: vendor.namaVendor,
                    alamat: vendor.alamat,
                    noTelp: vendor.noTelp,
                });
            } else {
                setFormData({
                    namaVendor: "",
                    alamat: "",
                    noTelp: "",
                });
            }
        }
    }, [isOpen, vendor]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const formDataObj = new FormData();
            formDataObj.append("namaVendor", formData.namaVendor);
            formDataObj.append("alamat", formData.alamat);
            formDataObj.append("noTelp", formData.noTelp);

            const result = vendor
                ? await updateVendor(vendor.id, formDataObj)
                : await createVendor(formDataObj);

            if (result.success) {
                toast.success(result.message || "Berhasil menyimpan data");
                onClose({} as VendorModel);
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
            <div className="relative bg-white rounded-lg shadow-xl w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                    <h2 className="text-xl font-bold text-gray-900">
                        {vendor ? "Edit Vendor" : "Tambah Vendor"}
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
                        {/* Nama Vendor */}
                        <div>
                            <label
                                htmlFor="namaVendor"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Nama Vendor{" "}
                                <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="namaVendor"
                                name="namaVendor"
                                value={formData.namaVendor}
                                onChange={handleChange}
                                minLength={3}
                                maxLength={100}
                                placeholder="Masukkan nama vendor (3-100 karakter)"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-(--primary-color)"
                                required
                                disabled={isSubmitting}
                            />
                        </div>

                        {/* No. Telp */}
                        <div>
                            <label
                                htmlFor="noTelp"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                No. Telepon{" "}
                                <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="tel"
                                id="noTelp"
                                name="noTelp"
                                value={formData.noTelp}
                                onChange={handleChange}
                                minLength={10}
                                maxLength={15}
                                placeholder="08xxxxxxxxxx"
                                pattern="08[0-9]+"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-(--primary-color)"
                                required
                                disabled={isSubmitting}
                            />
                            <p className="mt-1 text-xs text-gray-500">
                                Nomor telepon harus diawali dengan 08
                            </p>
                        </div>

                        {/* Alamat */}
                        <div>
                            <label
                                htmlFor="alamat"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Alamat <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                id="alamat"
                                name="alamat"
                                value={formData.alamat}
                                onChange={handleChange}
                                placeholder="Masukkan alamat lengkap"
                                rows={4}
                                minLength={5}
                                maxLength={255}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-(--primary-color) resize-none"
                                required
                                disabled={isSubmitting}
                            />
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
                                : vendor
                                  ? "Perbarui"
                                  : "Simpan"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
