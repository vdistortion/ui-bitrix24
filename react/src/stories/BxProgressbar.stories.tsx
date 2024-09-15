import { Meta } from '@storybook/react';
import { Story } from './Story';
import {
  BxProgressbar,
  defaultProps,
  propsValues,
  type TypesPropsList,
} from '../../lib/components/BxProgressbar';

const meta: Meta<typeof BxProgressbar> = {
  title: 'BxProgressbar',
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

export default meta;
export const Default = Story(BxProgressbar).bind({});
export const Sizes = Story<TypesPropsList>(BxProgressbar, 'size', propsValues.sizes);
export const Colors = Story<TypesPropsList>(BxProgressbar, 'color', propsValues.colors);
