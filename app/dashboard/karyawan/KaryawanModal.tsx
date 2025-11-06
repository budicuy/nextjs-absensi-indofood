"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { createKaryawan, updateKaryawan } from "@/app/actions/karyawan";
import toast from "react-hot-toast";

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
  isOpen: boolean;
  onClose: (updatedData?: Karyawan) => void;
  karyawan: Karyawan | null;
  departemenList: Departemen[];
  vendorList: Vendor[];
};

export default function KaryawanModal({
  isOpen,
  onClose,
  karyawan,
  departemenList,
  vendorList,
}: Props) {
  const [formData, setFormData] = useState({
    nik: "",
    nama: "",
    alamat: "",
    no_telp: "",
    tanggal_masuk: "",
    departemenId: "",
    vendorId: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Reset form ketika modal dibuka/ditutup atau karyawan berubah
  useEffect(() => {
    if (isOpen) {
      if (karyawan) {
        setFormData({
          nik: karyawan.nik,
          nama: karyawan.nama,
          alamat: karyawan.alamat || "",
          no_telp: karyawan.no_telp,
          tanggal_masuk: new Date(karyawan.tanggal_masuk)
            .toISOString()
            .split("T")[0],
          departemenId: karyawan.departemen.id.toString(),
          vendorId: karyawan.vendor.id.toString(),
        });
      } else {
        setFormData({
          nik: "",
          nama: "",
          alamat: "",
          no_telp: "",
          tanggal_masuk: new Date().toISOString().split("T")[0],
          departemenId: departemenList[0]?.id || "",
          vendorId: vendorList[0]?.id || "",
        });
      }
    }
  }, [isOpen, karyawan, departemenList, vendorList]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formDataObj = new FormData();
      formDataObj.append("nik", formData.nik);
      formDataObj.append("nama", formData.nama);
      formDataObj.append("alamat", formData.alamat);
      formDataObj.append("no_telp", formData.no_telp);
      formDataObj.append("tanggal_masuk", formData.tanggal_masuk);
      formDataObj.append("departemenId", formData.departemenId);
      formDataObj.append("vendorId", formData.vendorId);

      const result = karyawan
        ? await updateKaryawan(karyawan.id, formDataObj)
        : await createKaryawan(formDataObj);

      if (result.success) {
        toast.success(result.message || "Berhasil menyimpan data");
        onClose({} as Karyawan);
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
            {karyawan ? "Edit Karyawan" : "Tambah Karyawan"}
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* NIK */}
            <div className="md:col-span-2">
              <label
                htmlFor="nik"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                NIK <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="nik"
                name="nik"
                value={formData.nik}
                onChange={handleChange}
                minLength={3}
                maxLength={16}
                placeholder="Masukkan NIK (3-16 karakter)"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                required
                disabled={isSubmitting}
              />
            </div>

            {/* Nama Lengkap */}
            <div className="md:col-span-2">
              <label
                htmlFor="nama"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Nama Lengkap <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="nama"
                name="nama"
                value={formData.nama}
                onChange={handleChange}
                placeholder="Masukkan nama lengkap"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                required
                disabled={isSubmitting}
              />
            </div>

            {/* No. Telp */}
            <div>
              <label
                htmlFor="no_telp"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                No. Telephone <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="no_telp"
                name="no_telp"
                value={formData.no_telp}
                onChange={handleChange}
                placeholder="08xxxxxxxxxx"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                required
                disabled={isSubmitting}
              />
            </div>

            {/* Tanggal Masuk */}
            <div>
              <label
                htmlFor="tanggal_masuk"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Tanggal Masuk <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                id="tanggal_masuk"
                name="tanggal_masuk"
                value={formData.tanggal_masuk}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                required
                disabled={isSubmitting}
              />
            </div>

            {/* Departemen */}
            <div>
              <label
                htmlFor="departemenId"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Departemen <span className="text-red-500">*</span>
              </label>
              <select
                id="departemenId"
                name="departemenId"
                value={formData.departemenId}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                required
                disabled={isSubmitting}
              >
                {departemenList.map((dept) => (
                  <option key={dept.id} value={dept.id}>
                    {dept.nama}
                  </option>
                ))}
              </select>
            </div>

            {/* Vendor */}
            <div>
              <label
                htmlFor="vendorId"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Vendor <span className="text-red-500">*</span>
              </label>
              <select
                id="vendorId"
                name="vendorId"
                value={formData.vendorId}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                required
                disabled={isSubmitting}
              >
                {vendorList.map((vendor) => (
                  <option key={vendor.id} value={vendor.id}>
                    {vendor.nama}
                  </option>
                ))}
              </select>
            </div>

            {/* Alamat */}
            <div className="md:col-span-2">
              <label
                htmlFor="alamat"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Alamat
              </label>
              <textarea
                id="alamat"
                name="alamat"
                value={formData.alamat}
                onChange={handleChange}
                placeholder="Masukkan alamat lengkap"
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
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
              className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Menyimpan..." : karyawan ? "Perbarui" : "Simpan"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
