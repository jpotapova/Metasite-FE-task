import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";

const COLOR_PRIMARY = "#1de9b6";
const COLOR_CONTRAST = "#ffffff";

const themeOptions = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: COLOR_PRIMARY,
    },
    contactify: {
      backgroundDark: "#0D47A1",
      backgroundMedium: "#1565C0",
      backgroundLight: "#2196F3",
      backgroundLightest: "#F9FAFB",
      contrast: COLOR_CONTRAST,
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: COLOR_CONTRAST,
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: COLOR_CONTRAST,
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: COLOR_PRIMARY,
          },
          "& .MuiOutlinedInput-input": {
            color: COLOR_CONTRAST,
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: COLOR_CONTRAST,
          "&.Mui-focused": {
            color: COLOR_PRIMARY,
          },
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          color: COLOR_CONTRAST,
        },
      },
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
