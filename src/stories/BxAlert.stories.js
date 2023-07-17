import { action } from '@storybook/addon-actions';
import BxAlert, { props } from '../components/BxAlert.vue';

const defaultProps = {
  title: 'Внимание!',
  size: 'md',
  color: 'default',
  icon: '',
  center: false,
  inline: false,
};
export default {
  title: 'bx-alert',
  component: BxAlert,
  args: {
    default: '',
    close: action('close'),
    title: defaultProps.title,
    size: defaultProps.size,
    color: defaultProps.color,
    icon: defaultProps.icon,
    center: defaultProps.center,
    inline: defaultProps.inline,
  },
  argTypes: {
    default: {
      control: { type: 'text' },
    },
    title: {
      defaultValue: defaultProps.title,
      control: { type: 'text' },
    },
    size: {
      options: props.sizes,
      defaultValue: defaultProps.size,
      control: { type: 'inline-radio' },
    },
    color: {
      options: props.colors,
      defaultValue: defaultProps.color,
      control: { type: 'inline-radio' },
    },
    icon: {
      options: props.icons,
      defaultValue: defaultProps.icon,
      control: { type: 'inline-radio' },
    },
    center: {
      defaultValue: defaultProps.disabled,
      control: { type: 'boolean' },
    },
    inline: {
      defaultValue: defaultProps.dropdown,
      control: { type: 'boolean' },
    },
  },
};

export const Default = {
  render: (args) => ({
    template: '<bx-alert v-bind="args" v-on="args">{{ args.default }}</bx-alert>',
    data: () => ({ args }),
    provide: {
      $BX24: null,
    },
    components: { BxAlert },
  }),
};

const Story = (propName, propList) => ({
  render: (args) => ({
    template: `
      <div v-for="item in propList" :key="item" class="component">
        <bx-alert v-bind="args" v-on="args" :[propName]="item">{{ args.default }}</bx-alert>
      </div>
    `,
    data: () => ({ args, propName, propList }),
    provide: {
      $BX24: null,
    },
    components: { BxAlert },
  }),
  argTypes: {
    [propName]: {
      table: {
        disable: true,
      },
    },
  },
});

export const Sizes = Story('size', props.sizes);
export const Colors = Story('color', props.colors);
export const Icons = Story('icon', props.icons);
