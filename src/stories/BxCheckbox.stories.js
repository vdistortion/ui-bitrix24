import { action } from '@storybook/addon-actions';
import BxCheckbox from '../components/BxCheckbox.vue';

const defaultProps = {
  modelValue: [],
  value: '',
  disabled: false,
};
export default {
  title: 'forms/bx-checkbox',
  component: BxCheckbox,
  args: {
    default: 'Two',
    'update:modelValue': action('update:modelValue'),
    modelValue: defaultProps.modelValue,
    value: 'Two',
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
        <bx-checkbox v-bind="args" v-on="args" v-model="args.modelValue" value="One">One</bx-checkbox>
      </div>
      <div>
        <bx-checkbox v-bind="args" v-on="args" v-model="args.modelValue">{{ args.default }}</bx-checkbox>
      </div>
      <pre>{{ { modelValue: args.modelValue } }}</pre>
    `,
    data: () => ({ args }),
    components: { BxCheckbox },
  }),
};
