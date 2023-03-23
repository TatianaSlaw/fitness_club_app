import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    // ...
    mimeTypes: {
      'text/javascript': ['js'],
      'text/css': ['css'],
      'text/plain': ['graphql']
    }
  }
})
