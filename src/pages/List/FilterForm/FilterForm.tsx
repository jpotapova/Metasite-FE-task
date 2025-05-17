import { Button } from "@components/Button";
import { Checkbox } from "@components/Checkbox";
import { IndicatorActive } from "@components/IndicatorActive";
import { Input } from "@components/Input";
import { Box, Stack } from "@mui/material";
import { useState } from "react";

export const DEFAULT_FILTER_DISPLAY_NAME = "";
export const DEFAULT_FILTER_CITY = "";
export const DEFAULT_FILTER_SHOW_ACTIVE = false;
export interface FilterFormValues {
  displayName: string;
  city: string;
  showActive: boolean;
}

interface FilterFormProps {
  onSubmit: (formValues: FilterFormValues) => void;
}

export const FilterForm = ({ onSubmit }: FilterFormProps) => {
  const [displayName, setDisplayName] = useState<string>(
    DEFAULT_FILTER_DISPLAY_NAME,
  );
  const [city, setCity] = useState<string>(DEFAULT_FILTER_CITY);
  const [showActive, setShowActive] = useState<boolean>(
    DEFAULT_FILTER_SHOW_ACTIVE,
  );

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit({ displayName, city, showActive });
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Stack direction="row" spacing={2} alignItems="center">
        <Input label="Name" value={displayName} onChange={setDisplayName} />
        <Input label="City" value={city} onChange={setCity} />
        <Checkbox
          isChecked={showActive}
          onChange={setShowActive}
          label={
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              Show active
              <IndicatorActive isOn size="small" />
            </Box>
          }
        />
        <Button>Filter</Button>
      </Stack>
    </Box>
  );
};
