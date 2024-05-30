import type { Meta, StoryObj } from '@storybook/vue3';
import { action } from '@storybook/addon-actions';
import BxButton, {
  propsValues,
  type PropTypes,
  type PropColors,
  type PropSizes,
  type PropIcons,
  type PropLoaders,
} from '../components/BxButton.vue';

type DefaultProps = {
  type: PropTypes;
  color: PropColors;
  size: PropSizes;
  icon: PropIcons;
  loader: PropLoaders;
  count: number;
  counter: boolean;
  disabled: boolean;
  dropdown: boolean;
  round: boolean;
  noCaps: boolean;
  menu: boolean;
};

const defaultProps: DefaultProps = {
  type: 'button',
  color: 'default',
  size: 'md',
  icon: '',
  loader: '',
  count: 0,
  counter: false,
  disabled: false,
  dropdown: false,
  round: false,
  noCaps: false,
  menu: false,
};

const meta = {
  title: 'bx-button',
  component: BxButton,
  args: {
    default: 'bx-button',
    click: action('click'),
    'toggle-menu': action('toggle-menu'),
    type: defaultProps.type,
    color: defaultProps.color,
    size: defaultProps.size,
    icon: defaultProps.icon,
    loader: defaultProps.loader,
    count: defaultProps.count,
    counter: defaultProps.counter,
    disabled: defaultProps.disabled,
    dropdown: defaultProps.dropdown,
    round: defaultProps.round,
    noCaps: defaultProps.noCaps,
    menu: defaultProps.menu,
  },
  argTypes: {
    default: {
      control: { type: 'text' },
    },
    type: {
      options: propsValues.types,
      defaultValue: defaultProps.type,
      control: { type: 'inline-radio' },
    },
    color: {
      options: propsValues.colors,
      defaultValue: defaultProps.color,
      control: { type: 'select' },
    },
    size: {
      options: propsValues.sizes,
      defaultValue: defaultProps.size,
      control: { type: 'inline-radio' },
    },
    icon: {
      options: propsValues.icons,
      defaultValue: defaultProps.icon,
      control: { type: 'select' },
    },
    loader: {
      options: propsValues.loaders,
      defaultValue: defaultProps.loader,
      control: { type: 'inline-radio' },
    },
    count: {
      defaultValue: defaultProps.count,
      control: { type: 'number' },
    },
    counter: {
      defaultValue: defaultProps.counter,
      control: { type: 'boolean' },
    },
    disabled: {
      defaultValue: defaultProps.disabled,
      control: { type: 'boolean' },
    },
    dropdown: {
      defaultValue: defaultProps.dropdown,
      control: { type: 'boolean' },
    },
    round: {
      defaultValue: defaultProps.round,
      control: { type: 'boolean' },
    },
    noCaps: {
      defaultValue: defaultProps.noCaps,
      control: { type: 'boolean' },
    },
    menu: {
      defaultValue: defaultProps.menu,
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof BxButton>;

export default meta;

type StoryType = StoryObj<typeof meta>;

export const Default: StoryType = {
  render: (args) => ({
    template: '<bx-button v-bind="args" v-on="args">{{ args.default }}</bx-button>',
    data: () => ({ args }),
    provide: {
      $BX24: null,
    },
    components: { BxButton },
  }),
};

const Story = (propName: string, propList: any[]) => ({
  render: (args: any) => ({
    template: `
      <div v-for="item in propList" :key="item" class="component">
        <bx-button v-bind="args" v-on="args" :[propName]="item">{{ args.default }}</bx-button>
      </div>
    `,
    data: () => ({ args, propName, propList }),
    provide: {
      $BX24: null,
    },
    components: { BxButton },
  }),
  argTypes: {
    [propName]: {
      table: {
        disable: true,
      },
    },
  },
});

export const Colors: StoryType = Story('color', propsValues.colors);
export const Sizes: StoryType = Story('size', propsValues.sizes);
export const Icons: StoryType = Story('icon', propsValues.icons);
export const Loaders: StoryType = Story('loader', propsValues.loaders);
