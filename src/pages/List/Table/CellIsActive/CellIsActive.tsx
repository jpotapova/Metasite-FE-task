import { IndicatorActive } from "@components/IndicatorActive";

interface CellIsActiveProps {
  value?: boolean;
}

export const CellIsActive = ({ value }: CellIsActiveProps) => {
  return (
    <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
      <IndicatorActive isOn={!!value} theme="dark" />
    </div>
  );
};
