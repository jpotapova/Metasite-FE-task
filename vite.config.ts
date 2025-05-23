import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@assets": "/src/assets",
      "@common": resolve(__dirname, "./src/common"),
      "@components": resolve(__dirname, "./src/components"),
      "@layouts": "/src/layouts",
      "@pages": resolve(__dirname, "./src/pages"),
      "@store": "/src/store",
    },
  },
});
