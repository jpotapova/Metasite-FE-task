import {
  Checkbox,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";

interface ColumnsVisibilityMenuProps {
  anchorEl: null | HTMLElement;
  onMenuClose: () => void;
  columns: {
    field: string;
    headerName: string;
    isVisible: boolean;
  }[];
  onColumnToggle: (field: string) => void;
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
