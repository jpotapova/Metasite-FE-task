import { useTheme } from "@common/Theme";
import { IndicatorActive } from "@components/IndicatorActive";

export const HeaderIsActive = () => {
  const theme = useTheme();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        color: theme.palette.contactify.contrast,
      }}
    >
      <IndicatorActive isOn theme="light" />
    </div>
  );
};
