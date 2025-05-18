import { Palette, PaletteOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    contactify: {
      backgroundDark: string;
      backgroundMedium: string;
      backgroundLight: string;
      backgroundLightest: string;
    };
  }
  interface PaletteOptions {
    contactify?: {
      backgroundDark?: string;
      backgroundMedium?: string;
      backgroundLight?: string;
      backgroundLightest?: string;
    };
  }
}

declare module "@mui/material/styles/createPalette" {
  interface Palette {
    contactify: {
      backgroundDark: string;
      backgroundMedium: string;
      backgroundLight: string;
      backgroundLightest: string;
    };
  }
  interface PaletteOptions {
    contactify?: {
      backgroundDark?: string;
      backgroundMedium?: string;
      backgroundLight?: string;
      backgroundLightest?: string;
    };
  }
}
