import type { GridColDef } from "@mui/x-data-grid";

export const MIN_COLUMN_DEFINITION = {
  sortable: true,
  hideable: true,
  disableColumnMenu: true,
  flex: 1,
};

export type ColumnProps = GridColDef & {
  headerName: string;
};
