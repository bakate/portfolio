// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

import mdx from "@astrojs/mdx";

import tailwindcss from "@tailwindcss/vite";
import { remarkReadingTime } from "./src/lib/remark-reading-time.mjs";
import rehypeMermaid from 'rehype-mermaid';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    mdx({
      remarkPlugins: [remarkReadingTime],
      rehypePlugins: [
        [rehypeMermaid, { strategy: 'inline-svg' }]
      ],
      syntaxHighlight: {
        type: "shiki",
        excludeLangs: ["mermaid"],
      },
    }),
  ],

  i18n: {
    locales: ["fr", "en"],
    defaultLocale: "fr",
    routing: {
      prefixDefaultLocale: false,
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
