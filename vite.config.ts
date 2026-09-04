import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Cấu hình tối giản để tránh lỗi MIME type trên GitHub Pages
export default defineConfig({
  base: '/',
  plugins: [react()],
})