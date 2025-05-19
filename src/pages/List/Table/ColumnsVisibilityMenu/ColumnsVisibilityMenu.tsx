import { Checkbox } from "@components/Checkbox";
import { ListItemIcon, ListItemText, Menu, MenuItem } from "@mui/material";

import { type ColumnToShowHide } from "./types";

export interface ColumnToShowHideProps {
  field: ColumnToShowHide;
  headerName: string;
  isVisible: boolean;
}

interface ColumnsVisibilityMenuProps {
  anchorEl: null | HTMLElement;
  onMenuClose: () => void;
  columns: ColumnToShowHideProps[];
  onColumnToggle: (field: ColumnToShowHide) => void;
}

export const ColumnsVisibilityMenu = ({
  anchorEl,
  onMenuClose,
  columns,
  onColumnToggle,
}: ColumnsVisibilityMenuProps) => {
  return (
    <Menu
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={onMenuClose}
      slotProps={{
        root: { sx: { ".MuiList-root": { padding: 0 } } },
      }}
      transformOrigin={{ vertical: -8, horizontal: 58 }}
    >
      {columns.map((column) => (
        <MenuItem
          key={column.field}
          onClick={() => {
            onColumnToggle(column.field);
          }}
          sx={{
            padding: 0,
            borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
            "&:last-child": {
              borderBottom: "none",
            },
            "& .MuiFormControlLabel-root": {
              margin: 0,
            },
            "& .MuiListItemIcon-root": {
              maxWidth: 42,
            },
            "& .MuiListItemText-root": {
              padding: "8px 16px 8px 0",
            },
          }}
        >
          <ListItemIcon>
            <Checkbox isChecked={column.isVisible} theme="contextual" />
          </ListItemIcon>
          <ListItemText primary={column.headerName} />
        </MenuItem>
      ))}
    </Menu>
  );
};
