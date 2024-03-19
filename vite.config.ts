import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'
import { version } from './package.json'

//const hash = Math.floor(Math.random() * 90000) + 10000;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  build: {
    rollupOptions: {
      output: {
          entryFileNames: `[name].${version}.js`,
          chunkFileNames: `[name].${version}.js`,
          assetFileNames: `[name].${version}.[ext]`
      }
    }
  }
})
