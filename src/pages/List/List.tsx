import { useTheme } from "@common/Theme";
import { ContactCard } from "@components/ContactCard";
import { MaxWidthContainer } from "@components/MaxWidthContainer";
import { RootLayout } from "@layouts/RootLayout";
import {
  useGetContactsQuery,
  useLazyGetContactQuery,
} from "@store/contactsSlice";
import { useState } from "react";

import { FilterForm, type FilterFormValues } from "./FilterForm";
import {
  DEFAULT_FILTER_CITY,
  DEFAULT_FILTER_DISPLAY_NAME,
  DEFAULT_FILTER_SHOW_ACTIVE,
} from "./FilterForm";
import { getFilteredRows } from "./helpers";
import { LoadingError } from "./LoadingError";
import { LoadingProgress } from "./LoadingProgress";
import { Table } from "./Table";

export const List = () => {
  const theme = useTheme();
  const {
    data: contacts,
    isLoading,
    isError,
    isSuccess,
  } = useGetContactsQuery();
  const [
    getContact,
    {
      data: selectedContact,
      isLoading: isLoadingSelectedContact,
      isError: isErrorSelectedContact,
      isUninitialized,
    },
  ] = useLazyGetContactQuery();

  const [filters, setFilters] = useState<FilterFormValues>({
    displayName: DEFAULT_FILTER_DISPLAY_NAME,
    city: DEFAULT_FILTER_CITY,
    showActive: DEFAULT_FILTER_SHOW_ACTIVE,
  });

  const handleSubmit = (formValues: FilterFormValues) => {
    setFilters(formValues);
  };

  const handleContactSelect = (id: string) => {
    getContact(id, { skip: true }).catch(() => undefined);
  };

  const filteredRows = getFilteredRows(contacts, filters);

  return (
    <RootLayout>
      {isLoading && <LoadingProgress />}
      {isError && <LoadingError />}
      {isSuccess && (
        <>
          <FilterForm contacts={contacts} onSubmit={handleSubmit} />
          <MaxWidthContainer>
            <div
              style={{
                display: "flex",
                gap: theme.spacing(2),
                marginTop: parseInt(theme.spacing(5)) * -1,
              }}
            >
              <div style={{ flex: 1 }}>
                <Table rows={filteredRows} onRowClick={handleContactSelect} />
              </div>
              <div style={{ width: 328 }}>
                <ContactCard
                  contact={selectedContact}
                  isLoading={isLoadingSelectedContact}
                  isError={isErrorSelectedContact}
                  isUninitialized={isUninitialized}
                />
              </div>
            </div>
          </MaxWidthContainer>
        </>
      )}
    </RootLayout>
  );
};
