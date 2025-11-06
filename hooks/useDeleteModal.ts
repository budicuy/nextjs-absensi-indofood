import { useState } from "react";

interface DeleteItem {
    id: number;
    name: string;
}

interface UseDeleteModalReturn {
    isDeleteModalOpen: boolean;
    itemToDelete: DeleteItem | null;
    openDeleteModal: (item: DeleteItem) => void;
    closeDeleteModal: () => void;
    confirmDelete: (
        deleteAction: (id: number) => Promise<void>,
    ) => Promise<void>;
}

/**
 * Custom hook untuk menangani delete confirmation modal
 * @returns Delete modal state dan functions
 */
export function useDeleteModal(): UseDeleteModalReturn {
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [itemToDelete, setItemToDelete] = useState<DeleteItem | null>(null);

    const openDeleteModal = (item: DeleteItem) => {
        setItemToDelete(item);
        setIsDeleteModalOpen(true);
    };

    const closeDeleteModal = () => {
        setIsDeleteModalOpen(false);
        setItemToDelete(null);
    };

    const confirmDelete = async (
        deleteAction: (id: number) => Promise<void>,
    ) => {
        if (!itemToDelete) return;

        try {
            await deleteAction(itemToDelete.id);
            closeDeleteModal();
        } catch (error) {
            console.error("Error deleting item:", error);
            // Modal tetap terbuka jika terjadi error
        }
    };

    return {
        isDeleteModalOpen,
        itemToDelete,
        openDeleteModal,
        closeDeleteModal,
        confirmDelete,
    };
}
