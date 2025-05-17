import VisibilityIcon from "@mui/icons-material/Visibility";

interface IndicatorActiveProps {
  isOn: boolean;
  size?: "small" | "medium";
}

export const IndicatorActive = ({ isOn, size }: IndicatorActiveProps) => {
  if (!isOn) {
    return null;
  }

  return <VisibilityIcon fontSize={size} />;
};
