import type { GridColDef } from "@mui/x-data-grid";

import {
  type ColumnToShowHide,
  isColumnToShowHide,
} from "./ColumnsVisibilityMenu";

export const MIN_COLUMN_DEFINITION = {
  sortable: true,
  hideable: true,
  disableColumnMenu: true,
  flex: 1,
};

export type ColumnProps = GridColDef & {
  headerName: string;
};

export { type ColumnToShowHide, isColumnToShowHide };
