import { defineConfig } from 'vite'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import './src/styles/global.scss';`,
      },
    },
  },
  resolve: {
    alias: {
      '@modules': path.resolve(__dirname, './node_modules'),
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
      '@utils': path.resolve(__dirname, './src/utils')
    },
  },
  "build": {
    "target": "ES2022"
  }
})