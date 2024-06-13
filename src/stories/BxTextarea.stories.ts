import type { Meta, StoryObj } from '@storybook/vue3';
import { action } from '@storybook/addon-actions';
import { Story } from './Story';
import BxTextarea from '../components/BxTextarea.vue';
import { propsValues, defaultProps } from '../components/BxTextarea.props';

const events = {
  'update:modelValue': action('update:modelValue'),
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
