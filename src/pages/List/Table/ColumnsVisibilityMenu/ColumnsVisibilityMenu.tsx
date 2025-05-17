import {
  Checkbox,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";

export type ColumnToShowHideProps = {
  field: string;
  headerName: string;
  isVisible: boolean;
}

interface ColumnsVisibilityMenuProps {
  anchorEl: null | HTMLElement;
  onMenuClose: () => void;
  columns: ColumnToShowHideProps[];
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
