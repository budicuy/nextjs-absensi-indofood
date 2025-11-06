import { type LucideIcon, Plus } from "lucide-react";

interface PageHeaderProps {
    title: string;
    description: string;
    onAddClick: () => void;
    addButtonText?: string;
    icon?: LucideIcon;
}

export default function PageHeader({
    title,
    description,
    onAddClick,
    addButtonText = "Tambah",
    icon: Icon,
}: PageHeaderProps) {
    return (
        <div className="mb-6 bg-linear-to-r from-(--primary-hover) to-(--primary-color) rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    {Icon && (
                        <div className="hidden sm:flex p-3 bg-white/20 rounded-xl">
                            <Icon className="w-8 h-8 text-white" />
                        </div>
                    )}
                    <div>
                        <h1 className="text-3xl font-bold text-white">
                            {title}
                        </h1>
                        <p className="text-(--primary-light) mt-2">
                            {description}
                        </p>
                    </div>
                </div>
                <button
                    type="button"
                    onClick={onAddClick}
                    className="flex items-center gap-2 px-5 py-3 bg-white text-(--primary-color) rounded-lg hover:bg-(--primary-light) transition-all shadow-md hover:shadow-lg font-semibold"
                >
                    <Plus className="w-5 h-5" />
                    <span className="hidden sm:inline">{addButtonText}</span>
                    <span className="sm:hidden">Tambah</span>
                </button>
            </div>
        </div>
    );
}
