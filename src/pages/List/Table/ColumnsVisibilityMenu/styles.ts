export const styles = {
  menuItem: {
    sx: {
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
    },
  },
  menu: {
    slotProps: {
      root: { sx: { ".MuiList-root": { padding: 0 } } },
    },
    transformOrigin: { vertical: -8, horizontal: 58 },
  },
};
