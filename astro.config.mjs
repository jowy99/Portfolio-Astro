import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  vite: {
    ssr: {
      noExternal: [
        'express',
        'body-parser',
        'cors',
        'nodemailer',
      ],
    },
  },
});
