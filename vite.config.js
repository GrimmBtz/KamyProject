import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/KamyProject/',
  server: {
    host: '0.0.0.0',
    allowedHosts: ['.manus.computer', 'localhost'],
  },
})
