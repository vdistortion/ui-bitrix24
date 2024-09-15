import { Meta } from '@storybook/react';
import { fn } from '@storybook/test';
import { Story } from './Story';
import {
  BxAlert,
  defaultProps,
  propsValues,
  type TypesPropsList,
} from '../../lib/components/BxAlert';

const meta: Meta<typeof BxAlert> = {
  title: 'BxAlert',
  args: {
    children: '',
    onClose: fn(),
    title: defaultProps.title,
    size: defaultProps.size,
    color: defaultProps.color,
    icon: defaultProps.icon,
    center: defaultProps.center,
    inline: defaultProps.inline,
    closing: defaultProps.closing,
  },
  argTypes: {
    children: {
      control: { type: 'text' },
    },
    title: {
      control: { type: 'text' },
    },
    size: {
      options: propsValues.sizes,
      control: { type: 'inline-radio' },
    },
    color: {
      options: propsValues.colors,
      control: { type: 'inline-radio' },
    },
    icon: {
      options: propsValues.icons,
      control: { type: 'inline-radio' },
    },
    center: {
      control: { type: 'boolean' },
    },
    inline: {
      control: { type: 'boolean' },
    },
    closing: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
export const Default = Story(BxAlert).bind({});
export const Sizes = Story<TypesPropsList>(BxAlert, 'size', propsValues.sizes);
export const Colors = Story<TypesPropsList>(BxAlert, 'color', propsValues.colors);
export const Icons = Story<TypesPropsList>(BxAlert, 'icon', propsValues.icons);
