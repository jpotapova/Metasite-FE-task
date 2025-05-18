import { useTheme } from "@common/Theme";
import { ContactCard } from "@components/ContactCard";
import { Container } from "@components/Container";
import { ErrorMessage } from "@components/ErrorMessage";
import { IndicatorProgress } from "@components/IndicatorProgress";
import { RootLayout } from "@layouts/RootLayout";
// import { transformGetContactsResponse } from "@store/contactsSlice";
// import data from "@store/mockData.json";
import { useGetContactsQuery } from "@store/contactsSlice";
import { useState } from "react";

import { FilterForm, type FilterFormValues } from "./FilterForm";
import {
  DEFAULT_FILTER_CITY,
  DEFAULT_FILTER_DISPLAY_NAME,
  DEFAULT_FILTER_SHOW_ACTIVE,
} from "./FilterForm";
import { getFilteredRows } from "./helpers";
import { Table } from "./Table";

export const List = () => {
  const theme = useTheme();
  const {
    data: contacts,
    isLoading,
    isError,
    isSuccess,
  } = useGetContactsQuery();
  // const contacts = transformGetContactsResponse(data);
  // const isLoading = false;
  // const isError = false;
  // const isSuccess = true;

  const [filters, setFilters] = useState<FilterFormValues>({
    displayName: DEFAULT_FILTER_DISPLAY_NAME,
    city: DEFAULT_FILTER_CITY,
    showActive: DEFAULT_FILTER_SHOW_ACTIVE,
  });

  const [selectedId, setSelectedId] = useState<string>();

  const handleSubmit = (formValues: FilterFormValues) => {
    setFilters(formValues);
  };

  const filteredRows = getFilteredRows(contacts, filters);
  const selectedRow = filteredRows.find((row) => row.id === selectedId);

  return (
    <RootLayout>
      {isLoading && <IndicatorProgress />}
      {isError && <ErrorMessage>Error loading contacts</ErrorMessage>}
      {isSuccess && (
        <>
          <FilterForm onSubmit={handleSubmit} />
          <Container>
            <div
              style={{
                display: "flex",
                gap: theme.spacing(2),
                marginTop: parseInt(theme.spacing(5)) * -1,
              }}
            >
              <div style={{ flex: 1 }}>
                <Table rows={filteredRows} onRowClick={setSelectedId} />
              </div>
              <div style={{ width: 328 }}>
                <ContactCard contact={selectedRow} />
              </div>
            </div>
          </Container>
        </>
      )}
    </RootLayout>
  );
};
