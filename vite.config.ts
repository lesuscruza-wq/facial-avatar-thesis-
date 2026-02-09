import { defineConfig } from 'vite'

export default defineConfig({
  // GitHub Pages base path (change if deployed to a user/org site: '/')
  base: '/facial-avatar-thesis/',
  
  server: {
    host: true,
    port: 5173,
    allowedHosts: 'all'
  },
  
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['three', '@mediapipe/face_mesh', '@mediapipe/camera_utils'],
          peerjs: ['peerjs', 'simple-peer']
        }
      }
    }
  }
})

