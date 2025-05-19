import { useTheme } from "@common/Theme";
import React from "react";

interface RowProps {
  label: string;
  value: React.ReactNode;
}

export const Row = ({ label, value }: RowProps) => {
  const theme = useTheme();
  return (
    <div
      style={{
        display: "flex",
        gap: theme.spacing(4),
        color: theme.palette.contactify.secondary,
        fontSize: 12,
      }}
    >
      <div
        style={{ textAlign: "right", width: theme.spacing(6) }}
      >{`${label}:`}</div>
      <div>{value}</div>
    </div>
  );
};
