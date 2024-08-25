import react from "@astrojs/react";
import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    UnoCSS({
      injectReset: true,
    }),
    mdx(),
  ],
  server: {
    host: true,
  },
});
