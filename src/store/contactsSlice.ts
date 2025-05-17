import type { ContactProps } from "@common/contact";

import { baseApiSlice } from "./baseApiSlice";

export interface ContactApiProps {
  id: string;
  name: string;
  surname: string;
  city: string;
  email: string;
  phone: string;
  isActive: boolean;
}

export const transformGetContactsResponse = (
  response: ContactApiProps[],
): ContactProps[] => {
  return response.map((record) => {
    const nameParts = [];
    if (record.name) {
      nameParts.push(record.name);
    }
    if (record.surname) {
      nameParts.push(record.surname);
    }
    return {
      id: record.id,
      displayName: nameParts.join(" "),
      city: record.city,
      email: record.email,
      phone: record.phone,
      isActive: record.isActive,
    };
  });
};

const contactsApiSlice = baseApiSlice.injectEndpoints({
  endpoints: (build) => ({
    getContacts: build.query<ContactProps[], void>({
      query: () => ({
        url: "contacts",
      }),
      transformResponse: transformGetContactsResponse,
    }),
  }),
});

export const { useGetContactsQuery } = contactsApiSlice;
