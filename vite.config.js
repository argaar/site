import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { copyFileSync, existsSync, mkdirSync } from "fs";
import { dirname, resolve } from "path";

// Maps a file in src/assets to its published path under public/.
const ASSET_MAP = {
  "favicon.ico": "favicon.ico",
  "favicon-96x96.png": "favicon-96x96.png",
  "apple-touch-icon.png": "apple-touch-icon.png",
  "site.webmanifest": "site.webmanifest",
  "og-image.png": "og-image.png",
  "web-app-manifest-192x192.png": "web-app-manifest-192x192.png",
  "web-app-manifest-512x512.png": "web-app-manifest-512x512.png",
  "translation_en.json": "locales/en/translation.json",
  "translation_it.json": "locales/it/translation.json",
};

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: "copy-assets",
      buildStart() {
        for (const [source, target] of Object.entries(ASSET_MAP)) {
          // eslint-disable-next-line no-undef
          const to = resolve(__dirname, "public", target);
          // eslint-disable-next-line no-undef
          const from = resolve(__dirname, "src/assets", source);

          if (!existsSync(from)) {
            throw new Error(
              `copy-assets: missing src/assets/${source}. Add the file or remove it from ASSET_MAP.`,
            );
          }

          mkdirSync(dirname(to), { recursive: true });
          copyFileSync(from, to);
        }
      },
    },
  ],
});
