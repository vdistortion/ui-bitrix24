/** @type { import('@storybook/vue3').Preview } */
import './stories.css';
import { loadStyles } from '../src/utils/loadStyles.js';

loadStyles();
export default {
  parameters: {
    actions: {
      argTypesRegex: '^on[A-Z].*',
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};
