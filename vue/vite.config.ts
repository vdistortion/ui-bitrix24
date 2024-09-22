import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  base: '',
  publicDir: false,
  plugins: [
    vue(),
    visualizer({
      filename: 'stats.vue.html',
    }),
  ],
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
