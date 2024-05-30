import type { Meta, StoryObj } from '@storybook/vue3';
import { action } from '@storybook/addon-actions';
import BxAlert, {
  propsValues,
  type PropSizes,
  type PropColors,
  type PropIcons,
} from '../components/BxAlert.vue';

type DefaultProps = {
  title: string;
  size: PropSizes;
  color: PropColors;
  icon: PropIcons;
  center: boolean;
  inline: boolean;
};

const defaultProps: DefaultProps = {
  title: 'Внимание!',
  size: 'md',
  color: 'default',
  icon: '',
  center: false,
  inline: false,
};

const meta = {
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
      options: propsValues.sizes,
      defaultValue: defaultProps.size,
      control: { type: 'inline-radio' },
    },
    color: {
      options: propsValues.colors,
      defaultValue: defaultProps.color,
      control: { type: 'inline-radio' },
    },
    icon: {
      options: propsValues.icons,
      defaultValue: defaultProps.icon,
      control: { type: 'inline-radio' },
    },
    center: {
      defaultValue: defaultProps.center,
      control: { type: 'boolean' },
    },
    inline: {
      defaultValue: defaultProps.inline,
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof BxAlert>;

export default meta;

type StoryType = StoryObj<typeof meta>;

export const Default: StoryType = {
  render: (args) => ({
    template: '<bx-alert v-bind="args" v-on="args">{{ args.default }}</bx-alert>',
    data: () => ({ args }),
    provide: {
      $BX24: null,
    },
    components: { BxAlert },
  }),
};

const Story = (propName: string, propList: any[]) => ({
  render: (args: any) => ({
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

export const Sizes: StoryType = Story('size', propsValues.sizes);
export const Colors: StoryType = Story('color', propsValues.colors);
export const Icons: StoryType = Story('icon', propsValues.icons);
