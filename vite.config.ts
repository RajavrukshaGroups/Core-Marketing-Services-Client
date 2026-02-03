import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      // Note: Manual process.env.API_KEY definition removed to comply with GenAI guidelines.
      // The environment handles API key injection automatically.
      resolve: {
        alias: {
          // Fix: Use path.resolve('.') to define '@' alias as __dirname is not available in ES modules.
          '@': path.resolve('.'),
        }
      }
    };
});
