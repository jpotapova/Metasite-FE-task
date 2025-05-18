import VisibilityIcon from "@mui/icons-material/Visibility";

interface IndicatorActiveProps {
  isOn: boolean;
  size?: "small" | "medium";
  theme?: "dark" | "light";
}

export const IndicatorActive = ({
  isOn,
  size,
  theme = "light",
}: IndicatorActiveProps) => {
  if (!isOn) {
    return null;
  }

  return (
    <VisibilityIcon
      fontSize={size}
      opacity={theme === "dark" ? 0.54 : undefined}
    />
  );
};
