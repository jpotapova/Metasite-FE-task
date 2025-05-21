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

export const transformGetContactResponse = (
  record: ContactApiProps,
): ContactProps => {
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
};

const contactsApiSlice = baseApiSlice.injectEndpoints({
  endpoints: (build) => ({
    getContacts: build.query<ContactProps[], void>({
      query: () => ({
        url: "contacts",
      }),
      transformResponse: (records: ContactApiProps[]): ContactProps[] => {
        return records.map(transformGetContactResponse);
      },
    }),
    getContact: build.query<ContactProps, string>({
      query: (id) => ({
        url: `contacts/${id}`,
      }),
      transformResponse: transformGetContactResponse,
    }),
  }),
});

export const { useGetContactsQuery, useLazyGetContactQuery } = contactsApiSlice;
