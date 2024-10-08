import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'ui-bitrix24',
  description: 'Component libraries in Bitrix24 style',
  base: '/ui-bitrix24/',
  head: [['link', { rel: 'icon', href: '/ui-bitrix24/favicon.ico' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/vue-bitrix24' },
      { text: 'bitrix24-library', link: 'https://www.npmjs.com/package/bitrix24-library' },
      { text: 'bitrix24-create-app', link: 'https://vdistortion.github.io/bitrix24-create-app/' },
    ],

    sidebar: [
      {
        text: 'Docs',
        items: [
          { text: 'vue-bitrix24', link: '/vue-bitrix24' },
          { text: 'react-bitrix24', link: '/react-bitrix24' },
        ],
      },
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/vdistortion/ui-bitrix24' }],
  },
});
