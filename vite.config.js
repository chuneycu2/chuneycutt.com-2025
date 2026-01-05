import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
      react(),
  ],
  server: {
    host: 'chuneycutt-react.test',
  },
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: ['import', 'slash-div', 'global-builtin'],
        quietDeps: false,
      },
      sass: {
        silenceDeprecations: ['import', 'slash-div', 'global-builtin'],
        quietDeps: false,
      },
    },
  },
})
