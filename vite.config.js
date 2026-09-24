import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  // Project site served from https://<user>.github.io/portfolio/
  base: '/portfolio/',
  plugins: [vue()],
})
