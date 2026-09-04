import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind'; // Si tienes tailwind o alguna otra integración, déjala como está

// https://astro.build/config
export default defineConfig({
  site: 'https://fernandoJs251.github.io',
  base: '/astro-antigravity-portfolio',
  integrations: [tailwind()], // Mantén aquí las integraciones que ya tenías
});