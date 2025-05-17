import VisibilityIcon from "@mui/icons-material/Visibility";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Stack,
  TextField,
} from "@mui/material";
import { useState } from "react";

export interface FilterFormValues {
  name: string;
  city: string;
  showActive: boolean;
}

interface FilterFormProps {
  onSubmit: (formValues: FilterFormValues) => void;
}

export const FilterForm = ({ onSubmit }: FilterFormProps) => {
  const [name, setName] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [showActive, setShowActive] = useState<boolean>(true);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit({ name, city, showActive });
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Stack direction="row" spacing={2} alignItems="center">
        <TextField
          label="Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          size="small"
        />
        <TextField
          label="City"
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
          size="small"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={showActive}
              onChange={(e) => {
                setShowActive(e.target.checked);
              }}
            />
          }
          label={
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              Show active
              <VisibilityIcon fontSize="small" />
            </Box>
          }
        />
        <Button type="submit" variant="contained" color="primary">
          Filter
        </Button>
      </Stack>
    </Box>
  );
};
