// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // 1. Pon aquí la dirección base de tu usuario
  site: 'https://jfdlc20.github.io',

  // 2. IMPORTANTE: El nombre EXACTO de tu repositorio (con barra al principio)
  base: '/jfc21phi',

  // ... el resto de tu configuración (integrations, etc.) se queda igual
});