import type { ContactProps } from "@common/contact";
import { useTheme } from "@common/Theme";
import { Button } from "@components/Button";
import { Checkbox } from "@components/Checkbox";
import { Container } from "@components/Container";
import { IndicatorActive } from "@components/IndicatorActive";
import { Input } from "@components/Input";
import { Select } from "@components/Select";
import { useState } from "react";

import { getOptions } from "./helpers";

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
  contacts: ContactProps[] | undefined;
}

export const FilterForm = ({ onSubmit, contacts }: FilterFormProps) => {
  const theme = useTheme();
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

  const options = getOptions(contacts);

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        backgroundColor: theme.palette.contactify.backgroundMedium,
        width: "100%",
      }}
    >
      <Container>
        <div
          style={{
            display: "flex",
            gap: theme.spacing(2),
            paddingTop: theme.spacing(4),
            paddingBottom: theme.spacing(6),
          }}
        >
          <div style={{ display: "flex", gap: theme.spacing(2) }}>
            <div style={{ width: theme.spacing(27) }}>
              <Input
                label="Name"
                value={displayName}
                onChange={setDisplayName}
              />
            </div>
            <div style={{ width: theme.spacing(27) }}>
              <Select
                id="city"
                label="City"
                value={city}
                onChange={setCity}
                options={options}
              />
            </div>
            <Checkbox
              isChecked={showActive}
              onChange={setShowActive}
              label={
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: theme.spacing(1),
                  }}
                >
                  Show active
                  <IndicatorActive isOn size="small" />
                </div>
              }
            />
          </div>
          <Button>Filter</Button>
        </div>
      </Container>
    </form>
  );
};
