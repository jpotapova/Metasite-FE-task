import type { GridColDef } from "@mui/x-data-grid";

export const MIN_COLUMN_DEFINITION = {
  sortable: true,
  hideable: true,
  disableColumnMenu: true,
  flex: 1,
};

export const COLUMNS_TO_SHOW_HIDE = ["name", "city", "email", "phone"] as const;

export type ColumnToShowHide = (typeof COLUMNS_TO_SHOW_HIDE)[number];

export function isColumnToShowHide(value: string): value is ColumnToShowHide {
  return COLUMNS_TO_SHOW_HIDE.includes(value as ColumnToShowHide);
}

export type ColumnProps = GridColDef & {
  headerName: string;
}