import { Button as MuiButton } from "@mui/material";

interface ButtonProps {
  children: string;
  type?: "button" | "submit";
}

export const Button = ({ children, type = "submit" }: ButtonProps) => {
  return (
    <MuiButton type={type} variant="contained" color="primary">
      {children}
    </MuiButton>
  );
};
