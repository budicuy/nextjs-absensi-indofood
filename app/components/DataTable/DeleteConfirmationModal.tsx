import { AlertTriangle, X } from "lucide-react";

interface DeleteConfirmationModalProps {
    isOpen: boolean;
    itemName: string;
    itemType: string;
    onConfirm: () => void;
    onCancel: () => void;
}

export default function DeleteConfirmationModal({
    isOpen,
    itemName,
    itemType,
    onConfirm,
    onCancel,
}: DeleteConfirmationModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
            <div className="bg-white rounded-xl shadow-2xl max-w-md w-full overflow-hidden">
                {/* Header */}
                <div className="bg-red-500 p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-white/20 rounded-lg">
                            <AlertTriangle className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-white">
                            Konfirmasi Hapus
                        </h3>
                    </div>
                    <button
                        type="button"
                        onClick={onCancel}
                        className="text-white hover:bg-white/20 rounded-lg p-2 transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Content */}
                <div className="p-6">
                    <p className="text-gray-700 mb-2">
                        Apakah Anda yakin ingin menghapus {itemType}:
                    </p>
                    <p className="font-bold text-gray-900 text-lg mb-4">
                        {itemName}
                    </p>
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                        <p className="text-sm text-red-800">
                            <strong>Peringatan:</strong> Tindakan ini tidak
                            dapat dibatalkan. Data yang dihapus tidak dapat
                            dikembalikan.
                        </p>
                    </div>
                </div>

                {/* Footer */}
                <div className="bg-gray-50 px-6 py-4 flex gap-3 justify-end">
                    <button
                        type="button"
                        onClick={onCancel}
                        className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors font-medium"
                    >
                        Batal
                    </button>
                    <button
                        type="button"
                        onClick={onConfirm}
                        className="px-6 py-2.5 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-medium shadow-md"
                    >
                        Hapus
                    </button>
                </div>
            </div>
        </div>
    );
}
