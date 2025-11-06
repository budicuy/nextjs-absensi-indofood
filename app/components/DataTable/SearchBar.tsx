import { Search } from "lucide-react";

interface SearchBarProps {
    id: string;
    placeholder: string;
    value: string;
    onChange: (value: string) => void;
    label?: string;
}

export default function SearchBar({
    id,
    placeholder,
    value,
    onChange,
    label = "Pencarian",
}: SearchBarProps) {
    return (
        <div className="mb-4">
            <label
                htmlFor={id}
                className="block text-sm font-semibold text-gray-700 mb-2"
            >
                {label}
            </label>
            <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                    type="text"
                    id={id}
                    placeholder={placeholder}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-(--primary-color) focus:border-transparent transition-all bg-white"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                />
            </div>
        </div>
    );
}
