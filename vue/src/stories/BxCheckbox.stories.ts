import type { Meta, StoryObj } from '@storybook/vue3';
import { fn } from '@storybook/test';
import { Story } from './Story';
import BxCheckbox from '../components/BxCheckbox.vue';
import { defaultProps } from '../components/BxCheckbox.props';

const events = {
  'update:modelValue': fn(),
};

const meta: Meta<typeof BxCheckbox> = {
  title: 'forms/bx-checkbox',
  component: BxCheckbox,
  args: {
    default: '',
    ...events,
    modelValue: defaultProps.modelValue,
    value: defaultProps.value,
    disabled: defaultProps.disabled,
  },
  argTypes: {
    default: {
      control: { type: 'text' },
    },
    modelValue: {
      control: { type: 'object' },
    },
    value: {
      control: { type: 'text' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

type StoryType = StoryObj<typeof meta>;

export default meta;
export const Default: StoryType = Story(BxCheckbox);
