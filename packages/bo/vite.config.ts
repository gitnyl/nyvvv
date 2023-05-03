import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { splitVendorChunkPlugin } from "vite";

export default defineConfig({
  // NOTE: 모노레포의 경우 사전 esbuild 번들링 시 node_modules 에 없으면 번들로 묶지 않기떄문에 commonjs -> esm 형태 빌드를 위해 추가 설정이 필요
  optimizeDeps: {
    include: ["common"],
  },
  build: {
    commonjsOptions: {
      include: [/common/, /node_modules/],
    },
  },
  plugins: [vue(), splitVendorChunkPlugin()],
  define: {
    __VUE_I18N_FULL_INSTALL__: true,
    __VUE_I18N_LEGACY_API__: false,
    __INTLIFY_PROD_DEVTOOLS__: false,
    "process.env": {},
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});