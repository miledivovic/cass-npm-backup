import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import commonjs from '@rollup/plugin-commonjs';
import nodeGlobals from 'rollup-plugin-node-globals';
import polyfillNode from 'rollup-plugin-polyfill-node';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    commonjs({
      include: [/cassproject/, /node_modules/]
    }),
    nodeGlobals(),
    polyfillNode()
],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  optimizeDeps: {
    include: ["cassproject"]
  },
  build: {
    commonjsOptions: {
      include: [/cassproject/, /node_modules/]
    }
  }
})
