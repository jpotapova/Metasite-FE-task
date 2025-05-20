import { Checkbox as MuiCheckbox, FormControlLabel } from "@mui/material";

interface CheckboxProps {
  isChecked: boolean;
  onChange?: (value: boolean) => void;
  label?: React.ReactNode;
  theme?: "primary" | "contextual";
}

export const Checkbox = ({
  isChecked,
  onChange,
  label,
  theme = "primary",
}: CheckboxProps) => {
  return (
    <FormControlLabel
      sx={{ color: theme === "contextual" ? "currentColor" : undefined }}
      control={
        <MuiCheckbox
          checked={isChecked}
          onChange={
            onChange
              ? (e) => {
                  onChange(e.target.checked);
                }
              : undefined
          }
        />
      }
      label={label}
    />
  );
};
