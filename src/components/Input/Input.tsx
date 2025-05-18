import { TextField } from "@mui/material";

interface InputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

export const Input = ({ label, value, onChange }: InputProps) => {
  return (
    <TextField
      label={label}
      value={value}
      onChange={(e) => {
        onChange(e.target.value);
      }}
      size="small"
      slotProps={{ inputLabel: { shrink: true } }}
    />
  );
};
