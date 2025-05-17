import { RootLayout } from "@layouts/RootLayout";
import { useState } from "react";

import { FilterForm, type FilterFormValues } from "./FilterForm";
import {
  DEFAULT_FILTER_CITY,
  DEFAULT_FILTER_NAME,
  DEFAULT_FILTER_SHOW_ACTIVE,
} from "./FilterForm";
import { getFilteredRows } from "./helpers";
import { Table } from "./Table";
// Sample data - replace with your actual data
const rows = [
  {
    id: 1,
    name: "John Doe",
    city: "New York",
    isActive: true,
    email: "john@example.com",
    phone: "123-456-7890",
  },
  {
    id: 2,
    name: "Jane Smith",
    city: "Los Angeles",
    isActive: false,
    email: "jane@example.com",
    phone: "098-765-4321",
  },
];

export const List = () => {
  const [filters, setFilters] = useState<FilterFormValues>({
    name: DEFAULT_FILTER_NAME,
    city: DEFAULT_FILTER_CITY,
    showActive: DEFAULT_FILTER_SHOW_ACTIVE,
  });

  const handleSubmit = (formValues: FilterFormValues) => {
    setFilters(formValues);
  };

  const filteredRows = getFilteredRows(rows, filters);

  return (
    <RootLayout>
      <FilterForm onSubmit={handleSubmit} />
      <Table rows={filteredRows} />
    </RootLayout>
  );
};
