import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configuration de Vite pour React
// Vite est un outil de build moderne et ultra-rapide
export default defineConfig({
  base: '/Portfolio-react-tailwind-white-image/',
  plugins: [react()], // Active le support de React (JSX, Fast Refresh)
})
