import { Checkbox as MuiCheckbox, FormControlLabel } from "@mui/material";

interface CheckboxProps {
  isChecked: boolean;
  onChange?: (value: boolean) => void;
  label?: React.ReactNode;
}

export const Checkbox = ({ isChecked, onChange, label }: CheckboxProps) => {
  return (
    <FormControlLabel
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
