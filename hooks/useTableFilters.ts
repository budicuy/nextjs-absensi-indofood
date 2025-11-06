import { useMemo, useState } from "react";

interface UseTableFiltersProps<T> {
    data: T[];
    searchFields: (keyof T)[];
    filterFn?: (item: T) => boolean;
}

interface UseTableFiltersReturn<T> {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    filteredData: T[];
    resetFilters: () => void;
}

/**
 * Custom hook untuk menangani search dan filter logic
 * @param data - Array data yang akan difilter
 * @param searchFields - Fields yang akan di-search
 * @param filterFn - Optional custom filter function
 * @returns Filter state dan functions
 */
export function useTableFilters<T>({
    data,
    searchFields,
    filterFn,
}: UseTableFiltersProps<T>): UseTableFiltersReturn<T> {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredData = useMemo(() => {
        return data.filter((item) => {
            // Apply search filter
            const matchesSearch = searchQuery
                ? searchFields.some((field) => {
                      const value = item[field];
                      if (typeof value === "string") {
                          return value
                              .toLowerCase()
                              .includes(searchQuery.toLowerCase());
                      }
                      if (typeof value === "number") {
                          return value.toString().includes(searchQuery);
                      }
                      return false;
                  })
                : true;

            // Apply custom filter if provided
            const matchesCustomFilter = filterFn ? filterFn(item) : true;

            return matchesSearch && matchesCustomFilter;
        });
    }, [data, searchQuery, searchFields, filterFn]);

    const resetFilters = () => {
        setSearchQuery("");
    };

    return {
        searchQuery,
        setSearchQuery,
        filteredData,
        resetFilters,
    };
}
