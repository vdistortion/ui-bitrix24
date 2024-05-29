import type { Meta, StoryObj } from '@storybook/vue3';
import { action } from '@storybook/addon-actions';
import BxInputFile, { props, type PropTypes } from '../components/BxInputFile.vue';

type DefaultProps = {
  placeholder: string;
  type: PropTypes;
  multiple: boolean;
  disabled: boolean;
};

const defaultProps: DefaultProps = {
  placeholder: '',
  type: 'drop',
  multiple: false,
  disabled: false,
};

const meta = {
  title: 'forms/bx-input-file',
  component: BxInputFile,
  args: {
    change: action('change'),
    delete: action('delete'),
    placeholder: defaultProps.placeholder,
    type: defaultProps.type,
    multiple: defaultProps.multiple,
    disabled: defaultProps.disabled,
  },
  argTypes: {
    placeholder: {
      control: { type: 'text' },
    },
    type: {
      options: props.types,
      defaultValue: defaultProps.type,
      control: { type: 'inline-radio' },
    },
    multiple: {
      defaultValue: defaultProps.multiple,
      control: { type: 'boolean' },
    },
    disabled: {
      defaultValue: defaultProps.disabled,
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof BxInputFile>;

export default meta;

type StoryType = StoryObj<typeof meta>;

export const Default: StoryType = {
  render: (args) => ({
    template: '<bx-input-file v-bind="args" v-on="args">{{ args.default }}</bx-input-file>',
    data: () => ({ args }),
    provide: {
      $BX24: null,
    },
    components: { BxInputFile },
  }),
};

const Story = (propName: string, propList: any[]) => ({
  render: (args: any) => ({
    template: `
      <div v-for="item in propList" :key="item" class="component">
        <bx-input-file v-bind="args" v-on="args" :[propName]="item">{{ args.default }}</bx-input-file>
      </div>
    `,
    data: () => ({ args, propName, propList }),
    provide: {
      $BX24: null,
    },
    components: { BxInputFile },
  }),
  argTypes: {
    [propName]: {
      table: {
        disable: true,
      },
    },
  },
});

export const Types: StoryType = Story('type', props.types);
