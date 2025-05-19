import { useTheme } from "@common/Theme";
import { Button } from "@components/Button";
import { Checkbox } from "@components/Checkbox";
import { IndicatorActive } from "@components/IndicatorActive";
import { Input } from "@components/Input";
import { MaxWidthContainer } from "@components/MaxWidthContainer";
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

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        backgroundColor: theme.palette.contactify.backgroundMedium,
        width: "100%",
      }}
    >
      <MaxWidthContainer>
        <div
          style={{
            display: "flex",
            gap: theme.spacing(2),
            paddingTop: theme.spacing(4),
            paddingBottom: theme.spacing(6),
          }}
        >
          <div style={{ display: "flex", gap: theme.spacing(2) }}>
            <Input label="Name" value={displayName} onChange={setDisplayName} />
            <Input label="City" value={city} onChange={setCity} />
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
      </MaxWidthContainer>
    </form>
  );
};
