import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    proxy: {
      '/api': {
        target: 'https://ab-green.onrender.com/',
        changeOrigin: true,
        secure: false,
        logLevel: 'debug',
      },
    },
  },
});
