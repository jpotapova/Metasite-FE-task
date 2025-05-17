import type { ContactProps } from "@common/contact";

import type { FilterFormValues } from "./types";

export const getFilteredRows = (
  rows: ContactProps[],
  filters: FilterFormValues,
) => {
  return rows.filter((row) => {
    const matchesName = row.displayName
      .toLowerCase()
      .includes(filters.name.toLowerCase());
    const matchesCity = row.city
      .toLowerCase()
      .includes(filters.city.toLowerCase());
    const matchesActive = filters.showActive ? row.isActive : true;
    return matchesName && matchesCity && matchesActive;
  });
};
