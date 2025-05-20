import { resolve } from "path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
  },
  resolve: {
    alias: {
      "@components": resolve(__dirname, "./src/components"),
      "@common": resolve(__dirname, "./src/common"),
      "@layouts": "/src/layouts",
      "@pages": resolve(__dirname, "./src/pages"),
      "@store": "/src/store",
    },
  },
});
