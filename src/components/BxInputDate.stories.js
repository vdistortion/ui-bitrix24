import { action } from '@storybook/addon-actions';
import BxInputDate, { props } from './BxInputDate.vue';

const defaultProps = {
  modelValue: '',
  after: 'after',
  width: '100%',
};
export default {
  title: 'bx-input-date',
  component: BxInputDate,
  parameters: {
    docs: {
      description: {
        component: 'Component based on <a href="https://vue3datepicker.com" target="_blank">@vuepic/vue-datepicker</a>',
      },
    },
  },
  tags: ['autodocs'],
  args: {
    'update:modelValue': action('update:modelValue'),
    modelValue: '04.09.1989',
    after: defaultProps.after,
    width: defaultProps.width,
  },
  argTypes: {
    modelValue: {
      defaultValue: defaultProps.modelValue,
      control: { type: 'text' },
    },
    after: {
      options: props.after,
      defaultValue: defaultProps.after,
      control: { type: 'inline-radio' },
    },
    width: {
      defaultValue: defaultProps.width,
      control: { type: 'text' },
    },
  },
};

export const Default = {
  render: (args) => ({
    template: '<bx-input-date v-bind="args" v-on="args" v-model="args.modelValue"></bx-input-date>',
    data: () => ({ args }),
    components: { BxInputDate },
  }),
};
