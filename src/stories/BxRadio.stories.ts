import type { Meta, StoryObj } from '@storybook/vue3';
import { action } from '@storybook/addon-actions';
import BxRadio from '../components/BxRadio.vue';

const defaultProps = {
  modelValue: '',
  value: '',
  disabled: false,
};

const meta = {
  title: 'forms/bx-radio',
  component: BxRadio,
  args: {
    default: 'Two',
    // @ts-ignore
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
} satisfies Meta<typeof BxRadio>;

export default meta;

type StoryType = StoryObj<typeof meta>;

export const Default: StoryType = {
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
    provide: {
      $BX24: null,
    },
    components: { BxRadio },
  }),
};
