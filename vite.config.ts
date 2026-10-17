import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";

/** Project site: https://mohammedbagowabair.github.io/asset-driven-layouts/ */
export const pagesBase = "/asset-driven-layouts/";

export default defineConfig({
  base: pagesBase,
  server: {
    host: "::",
    port: 8080,
  },
  preview: {
    host: "::",
    port: 8080,
  },
  resolve: {
    tsconfigPaths: true,
    alias: { "@": `${process.cwd()}/src` },
    dedupe: [
      "react",
      "react-dom",
      "react/jsx-runtime",
      "react/jsx-dev-runtime",
      "@tanstack/react-query",
      "@tanstack/query-core",
    ],
  },
  plugins: [
    tailwindcss(),
    tanstackStart({
      importProtection: {
        behavior: "error",
        client: {
          files: ["**/server/**"],
          specifiers: ["server-only"],
        },
      },
      server: { entry: "server" },
      router: {
        basepath: pagesBase.replace(/\/$/, ""),
      },
      prerender: {
        enabled: true,
        crawlLinks: false,
        failOnError: true,
      },
    }),
    viteReact(),
  ],
});
