import type { ContactProps } from "@common/contact";
import { useTheme } from "@common/Theme";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";

import { CellIsActive } from "./CellIsActive";
import { ColumnsVisibilityMenu } from "./ColumnsVisibilityMenu";
import { HeaderIsActive } from "./HeaderIsActive";
import { getColumnsToToggle, getVisibleColumnsArray } from "./helpers";
import { styles } from "./styles";
import {
  type ColumnProps,
  type ColumnToShowHide,
  MIN_COLUMN_DEFINITION,
} from "./types";

interface TableProps {
  rows: ContactProps[];
  onRowClick: (id: string) => void;
}

export const Table = ({ rows, onRowClick }: TableProps) => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const [visibleColumns, setVisibleColumns] = useState<
    Record<ColumnToShowHide, boolean>
  >({
    displayName: true,
    city: true,
    email: true,
    phone: true,
  });

  const columns: ColumnProps[] = [
    {
      ...MIN_COLUMN_DEFINITION,
      field: "displayName",
      headerName: "Name",
    },
    {
      ...MIN_COLUMN_DEFINITION,
      field: "city",
      headerName: "City",
    },
    {
      ...MIN_COLUMN_DEFINITION,
      sortable: false,
      field: "isActive",
      headerName: "Active",
      width: 56,
      maxWidth: 56,
      renderHeader: HeaderIsActive,
      renderCell: CellIsActive,
    },
    {
      ...MIN_COLUMN_DEFINITION,
      field: "email",
      headerName: "Email",
    },
    {
      ...MIN_COLUMN_DEFINITION,
      field: "phone",
      headerName: "Phone",
    },
    {
      disableColumnMenu: true,
      sortable: false,
      field: "actions",
      headerName: "",
      width: 56,
      maxWidth: 56,
      renderHeader: () => (
        <IconButton
          onClick={handleMenuClick}
          sx={{ color: theme.palette.contactify.contrast }}
        >
          <MenuIcon />
        </IconButton>
      ),
    },
  ];

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleColumnToggle = (column: ColumnToShowHide) => {
    setVisibleColumns((prev) => ({
      ...prev,
      [column]: !prev[column],
    }));
  };

  const visibleColumnsArray = getVisibleColumnsArray(columns, visibleColumns);
  const columnsToToggle = getColumnsToToggle(columns, visibleColumns);

  return (
    <div>
      <DataGrid
        rows={rows}
        columns={visibleColumnsArray}
        hideFooter
        onRowClick={({ row }: { row: { id: string } }) => {
          onRowClick(row.id);
        }}
        {...styles.dataGrid(theme)}
      />
      <ColumnsVisibilityMenu
        anchorEl={anchorEl}
        onMenuClose={handleMenuClose}
        columns={columnsToToggle}
        onColumnToggle={handleColumnToggle}
      />
    </div>
  );
};
