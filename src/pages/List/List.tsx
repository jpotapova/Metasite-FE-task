import MenuIcon from "@mui/icons-material/Menu";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { IconButton } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { ColumnsVisibilityMenu } from "./ColumnsVisibilityMenu";
import {
    type ColumnToShowHide,
    isColumnToShowHide,
    MIN_COLUMN_DEFINITION,
    type ColumnProps
} from "./types";

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

    const handleColumnToggle = (column: string) => {
        setVisibleColumns((prev) => ({
            ...prev,
            [column]: !prev[column as keyof typeof prev],
        }));
    };

    const visibleColumnsArray = columns.filter(
        (column) =>
            isColumnToShowHide(column.field) && visibleColumns[column.field] || !isColumnToShowHide(column.field),
    );

    const columnsToToggle = columns
        .filter((column): column is ColumnProps & {
            field: ColumnToShowHide;
        } => {
            return isColumnToShowHide(column.field);
        })
        .map((column) => {
            return {
                field: column.field,
                headerName: column.headerName,
                isVisible:
                    visibleColumns[column.field],
            };
        })

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
