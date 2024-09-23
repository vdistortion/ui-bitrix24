import type { Preview } from '@storybook/react';
import { loadStyles } from '../lib';
import '@/storybook/stories.css';

loadStyles();

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
