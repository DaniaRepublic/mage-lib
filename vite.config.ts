import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'

export default defineConfig({
  build: {
    lib: {
      entry: 'lib/index.ts',  // your entry point
      formats: ['es'],
      fileName: (format) => `index.${format}.js`
    },
    rollupOptions: {
      external: ['solid-js'], // mark SolidJS as external dependency
      output: {
        preserveModules: true // keeps the module structure intact
      }
    }
  },
  plugins: [solid()]
})