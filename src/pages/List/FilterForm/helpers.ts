import type { ContactProps } from "@common/contact";

export const getOptions = (contacts: ContactProps[] | undefined) => {
  const cities = contacts ? contacts.map((contact) => contact.city) : [];

  const uniqueOptions = new Set(cities);

  const sorted = [...uniqueOptions].sort((a, b) => a.localeCompare(b));

  return sorted.map((city) => ({
    value: city,
    label: city,
  }));
};
