import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    totalItems: number;
    startIndex: number;
    endIndex: number;
    onPageChange: (page: number) => void;
    onNextPage: () => void;
    onPreviousPage: () => void;
    canGoNext: boolean;
    canGoPrevious: boolean;
}

export default function Pagination({
    currentPage,
    totalPages,
    totalItems,
    startIndex,
    endIndex,
    onPageChange,
    onNextPage,
    onPreviousPage,
    canGoNext,
    canGoPrevious,
}: PaginationProps) {
    // Generate page numbers to display
    const getPageNumbers = () => {
        const pages: (number | string)[] = [];
        const maxPagesToShow = 5;

        if (totalPages <= maxPagesToShow) {
            // Show all pages if total pages is less than max
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            // Always show first page
            pages.push(1);

            if (currentPage > 3) {
                pages.push("...");
            }

            // Show pages around current page
            const start = Math.max(2, currentPage - 1);
            const end = Math.min(totalPages - 1, currentPage + 1);

            for (let i = start; i <= end; i++) {
                pages.push(i);
            }

            if (currentPage < totalPages - 2) {
                pages.push("...");
            }

            // Always show last page
            if (totalPages > 1) {
                pages.push(totalPages);
            }
        }

        return pages;
    };

    if (totalItems === 0) {
        return (
            <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
                <p className="text-gray-500 text-center">Tidak ada data</p>
            </div>
        );
    }

    return (
        <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                {/* Info */}
                <p className="text-sm text-gray-600">
                    Menampilkan{" "}
                    <span className="font-semibold text-gray-900">
                        {startIndex + 1}
                    </span>{" "}
                    -{" "}
                    <span className="font-semibold text-gray-900">
                        {endIndex}
                    </span>{" "}
                    dari{" "}
                    <span className="font-semibold text-gray-900">
                        {totalItems}
                    </span>{" "}
                    data
                </p>

                {/* Pagination Controls */}
                <div className="flex items-center gap-2">
                    <button
                        type="button"
                        onClick={onPreviousPage}
                        disabled={!canGoPrevious}
                        className="p-2 border border-gray-300 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>

                    {getPageNumbers().map((page) => {
                        if (page === "...") {
                            return (
                                <span
                                    key={`ellipsis-${Math.random()}`}
                                    className="px-3 py-2 text-gray-500"
                                >
                                    ...
                                </span>
                            );
                        }

                        const pageNumber = page as number;
                        const isActive = pageNumber === currentPage;

                        return (
                            <button
                                key={pageNumber}
                                type="button"
                                onClick={() => onPageChange(pageNumber)}
                                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                                    isActive
                                        ? "bg-(--primary-color) text-white"
                                        : "border border-gray-300 hover:bg-gray-100 text-gray-700"
                                }`}
                            >
                                {pageNumber}
                            </button>
                        );
                    })}

                    <button
                        type="button"
                        onClick={onNextPage}
                        disabled={!canGoNext}
                        className="p-2 border border-gray-300 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
}
