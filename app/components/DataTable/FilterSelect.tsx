import type { LucideIcon } from "lucide-react";

interface FilterOption {
    value: string;
    label: string;
}

interface FilterSelectProps {
    id: string;
    label: string;
    value: string;
    onChange: (value: string) => void;
    options: FilterOption[];
    placeholder?: string;
    icon?: LucideIcon;
}

export default function FilterSelect({
    id,
    label,
    value,
    onChange,
    options,
    placeholder = "Semua",
    icon: Icon,
}: FilterSelectProps) {
    return (
        <div>
            <label
                htmlFor={id}
                className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2"
            >
                {Icon && <Icon className="w-4 h-4 text-(--primary-color)" />}
                {label}
            </label>
            <div className="relative">
                {Icon && (
                    <Icon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                )}
                <select
                    id={id}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    className={`w-full ${Icon ? "pl-12" : "pl-4"} pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-(--primary-color) focus:border-transparent transition-all bg-white appearance-none`}
                >
                    <option value="">{placeholder}</option>
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}
