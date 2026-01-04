import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  build: {
    lib: {
      entry: 'src/main.tsx',
      name: 'MyReactWidget',
      fileName: () => 'my-react-widget.js',
      formats: ['es'],
    },
    rollupOptions: {
      external: [],
    },
  },
})
