import type { Meta, StoryObj } from '@storybook/vue3';
import { Story } from './Story';
import BxProgressbar from '../src/components/BxProgressbar.vue';
import {
  defaultProps,
  propsValues,
  type TypesPropsList,
} from '../src/components/BxProgressbar.props';

const meta: Meta<typeof BxProgressbar> = {
  title: 'bx-progressbar',
  component: BxProgressbar,
  args: {
    progress: 17,
    size: defaultProps.size,
    color: defaultProps.color,
    textBefore: defaultProps.textBefore,
    textAfter: defaultProps.textAfter,
    bg: defaultProps.bg,
    column: defaultProps.column,
  },
  argTypes: {
    progress: {
      control: { type: 'number', min: 0, max: 100 },
    },
    size: {
      options: propsValues.sizes,
      control: { type: 'inline-radio' },
    },
    color: {
      options: propsValues.colors,
      control: { type: 'inline-radio' },
    },
    textBefore: {
      control: { type: 'text' },
    },
    textAfter: {
      control: { type: 'text' },
    },
    bg: {
      control: { type: 'boolean' },
    },
    column: {
      control: { type: 'boolean' },
    },
  },
};

type StoryType = StoryObj<typeof meta>;

export default meta;
export const Default: StoryType = Story(BxProgressbar);
export const Colors: StoryType = Story<TypesPropsList>(BxProgressbar, 'color', propsValues.colors);
export const Sizes: StoryType = Story<TypesPropsList>(BxProgressbar, 'size', propsValues.sizes);
