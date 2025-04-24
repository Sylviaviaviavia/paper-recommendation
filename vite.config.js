import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/paper-recommendation/', 
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://es1toakg74.execute-api.us-east-2.amazonaws.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
})

