import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";

const themeOptions = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1de9b6",
    },
    contactify: {
      backgroundDark: "#0D47A1",
      backgroundMedium: "#1565C0",
      backgroundLight: "#2196F3",
      backgroundLightest: "#F9FAFB",
    },
  },
});

interface ThemeProps {
  children: React.ReactNode;
}

export const Theme = ({ children }: ThemeProps) => {
  return (
    <ThemeProvider theme={themeOptions}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export { useTheme };
