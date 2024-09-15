import type { Meta, StoryObj } from '@storybook/vue3';
import { action } from '@storybook/addon-actions';
import { Story } from './Story';
import BxRadio from '../components/BxRadio.vue';
import { defaultProps } from '../components/BxRadio.props';

const events = {
  'update:modelValue': action('update:modelValue'),
};

const meta: Meta<typeof BxRadio> = {
  title: 'forms/bx-radio',
  component: BxRadio,
  args: {
    default: '',
    ...events,
    modelValue: defaultProps.value,
    value: defaultProps.value,
    disabled: defaultProps.disabled,
  },
  argTypes: {
    default: {
      control: { type: 'text' },
    },
    modelValue: {
      control: { type: 'text' },
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
export const Default: StoryType = Story(BxRadio);
