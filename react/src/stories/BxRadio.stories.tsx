import { Meta } from '@storybook/react';
import { fn } from '@storybook/test';
import { Story } from './Story.tsx';
import { BxRadio, defaultProps } from '../../lib/components/BxRadio';

const meta: Meta<typeof BxRadio> = {
  title: 'Form/BxRadio',
  args: {
    children: '',
    onChange: fn(),
    value: defaultProps.value,
    name: defaultProps.name,
    checked: defaultProps.checked,
    disabled: defaultProps.disabled,
  },
  argTypes: {
    children: {
      control: { type: 'text' },
    },
    value: {
      control: { type: 'text' },
    },
    name: {
      control: { type: 'text' },
    },
    checked: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
export const Default = Story(BxRadio).bind({});
