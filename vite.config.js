import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: {
      '/api':
      {
        target: 'http://localhost:5173',
        secure: false,
      }, 
      '/ws': {
        target: 'ws://localhost:5173',
        ws: true,
      },
    },
  },
});