import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  output: 'server', // Mengaktifkan mode dinamis (SSR) untuk database
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
});
