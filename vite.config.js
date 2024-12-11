import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 5174,
    proxy: {
      '/api':
      {
        target: 'http://localhost:4000',
        secure: false,
      }, 
      '/ws': {
        target: 'ws://localhost:4000',
        ws: true,
      },
    },
  },
});