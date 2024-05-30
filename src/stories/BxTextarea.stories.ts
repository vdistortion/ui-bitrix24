import type { Meta, StoryObj } from '@storybook/vue3';
import { action } from '@storybook/addon-actions';
import BxTextarea, { propsValues, type PropResizes } from '../components/BxTextarea.vue';

type DefaultProps = {
  modelValue: string;
  placeholder: string;
  resize: PropResizes;
  disabled: boolean;
};

const defaultProps: DefaultProps = {
  modelValue: '',
  placeholder: '',
  resize: '',
  disabled: false,
};

const meta = {
  title: 'forms/bx-textarea',
  component: BxTextarea,
  args: {
    'update:modelValue': action('update:modelValue'),
    modelValue: defaultProps.modelValue,
    placeholder: defaultProps.placeholder,
    resize: defaultProps.resize,
    disabled: defaultProps.disabled,
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
    resize: {
      options: propsValues.resizes,
      defaultValue: defaultProps.resize,
      control: { type: 'inline-radio' },
    },
    disabled: {
      defaultValue: defaultProps.disabled,
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof BxTextarea>;

export default meta;

type StoryType = StoryObj<typeof meta>;

export const Default: StoryType = {
  render: (args) => ({
    template: '<bx-textarea v-bind="args" v-on="args"></bx-textarea>',
    data: () => ({ args }),
    provide: {
      $BX24: null,
    },
    components: { BxTextarea },
  }),
};

const Story = (propName: string, propList: any[]) => ({
  render: (args: any) => ({
    template: `
      <div v-for="item in propList" :key="item" class="component">
        <bx-textarea v-bind="args" v-on="args" :[propName]="item">{{ args.default }}</bx-textarea>
      </div>
    `,
    data: () => ({ args, propName, propList }),
    provide: {
      $BX24: null,
    },
    components: { BxTextarea },
  }),
  argTypes: {
    [propName]: {
      table: {
        disable: true,
      },
    },
  },
});

export const Resizes: StoryType = Story('resize', propsValues.resizes);
