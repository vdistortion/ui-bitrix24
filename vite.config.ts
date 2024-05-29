import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  base: '',
  publicDir: false,
  plugins: [vue()],
  build: {
    lib: {
      entry: './src/lib.ts',
      name: 'vue-bitrix24',
      fileName: 'index',
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  server: {
    fs: {
      allow: ['..'],
    },
  },
});
