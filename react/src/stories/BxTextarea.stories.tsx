import { Meta } from '@storybook/react';
import { fn } from '@storybook/test';
import { Story } from './Story';
import { BxTextarea, defaultProps, propsValues } from '../../lib/components/BxTextarea';

const meta: Meta<typeof BxTextarea> = {
  title: 'Form/BxTextarea',
  args: {
    onInput: fn(),
    value: defaultProps.value,
    placeholder: defaultProps.placeholder,
    resize: defaultProps.resize,
    disabled: defaultProps.disabled,
  },
  argTypes: {
    value: {
      control: { type: 'text' },
    },
    placeholder: {
      control: { type: 'text' },
    },
    resize: {
      options: propsValues.resizes,
      control: { type: 'inline-radio' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
export const Default = Story(BxTextarea).bind({});
