import type { Meta, StoryObj } from '@storybook/vue3';
import { action } from '@storybook/addon-actions';
import BxInput, {
  props,
  type PropSizes,
  type PropColors,
  type PropIcons,
  type PropTagColors,
} from '../components/BxInput.vue';

type DefaultProps = {
  modelValue: string;
  placeholder: string;
  disabled: boolean;
  size: PropSizes;
  color: PropColors;
  inline: boolean;
  noBorder: boolean;
  underline: boolean;
  noPadding: boolean;
  round: boolean;
  tag: string;
  tagColor: PropTagColors;
  beforeIcon: PropIcons;
  beforeExt: boolean;
  beforeButton: boolean;
  afterIcon: PropIcons;
  afterExt: boolean;
  afterButton: boolean;
};

const defaultProps: DefaultProps = {
  modelValue: '',
  placeholder: '',
  disabled: false,
  size: 'md',
  color: '',
  inline: false,
  noBorder: false,
  underline: false,
  noPadding: false,
  round: false,
  tag: '',
  tagColor: 'default',
  beforeIcon: '',
  beforeExt: false,
  beforeButton: false,
  afterIcon: '',
  afterExt: false,
  afterButton: false,
};

const meta = {
  title: 'forms/bx-input',
  component: BxInput,
  args: {
    'update:modelValue': action('update:modelValue'),
    change: action('change'),
    'click-before': action('click-before'),
    'click-after': action('click-after'),
    modelValue: defaultProps.modelValue,
    placeholder: defaultProps.placeholder,
    disabled: defaultProps.disabled,
    size: defaultProps.size,
    color: defaultProps.color,
    inline: defaultProps.inline,
    noBorder: defaultProps.noBorder,
    underline: defaultProps.underline,
    noPadding: defaultProps.noPadding,
    round: defaultProps.round,
    tag: defaultProps.tag,
    tagColor: defaultProps.tagColor,
    beforeIcon: defaultProps.beforeIcon,
    beforeExt: defaultProps.beforeExt,
    beforeButton: defaultProps.beforeButton,
    afterIcon: defaultProps.afterIcon,
    afterExt: defaultProps.afterExt,
    afterButton: defaultProps.afterButton,
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
    disabled: {
      defaultValue: defaultProps.disabled,
      control: { type: 'boolean' },
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
    inline: {
      defaultValue: defaultProps.inline,
      control: { type: 'boolean' },
    },
    noBorder: {
      defaultValue: defaultProps.noBorder,
      control: { type: 'boolean' },
    },
    underline: {
      defaultValue: defaultProps.underline,
      control: { type: 'boolean' },
    },
    noPadding: {
      defaultValue: defaultProps.noPadding,
      control: { type: 'boolean' },
    },
    round: {
      defaultValue: defaultProps.round,
      control: { type: 'boolean' },
    },
    tag: {
      defaultValue: defaultProps.tag,
      control: { type: 'text' },
    },
    tagColor: {
      options: props.tagColors,
      defaultValue: defaultProps.tagColor,
      control: { type: 'inline-radio' },
    },
    beforeIcon: {
      options: props.icons,
      defaultValue: defaultProps.beforeIcon,
      control: { type: 'select' },
    },
    beforeExt: {
      defaultValue: defaultProps.beforeExt,
      control: { type: 'boolean' },
    },
    beforeButton: {
      defaultValue: defaultProps.beforeButton,
      control: { type: 'boolean' },
    },
    afterIcon: {
      options: props.icons,
      defaultValue: defaultProps.afterIcon,
      control: { type: 'select' },
    },
    afterExt: {
      defaultValue: defaultProps.afterExt,
      control: { type: 'boolean' },
    },
    afterButton: {
      defaultValue: defaultProps.afterButton,
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof BxInput>;

export default meta;

type StoryType = StoryObj<typeof meta>;

export const Default: StoryType = {
  render: (args) => ({
    template: '<bx-input v-bind="args" v-on="args" v-model="args.modelValue"></bx-input>',
    data: () => ({ args }),
    provide: {
      $BX24: null,
    },
    components: { BxInput },
  }),
};

const Story = (propName: string, propList: any[]) => ({
  render: (args: any) => ({
    template: `
      <div v-for="item in propList" :key="item" class="component">
        <bx-input v-bind="args" v-on="args" :[propName]="item" v-model="args.modelValue"></bx-input>
      </div>
    `,
    data: () => ({ args, propName, propList }),
    provide: {
      $BX24: null,
    },
    components: { BxInput },
  }),
  args: {
    tag: propName === 'tagColor' ? 'tag' : '',
  },
  argTypes: {
    [propName]: {
      table: {
        disable: true,
      },
    },
  },
});

export const Colors: StoryType = Story('color', props.colors);
export const Sizes: StoryType = Story('size', props.sizes);
export const BeforeIcons: StoryType = Story('beforeIcon', props.icons);
export const AfterIcons: StoryType = Story('afterIcon', props.icons);
export const TagColors: StoryType = Story('tagColor', props.tagColors);
