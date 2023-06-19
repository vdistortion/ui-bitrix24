import { action } from '@storybook/addon-actions';
import BxSelect from '../components/BxSelect.vue';
import countries from '../utils/countries';

const defaultProps = {
  modelValue: '',
  placeholder: '',
  options: [],
  label: 'name',
  multiple: false,
};
export default {
  title: 'forms/bx-select',
  component: BxSelect,
  parameters: {
    docs: {
      description: {
        component: 'Component based on <a href="https://vue-select.org" target="_blank">vue-select</a>',
      },
    },
  },
  tags: ['autodocs'],
  args: {
    'update:modelValue': action('update:modelValue'),
    modelValue: defaultProps.modelValue,
    placeholder: defaultProps.placeholder,
    options: defaultProps.options,
    label: defaultProps.label,
    multiple: defaultProps.multiple,
  },
  argTypes: {
    modelValue: {
      defaultValue: defaultProps.modelValue,
      control: { type: 'text' },
    },
    placeholder: {
      defaultValue: defaultProps.placeholder,
      control: { type: 'text' },
    },
    options: {
      mapping: countries,
      options: countries.map((c, index) => index),
      control: {
        type: 'multi-select',
        labels: countries.map((country) => `{ code: ${country.code}, name: ${country.name} }`),
      },
    },
    label: {
      options: ['code', 'name'],
      defaultValue: defaultProps.displayField,
      control: { type: 'inline-radio' },
    },
    multiple: {
      defaultValue: defaultProps.multiple,
      control: { type: 'boolean' },
    },
  },
};

export const Default = {
  render: (args) => ({
    template: '<bx-select v-bind="args" v-on="args" v-model="args.modelValue"></bx-select>',
    data: () => ({ args }),
    components: { BxSelect },
  }),
};
