import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import type { GridColDef } from "@mui/x-data-grid";
import {
  IconButton,
  Menu,
  MenuItem,
  Checkbox,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import MenuIcon from "@mui/icons-material/Menu";

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
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [visibleColumns, setVisibleColumns] = useState({
    name: true,
    city: true,
    email: true,
    phone: true,
  });

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleColumnToggle = (column: string) => {
    setVisibleColumns((prev) => ({
      ...prev,
      [column]: !prev[column as keyof typeof prev],
    }));
  };

  const columns: GridColDef[] = [
    {
      field: "name",
      headerName: "Name",
      sortable: true,
      hideable: true,
      disableColumnMenu: true,
      flex: 1,
    },
    {
      field: "city",
      headerName: "City",
      sortable: true,
      hideable: true,
      disableColumnMenu: true,
      flex: 1,
    },
    {
      field: "isActive",
      headerName: "Active",
      sortable: true,
      flex: 1,
      renderHeader: () => (
        <div style={{ display: "flex", alignItems: "center" }}>
          <VisibilityIcon style={{ marginRight: 8 }} />
          Active
        </div>
      ),
    },
    {
      field: "email",
      headerName: "Email",
      sortable: true,
      hideable: true,
      disableColumnMenu: true,
      flex: 1,
    },
    {
      field: "phone",
      headerName: "Phone",
      sortable: true,
      hideable: true,
      disableColumnMenu: true,
      flex: 1,
    },
    {
      field: "actions",
      headerName: "",
      sortable: false,
      flex: 1,
      renderHeader: () => (
        <IconButton onClick={handleMenuClick}>
          <MenuIcon />
        </IconButton>
      ),
    },
  ];

  const visibleColumnsArray = columns.filter(
    (col) =>
      col.field === "actions" ||
      col.field === "isActive" ||
      visibleColumns[col.field as keyof typeof visibleColumns],
  );

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={visibleColumnsArray}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        {Object.entries(visibleColumns).map(([column, isVisible]) => (
          <MenuItem key={column} onClick={() => handleColumnToggle(column)}>
            <ListItemIcon>
              <Checkbox checked={isVisible} />
            </ListItemIcon>
            <ListItemText
              primary={column.charAt(0).toUpperCase() + column.slice(1)}
            />
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};
