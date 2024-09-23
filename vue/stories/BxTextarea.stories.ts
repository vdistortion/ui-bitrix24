import type { Meta, StoryObj } from '@storybook/vue3';
import { fn } from '@storybook/test';
import { Story } from './Story';
import BxTextarea from '../src/components/BxTextarea.vue';
import { propsValues, defaultProps } from '../src/components/BxTextarea.props';

const events = {
  'update:modelValue': fn(),
};

const meta: Meta<typeof BxTextarea> = {
  title: 'forms/bx-textarea',
  component: BxTextarea,
  args: {
    ...events,
    modelValue: defaultProps.value,
    placeholder: defaultProps.placeholder,
    resize: defaultProps.resize,
    disabled: defaultProps.disabled,
  },
  argTypes: {
    modelValue: {
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

type StoryType = StoryObj<typeof meta>;

export default meta;
export const Default: StoryType = Story(BxTextarea);
