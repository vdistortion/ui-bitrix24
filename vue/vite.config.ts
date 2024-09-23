import { defineConfig } from 'vite';
import { extname, relative, resolve } from 'path';
import { fileURLToPath } from 'node:url';
import { glob } from 'glob';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import { libInjectCss } from 'vite-plugin-lib-inject-css';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  base: '',
  publicDir: false,
  plugins: [
    vue(),
    libInjectCss(),
    visualizer({
      filename: 'stats.vue.html',
    }),
    dts({ include: ['src'] }),
  ],
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es'],
    },
    rollupOptions: {
      external: ['vue', 'vue/jsx-runtime'],
      input: Object.fromEntries(
        glob
          .sync('src/**/*.{ts,vue}', {
            ignore: ['src/**/*.d.ts'],
          })
          .map((file) => [
            // 1. The name of the entry point
            // lib/nested/foo.js becomes nested/foo
            relative('src', file.slice(0, file.length - extname(file).length)),
            // 2. The absolute path to the entry file
            // lib/nested/foo.ts becomes /project/lib/nested/foo.ts
            fileURLToPath(new URL(file, import.meta.url)),
          ]),
      ),
      output: {
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: '[name].js',
      },
    },
  },
  server: {
    fs: {
      allow: ['..'],
    },
  },
});
