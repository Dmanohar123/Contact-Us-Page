// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Contact-Us-Page/', // ✅ important for GitHub Pages
  plugins: [react()],
})
