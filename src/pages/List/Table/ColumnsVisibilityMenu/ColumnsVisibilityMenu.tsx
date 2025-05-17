import {
  Checkbox,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";

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
    <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={onMenuClose}>
      {columns.map((column) => (
        <MenuItem
          key={column.field}
          onClick={() => {
            onColumnToggle(column.field);
          }}
        >
          <ListItemIcon>
            <Checkbox checked={column.isVisible} />
          </ListItemIcon>
          <ListItemText primary={column.headerName} />
        </MenuItem>
      ))}
    </Menu>
  );
};
