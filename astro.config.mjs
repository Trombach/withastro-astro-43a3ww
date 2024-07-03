import { defineConfig, envField } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  experimental: {
    env: {
      schema: {
        API_URL: envField.string({
          context: 'client',
          access: 'public',
        }),
        DB_PASS: envField.string({
          context: 'server',
          access: 'secret',
        }),
      },
    },
  },
});
