import { action } from '@storybook/addon-actions';
import BxInputFile, { props } from '../components/BxInputFile.vue';

const defaultProps = {
  placeholder: '',
  type: 'drop',
  multiple: false,
  disabled: false,
};
export default {
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
};

export const Default = {
  render: (args) => ({
    template: '<bx-input-file v-bind="args" v-on="args">{{ args.default }}</bx-input-file>',
    data: () => ({ args }),
    components: { BxInputFile },
  }),
};

const Story = (propName, propList) => ({
  render: (args) => ({
    template: `
      <div v-for="item in propList" :key="item" class="component">
        <bx-input-file v-bind="args" v-on="args" :[propName]="item">{{ args.default }}</bx-input-file>
      </div>
    `,
    data: () => ({ args, propName, propList }),
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

export const Types = Story('type', props.types);
