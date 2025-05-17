import type { ContactProps } from "@common/contact";

import type { FilterFormValues } from "./types";

export const getFilteredRows = (
  contacts: ContactProps[] | undefined,
  filters: FilterFormValues,
) => {
  if (!contacts) {
    return [];
  }

  return contacts.filter((contact) => {
    const matchesName = contact.displayName
      .toLowerCase()
      .includes(filters.displayName.toLowerCase());
    const matchesCity = contact.city
      .toLowerCase()
      .includes(filters.city.toLowerCase());
    const matchesActive = filters.showActive ? contact.isActive : true;
    return matchesName && matchesCity && matchesActive;
  });
};
