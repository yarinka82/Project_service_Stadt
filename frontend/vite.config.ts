import { defineConfig } from 'vite';
import react, { reactCompilerPreset } from '@vitejs/plugin-react';
import babel from '@rolldown/plugin-babel';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), babel({ presets: [reactCompilerPreset()] })],

  server: {
    proxy: {
      '/aglomerations': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      },

      '/categories': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      },

      '/companies': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        // в swagger.json указан порт 3000
      },
    },
  },
});
