import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig(({ command }) => ({
  // '/portfolio/' only for the production build (GitHub Pages project site);
  // '/' during local dev so http://localhost:5173/ works.
  base: command === 'build' ? '/portfolio/' : '/',
  plugins: [vue()],
}))
