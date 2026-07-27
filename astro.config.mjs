// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  compressHTML: true,
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
  integrations: [react(), tailwind({ applyBaseStyles: false })],
  vite: {
    build: {
      cssMinify: true,
    },
    ssr: {
      noExternal: ['framer-motion'],
    },
  },
});
