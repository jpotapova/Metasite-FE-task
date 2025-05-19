import { Checkbox } from "@components/Checkbox";
import { ListItemIcon, ListItemText, Menu, MenuItem } from "@mui/material";

import { styles } from "./styles";
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
      {...styles.menu}
    >
      {columns.map((column) => (
        <MenuItem
          key={column.field}
          onClick={() => {
            onColumnToggle(column.field);
          }}
          {...styles.menuItem}
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
