import { action } from '@storybook/addon-actions';
import BxTextarea, { props } from '../components/BxTextarea.vue';

const defaultProps = {
  modelValue: '',
  placeholder: '',
  resize: '',
  disabled: false,
};

export default {
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
      options: props.resizes,
      defaultValue: defaultProps.resize,
      control: { type: 'inline-radio' },
    },
    disabled: {
      defaultValue: defaultProps.disabled,
      control: { type: 'boolean' },
    },
  },
};

export const Default = {
  render: (args) => ({
    template: '<bx-textarea v-bind="args" v-on="args"></bx-textarea>',
    data: () => ({ args }),
    components: { BxTextarea },
  }),
};

const Story = (propName, propList) => ({
  render: (args) => ({
    template: `
      <div v-for="item in propList" :key="item" class="component">
        <bx-textarea v-bind="args" v-on="args" :[propName]="item">{{ args.default }}</bx-textarea>
      </div>
    `,
    data: () => ({ args, propName, propList }),
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

export const Resizes = Story('resize', props.resizes);
