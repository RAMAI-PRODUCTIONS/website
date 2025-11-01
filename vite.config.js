import { defineConfig } from 'vite';

export default defineConfig({
  base: '/website/',
  build: {
    target: 'esnext',
    minify: 'esbuild',
    sourcemap: false,
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: undefined,
        format: 'es'
      },
    },
  },
  server: {
    open: true,
  },
  optimizeDeps: {
    include: ['three']
  }
});

