import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx()
  ],
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData (source, fp) {
          // All scss files ending with imports.scss
          // will not re-import additionalData
          if (fp.endsWith('variables.scss')) return source;
          if (fp.endsWith('element/index.scss')) return source;
          
          // Use additionalData from legacy nuxt scss options
          return `@import "@/styles/variables.scss"; ${source}`
        }
      },
    }
  }
})
