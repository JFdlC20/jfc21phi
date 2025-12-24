// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [sitemap()],

  site: 'https://jfdlc20.github.io',
  base: '/jfc21phi',
});