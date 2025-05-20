import {
  FormControl,
  InputLabel,
  MenuItem,
  Select as MuiSelect,
  type SelectChangeEvent,
} from "@mui/material";

interface SelectProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
}

export const Select = ({
  id,
  label,
  value,
  onChange,
  options,
}: SelectProps) => {
  const labelId = `${id}-label`;

  const handleChange = (event: SelectChangeEvent) => {
    onChange(event.target.value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id={labelId} shrink>
        {label}
      </InputLabel>
      <MuiSelect
        labelId={labelId}
        id={id}
        value={value}
        label={label}
        onChange={handleChange}
        size="small"
        displayEmpty
        sx={{
          "& .MuiSelect-icon": {
            color: "white",
          },
        }}
      >
        <MenuItem value="">&nbsp;</MenuItem>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </MuiSelect>
    </FormControl>
  );
};
