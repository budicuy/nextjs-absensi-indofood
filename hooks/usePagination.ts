import { useMemo, useState } from "react";

interface UsePaginationProps<T> {
    data: T[];
    itemsPerPage: number;
}

interface UsePaginationReturn<T> {
    currentPage: number;
    totalPages: number;
    currentData: T[];
    setCurrentPage: (page: number) => void;
    goToNextPage: () => void;
    goToPreviousPage: () => void;
    goToFirstPage: () => void;
    goToLastPage: () => void;
    canGoNext: boolean;
    canGoPrevious: boolean;
    startIndex: number;
    endIndex: number;
}

/**
 * Custom hook untuk menangani pagination logic
 * @param data - Array data yang akan di-paginate
 * @param itemsPerPage - Jumlah item per halaman
 * @returns Pagination state dan functions
 */
export function usePagination<T>({
    data,
    itemsPerPage,
}: UsePaginationProps<T>): UsePaginationReturn<T> {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = useMemo(
        () => Math.ceil(data.length / itemsPerPage),
        [data.length, itemsPerPage],
    );

    const { startIndex, endIndex, currentData } = useMemo(() => {
        const start = (currentPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        return {
            startIndex: start,
            endIndex: Math.min(end, data.length),
            currentData: data.slice(start, end),
        };
    }, [currentPage, itemsPerPage, data]);

    const canGoNext = currentPage < totalPages;
    const canGoPrevious = currentPage > 1;

    const goToNextPage = () => {
        if (canGoNext) {
            setCurrentPage((prev) => prev + 1);
        }
    };

    const goToPreviousPage = () => {
        if (canGoPrevious) {
            setCurrentPage((prev) => prev - 1);
        }
    };

    const goToFirstPage = () => {
        setCurrentPage(1);
    };

    const goToLastPage = () => {
        setCurrentPage(totalPages);
    };

    return {
        currentPage,
        totalPages,
        currentData,
        setCurrentPage,
        goToNextPage,
        goToPreviousPage,
        goToFirstPage,
        goToLastPage,
        canGoNext,
        canGoPrevious,
        startIndex,
        endIndex,
    };
}
