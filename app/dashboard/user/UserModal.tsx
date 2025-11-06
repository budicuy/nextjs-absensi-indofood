"use client";

import { X } from "lucide-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { createUser, updateUser } from "@/app/actions/user";
import type { UserDisplay } from "@/types";

type Props = {
    isOpen: boolean;
    onClose: (updatedData?: UserDisplay) => void;
    user: UserDisplay | null;
};

export default function UserModal({ isOpen, onClose, user }: Props) {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        role: "KARYAWAN" as "SUPER_ADMIN" | "ADMIN" | "HRD" | "KARYAWAN",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Reset form ketika modal dibuka/ditutup atau user berubah
    useEffect(() => {
        if (isOpen) {
            if (user) {
                setFormData({
                    username: user.username,
                    password: "",
                    role: user.role,
                });
            } else {
                setFormData({
                    username: "",
                    password: "",
                    role: "KARYAWAN",
                });
            }
        }
    }, [isOpen, user]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const formDataObj = new FormData();
            formDataObj.append("username", formData.username);
            formDataObj.append("role", formData.role);

            // Only append password if it's provided (for update, password is optional)
            if (formData.password) {
                formDataObj.append("password", formData.password);
            }

            const result = user
                ? await updateUser(user.id, formDataObj)
                : await createUser(formDataObj);

            if (result.success) {
                toast.success(result.message || "Berhasil menyimpan data");
                onClose({} as UserDisplay);
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
                        {user ? "Edit User" : "Tambah User"}
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
                        {/* Username */}
                        <div>
                            <label
                                htmlFor="username"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Username <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                minLength={3}
                                maxLength={50}
                                placeholder="Masukkan username (3-50 karakter)"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-(--primary-color)"
                                required
                                disabled={isSubmitting}
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Password{" "}
                                {user ? (
                                    <span className="text-gray-500 font-normal">
                                        (kosongkan jika tidak ingin mengubah)
                                    </span>
                                ) : (
                                    <span className="text-red-500">*</span>
                                )}
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                minLength={6}
                                maxLength={100}
                                placeholder={
                                    user
                                        ? "Kosongkan jika tidak ingin mengubah"
                                        : "Masukkan password (minimal 6 karakter)"
                                }
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-(--primary-color)"
                                required={!user}
                                disabled={isSubmitting}
                            />
                        </div>

                        {/* Role */}
                        <div>
                            <label
                                htmlFor="role"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Role <span className="text-red-500">*</span>
                            </label>
                            <select
                                id="role"
                                name="role"
                                value={formData.role}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-(--primary-color)"
                                required
                                disabled={isSubmitting}
                            >
                                <option value="KARYAWAN">Karyawan</option>
                                <option value="HRD">HRD</option>
                                <option value="ADMIN">Admin</option>
                                <option value="SUPER_ADMIN">Super Admin</option>
                            </select>
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
                                : user
                                  ? "Perbarui"
                                  : "Simpan"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
