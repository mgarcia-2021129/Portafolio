// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

const siteUrl = process.env.SITE_URL ?? 'https://portafolio-roan-pi-79.vercel.app';

export default defineConfig({
  site: siteUrl,
  redirects: {
    '/proyectos': '/projects',
    '/proyectos/[slug]': '/projects/[slug]',
  },
  compressHTML: true,
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
  integrations: [tailwind({ applyBaseStyles: false })],
  vite: {
    build: {
      cssMinify: true,
    },
  },
});
