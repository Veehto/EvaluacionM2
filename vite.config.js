import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

// Load environment variables from .env file
dotenv.config();

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': process.env,
  },
  server: {
    open: false,
  },
  preview: {
    open: false,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTests.js',
  },
})
