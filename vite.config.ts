import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// NOTE: vite-plugin-prerender (Puppeteer) is intentionally NOT imported here.
// esbuild's "externalize-deps" plugin scans ALL string literals in vite.config.ts
// at parse time — even inside conditional branches — and fails when the sub-path
// "dist/renderers/puppeteer" is missing from the package's exports map.
//
// Pre-rendering is handled in vite.config.build.ts which is only invoked by
// `npm run build`. This file is used only for `npm run dev`.

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: [
      "react",
      "react-dom",
      "react/jsx-runtime",
      "react/jsx-dev-runtime",
      "@tanstack/react-query",
      "@tanstack/query-core",
    ],
  },
});
