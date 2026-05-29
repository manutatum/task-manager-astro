// @ts-check
import { defineConfig } from 'astro/config';

import clerk from '@clerk/astro';

import tailwindcss from '@tailwindcss/vite';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [clerk()],

  adapter: node({
    mode: 'standalone',
  }),

  output: 'server'
});