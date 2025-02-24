import { useCallback, useEffect, useState } from "react";
import store from "store";
import { BoardFilters } from "./schema";

export function useBoardFilter({
  showEmpty = false,
  focusedRepo = null,
}: BoardFilters): [BoardFilters, (filters: BoardFilters) => void] {
  const [filters, setFiltersState] = useState<BoardFilters>({
    showEmpty,
    focusedRepo,
  });

  const setFilters = useCallback(
    (newFilters: BoardFilters) => {
      if (filters.focusedRepo !== newFilters.focusedRepo) {
        setFiltersState(newFilters);
        store.set("board-filters", newFilters);
      } else {
        setFiltersState({ ...newFilters, focusedRepo: null });
      }
    },
    [filters.focusedRepo],
  );

  useEffect(() => {
    const filters = store.get("board-filters");
    if (filters) {
      setFiltersState(filters);
    }
  }, []);

  return [filters, setFilters];
}
