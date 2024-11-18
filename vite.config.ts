import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),  
    svgr({
      svgrOptions: {
        // svgr options
      },
    })],
  base: './',
  build: {
    sourcemap: true,
    assetsDir:'./assets'
  },
  css: {
    devSourcemap:true,
    preprocessorOptions: {
      scss: {
        silenceDeprecations: ['legacy-js-api'] // or "modern"
      }
    }
  },
  
})
 

