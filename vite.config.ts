import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@common": "/src/common",
      "@components": "/src/components",
      "@layouts": "/src/layouts",
      "@pages": "/src/pages",
    },
  },
});
