import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        volunteers: './volunteers/index.html',
        speakers: './speakers/index.html',
        logistics: './logistics/index.html',
        codeOfConduct: './code-of-conduct/index.html',
        schedule: './schedule/index.html',
        404: './404.html'
      }
    }
  },
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
