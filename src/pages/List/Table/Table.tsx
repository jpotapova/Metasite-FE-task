import MenuIcon from "@mui/icons-material/Menu";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { IconButton } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";

import { ColumnsVisibilityMenu } from "./ColumnsVisibilityMenu";
import { getColumnsToToggle, getVisibleColumnsArray } from "./helpers";
import {
  type ColumnProps,
  type ColumnToShowHide,
  MIN_COLUMN_DEFINITION,
} from "./types";
interface TableProps {
  rows: {
    id: number;
    name: string;
    city: string;
    isActive: boolean;
    email: string;
    phone: string;
  }[];
}

export const Table = ({ rows }: TableProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const [visibleColumns, setVisibleColumns] = useState<
    Record<ColumnToShowHide, boolean>
  >({
    name: true,
    city: true,
    email: true,
    phone: true,
  });

  const columns: ColumnProps[] = [
    {
      ...MIN_COLUMN_DEFINITION,
      field: "name",
      headerName: "Name",
    },
    {
      ...MIN_COLUMN_DEFINITION,
      field: "city",
      headerName: "City",
    },
    {
      ...MIN_COLUMN_DEFINITION,
      field: "isActive",
      headerName: "Active",
      renderHeader: () => <VisibilityIcon />,
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
      field: "actions",
      headerName: "",
      renderHeader: () => (
        <IconButton onClick={handleMenuClick}>
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
      <DataGrid rows={rows} columns={visibleColumnsArray} hideFooter />
      <ColumnsVisibilityMenu
        anchorEl={anchorEl}
        onMenuClose={handleMenuClose}
        columns={columnsToToggle}
        onColumnToggle={handleColumnToggle}
      />
    </div>
  );
};
