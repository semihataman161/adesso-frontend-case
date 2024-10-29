import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";
import path from "path";
import { fileURLToPath } from "url";
import vuetify from "vite-plugin-vuetify";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vuetify({ autoImport: true, styles: "sass" })],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "vuetify.config.js",
    server: {
      deps: {
        inline: ["vuetify"],
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
        silenceDeprecations: ["legacy-js-api"],
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
