import { action } from '@storybook/addon-actions';
import BxRadio from '../components/BxRadio.vue';

const defaultProps = {
  modelValue: '',
  value: '',
  width: '320px',
  disabled: false,
};
export default {
  title: 'forms/bx-radio',
  component: BxRadio,
  tags: ['autodocs'],
  args: {
    default: 'Two',
    'update:modelValue': action('update:modelValue'),
    modelValue: defaultProps.modelValue,
    value: 'Two',
    width: defaultProps.width,
    disabled: defaultProps.disabled,
  },
  argTypes: {
    default: {
      control: { type: 'text' },
    },
    modelValue: {
      defaultValue: defaultProps.modelValue,
      control: { type: 'object' },
    },
    value: {
      defaultValue: defaultProps.value,
      control: { type: 'text' },
    },
    width: {
      defaultValue: defaultProps.width,
      control: { type: 'text' },
    },
    disabled: {
      defaultValue: defaultProps.disabled,
      control: { type: 'boolean' },
    },
  },
};

export const Default = {
  render: (args) => ({
    template: `
      <div>
        <bx-radio v-bind="args" v-on="args" v-model="args.modelValue" value="One">One</bx-radio>
      </div>
      <div>
        <bx-radio v-bind="args" v-on="args" v-model="args.modelValue">{{ args.default }}</bx-radio>
      </div>
      <pre>{{ { modelValue: args.modelValue } }}</pre>
    `,
    data: () => ({ args }),
    components: { BxRadio },
  }),
};
