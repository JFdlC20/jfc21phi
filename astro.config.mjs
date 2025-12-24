import { defineConfig } from 'astro/config';
// ... tus otros imports

export default defineConfig({
  // 1. Tu dominio base de GitHub
  site: 'https://jfdlc20.github.io',

  // 2. IMPORTANTE: El nombre de tu repositorio con barra delante
  base: '/jfc21phi',

  // ... el resto de tu configuración
});