"use client";

import {
    Briefcase,
    Crown,
    ListFilter,
    Pencil,
    Shield,
    Trash2,
    User,
    UserCheck,
} from "lucide-react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { deleteUser, getUser } from "@/app/actions/user";
import DeleteConfirmationModal from "@/app/components/DataTable/DeleteConfirmationModal";
import FilterSelect from "@/app/components/DataTable/FilterSelect";
import PageHeader from "@/app/components/DataTable/PageHeader";
import Pagination from "@/app/components/DataTable/Pagination";
import SearchBar from "@/app/components/DataTable/SearchBar";
import { useDeleteModal } from "@/hooks/useDeleteModal";
import { usePagination } from "@/hooks/usePagination";
import { useTableFilters } from "@/hooks/useTableFilters";
import { getAvatarColor, getInitials } from "@/lib/utils/avatar";
import type { UserDisplay } from "@/types";
import UserModal from "./UserModal";

type Props = {
    initialUsers: UserDisplay[];
};

export default function UserClient({ initialUsers }: Props) {
    const [userList, setUserList] = useState<UserDisplay[]>(initialUsers);
    const [selectedRole, setSelectedRole] = useState<string>("");
    const [itemsPerPage, setItemsPerPage] = useState(50);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState<UserDisplay | null>(null);

    // Use custom hooks for filtering
    const { searchQuery, setSearchQuery, filteredData } = useTableFilters({
        data: userList,
        searchFields: ["username", "role"],
    });

    // Apply additional role filter
    const filteredUsers = filteredData.filter((user) => {
        const matchesRole = !selectedRole || user.role === selectedRole;
        return matchesRole;
    });

    // Use custom hooks
    const pagination = usePagination({
        data: filteredUsers,
        itemsPerPage,
    });

    const deleteModal = useDeleteModal();

    const handleAddClick = () => {
        setSelectedUser(null);
        setIsModalOpen(true);
    };

    const handleEditClick = (user: UserDisplay) => {
        setSelectedUser(user);
        setIsModalOpen(true);
    };

    const handleDeleteClick = async (user: UserDisplay) => {
        deleteModal.openDeleteModal({
            id: user.id,
            name: user.username,
        });
    };

    const confirmDelete = async () => {
        if (!deleteModal.itemToDelete) return;

        const result = await deleteUser(deleteModal.itemToDelete.id);
        if (result.success) {
            toast.success(result.message || "User berhasil dihapus");
            setUserList(
                userList.filter((u) => u.id !== deleteModal.itemToDelete?.id),
            );
            deleteModal.closeDeleteModal();
        } else {
            toast.error(result.error || "Gagal menghapus user");
        }
    };

    // Get role icon and color
    const getRoleInfo = (role: string) => {
        switch (role) {
            case "SUPER_ADMIN":
                return {
                    icon: <Crown className="w-4 h-4" />,
                    color: "bg-purple-100 text-purple-800 border-purple-200",
                    label: "Super Admin",
                };
            case "ADMIN":
                return {
                    icon: <Shield className="w-4 h-4" />,
                    color: "bg-blue-100 text-blue-800 border-blue-200",
                    label: "Admin",
                };
            case "HRD":
                return {
                    icon: <Briefcase className="w-4 h-4" />,
                    color: "bg-emerald-100 text-emerald-800 border-emerald-200",
                    label: "HRD",
                };
            case "KARYAWAN":
                return {
                    icon: <UserCheck className="w-4 h-4" />,
                    color: "bg-gray-100 text-gray-800 border-gray-200",
                    label: "Karyawan",
                };
            default:
                return {
                    icon: <User className="w-4 h-4" />,
                    color: "bg-gray-100 text-gray-800 border-gray-200",
                    label: role,
                };
        }
    };

    const handleModalClose = async (updatedData?: UserDisplay) => {
        setIsModalOpen(false);
        setSelectedUser(null);

        if (updatedData) {
            // Refresh data setelah create/update dengan memanggil server action
            try {
                const freshData = await getUser();
                setUserList(freshData);
            } catch (error) {
                console.error("Error refreshing data:", error);
                // Fallback ke reload jika fetch gagal
                window.location.reload();
            }
        }
    };

    return (
        <div className="p-6">
            {/* Header */}
            <PageHeader
                title="Data User"
                description="Kelola data user sistem Absensi Indofood"
                onAddClick={handleAddClick}
                addButtonText="Tambah User"
                icon={UserCheck}
            />

            {/* Table with Integrated Filters */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
                {/* Filters Section Inside Card */}
                <div className="p-6 bg-gray-50 border-b border-gray-200">
                    {/* Search Bar */}
                    <SearchBar
                        id="search-user"
                        placeholder="Cari berdasarkan username atau role..."
                        value={searchQuery}
                        onChange={(value) => {
                            setSearchQuery(value);
                            pagination.setCurrentPage(1);
                        }}
                    />

                    {/* Filters Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FilterSelect
                            id="filter-role"
                            label="Role"
                            value={selectedRole}
                            onChange={(value) => {
                                setSelectedRole(value);
                                pagination.setCurrentPage(1);
                            }}
                            options={[
                                { value: "", label: "Semua Role" },
                                { value: "SUPER_ADMIN", label: "Super Admin" },
                                { value: "ADMIN", label: "Admin" },
                                { value: "HRD", label: "HRD" },
                                { value: "KARYAWAN", label: "Karyawan" },
                            ]}
                            icon={Shield}
                        />

                        <FilterSelect
                            id="items-per-page"
                            label="Tampilkan"
                            value={itemsPerPage.toString()}
                            onChange={(value) => {
                                setItemsPerPage(Number(value));
                                pagination.setCurrentPage(1);
                            }}
                            options={[
                                { value: "50", label: "50 per halaman" },
                                { value: "100", label: "100 per halaman" },
                                { value: "150", label: "150 per halaman" },
                                { value: "200", label: "200 per halaman" },
                            ]}
                            icon={ListFilter}
                        />
                    </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-(--primary-color) border-b border-(--primary-border)">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider">
                                    Username
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider">
                                    Role
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider">
                                    Terakhir Login
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider">
                                    Tanggal Dibuat
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider">
                                    Terakhir Diupdate
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider">
                                    Aksi
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {pagination.currentData.length === 0 ? (
                                <tr>
                                    <td
                                        colSpan={6}
                                        className="px-6 py-8 text-center text-gray-500"
                                    >
                                        Tidak ada data user
                                    </td>
                                </tr>
                            ) : (
                                pagination.currentData.map((user) => {
                                    const roleInfo = getRoleInfo(user.role);
                                    return (
                                        <tr
                                            key={user.id}
                                            className="hover:bg-gray-50 transition-colors"
                                        >
                                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                                                <div className="flex items-center gap-3">
                                                    <div
                                                        className={`flex items-center justify-center w-10 h-10 rounded-full ${getAvatarColor(
                                                            user.username,
                                                        )} text-white font-bold text-sm shadow-sm`}
                                                    >
                                                        {getInitials(
                                                            user.username,
                                                        )}
                                                    </div>
                                                    <span className="text-gray-900 font-medium">
                                                        {user.username}
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                                                <span
                                                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border ${roleInfo.color}`}
                                                >
                                                    {roleInfo.icon}
                                                    {roleInfo.label}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                                {user.lastLogin ? (
                                                    new Date(
                                                        user.lastLogin,
                                                    ).toLocaleDateString(
                                                        "id-ID",
                                                        {
                                                            weekday: "long",
                                                            day: "numeric",
                                                            month: "long",
                                                            year: "numeric",
                                                            hour: "2-digit",
                                                            minute: "2-digit",
                                                        },
                                                    )
                                                ) : (
                                                    <span className="text-gray-400 italic">
                                                        Belum pernah login
                                                    </span>
                                                )}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                                {new Date(
                                                    user.createdAt,
                                                ).toLocaleDateString("id-ID", {
                                                    weekday: "long",
                                                    day: "numeric",
                                                    month: "long",
                                                    year: "numeric",
                                                    hour: "2-digit",
                                                    minute: "2-digit",
                                                })}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                                {new Date(
                                                    user.updatedAt,
                                                ).toLocaleDateString("id-ID", {
                                                    weekday: "long",
                                                    day: "numeric",
                                                    month: "long",
                                                    year: "numeric",
                                                    hour: "2-digit",
                                                    minute: "2-digit",
                                                })}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                                                <div className="flex items-center gap-2">
                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            handleEditClick(
                                                                user,
                                                            )
                                                        }
                                                        className="p-2 bg-amber-500 text-white hover:bg-amber-600 rounded-lg transition-colors border border-amber-600 shadow-sm"
                                                        title="Edit"
                                                    >
                                                        <Pencil className="w-4 h-4" />
                                                    </button>
                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            handleDeleteClick(
                                                                user,
                                                            )
                                                        }
                                                        className="p-2 bg-red-600 text-white hover:bg-red-700 rounded-lg transition-colors border border-red-700 shadow-sm"
                                                        title="Hapus"
                                                    >
                                                        <Trash2 className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <Pagination
                    currentPage={pagination.currentPage}
                    totalPages={pagination.totalPages}
                    totalItems={filteredUsers.length}
                    startIndex={pagination.startIndex}
                    endIndex={pagination.endIndex}
                    onPageChange={pagination.setCurrentPage}
                    onNextPage={pagination.goToNextPage}
                    onPreviousPage={pagination.goToPreviousPage}
                    canGoNext={pagination.canGoNext}
                    canGoPrevious={pagination.canGoPrevious}
                />
            </div>

            {/* Modals */}
            <UserModal
                isOpen={isModalOpen}
                onClose={handleModalClose}
                user={selectedUser}
            />

            <DeleteConfirmationModal
                isOpen={deleteModal.isDeleteModalOpen}
                itemName={deleteModal.itemToDelete?.name || ""}
                itemType="user"
                onConfirm={confirmDelete}
                onCancel={deleteModal.closeDeleteModal}
            />
        </div>
    );
}
