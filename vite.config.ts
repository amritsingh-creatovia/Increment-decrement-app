import React from '@vitejs/plugin-react' // Change 'react' to 'React'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [React(), tailwindcss()], // Must match the imported name
  server: {
    watch: {
      usePolling: true,
    },
  },
})
