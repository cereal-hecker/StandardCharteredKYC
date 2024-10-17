import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import "dotenv/config"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { port: process.env.PORT, host: "0.0.0.0", strictPort:true },
})
