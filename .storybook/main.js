/** @type { import('@storybook/vue3-vite').StorybookConfig } */
export default {
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-essentials',
  ],
  framework: {
    name: '@storybook/vue3-vite',
  },
};
