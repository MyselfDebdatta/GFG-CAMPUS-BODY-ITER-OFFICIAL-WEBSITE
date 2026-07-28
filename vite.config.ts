import { defineConfig } from "vite";
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    TanStackRouterVite({ target: 'react', autoCodeSplitting: true }),
    react(),
    tailwindcss()
  ],
  resolve: {
    alias: {
      "@": "/src",
    },
    tsconfigPaths: true
  },
  server: {
    port: 5173,
    strictPort: true,
  }
});
