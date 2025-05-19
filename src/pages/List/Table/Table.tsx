import type { ContactProps } from "@common/contact";
import { useTheme } from "@common/Theme";
import { IndicatorActive } from "@components/IndicatorActive";
import MenuIcon from "@mui/icons-material/Menu";
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
      renderHeader: () => (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            color: theme.palette.contactify.contrast,
          }}
        >
          <IndicatorActive isOn theme="light" />
        </div>
      ),
      renderCell: (params: { value?: boolean }) => (
        <div
          style={{ display: "flex", justifyContent: "center", width: "100%" }}
        >
          <IndicatorActive isOn={!!params.value} theme="dark" />
        </div>
      ),
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
        sx={{
          border: "none",
          boxShadow: 2,
          "& .MuiDataGrid-columnHeaders": {
            "& .MuiDataGrid-columnHeader": {
              backgroundColor: theme.palette.contactify.backgroundLight,
              borderColor: theme.palette.contactify.contrast,
              width: "100%",
              "& .MuiDataGrid-columnHeaderTitle": {
                color: theme.palette.contactify.contrast,
              },
              "& .MuiDataGrid-columnHeaderTitleContainerContent": {
                width: "100%",
              },
              "& .MuiDataGrid-sortIcon": {
                color: theme.palette.contactify.contrast,
              },
            },
            "& .MuiDataGrid-filler": {
              backgroundColor: theme.palette.contactify.backgroundLight,
            },
          },
          "& .MuiDataGrid-cell": {
            display: "flex",
            alignItems: "center",
          },
          "& .MuiDataGrid-columnSeparator": {
            color: theme.palette.contactify.contrast,
          },
          "& .MuiDataGrid-columnHeader--last": {
            "& .MuiDataGrid-columnSeparator": {
              display: "none",
            },
          },
        }}
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
