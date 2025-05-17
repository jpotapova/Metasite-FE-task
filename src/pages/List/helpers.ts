import type { FilterFormValues } from "./types";

export const getFilteredRows = (
  rows: {
    id: number;
    name: string;
    city: string;
    isActive: boolean;
    email: string;
    phone: string;
  }[],
  filters: FilterFormValues,
) => {
  return rows.filter((row) => {
    const matchesName = row.name
      .toLowerCase()
      .includes(filters.name.toLowerCase());
    const matchesCity = row.city
      .toLowerCase()
      .includes(filters.city.toLowerCase());
    const matchesActive = filters.showActive ? row.isActive : true;
    return matchesName && matchesCity && matchesActive;
  });
};
