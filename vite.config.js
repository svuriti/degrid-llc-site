import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // If deploying to GitHub Pages under a repo (username.github.io/repo), set base: '/repo/'
  // For custom domain or user/organization site, '/' is fine.
  base: '/'
})
