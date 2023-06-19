import { action } from '@storybook/addon-actions';
import BxInput, { props } from '../components/BxInput.vue';

const defaultProps = {
  modelValue: '',
  placeholder: '',
  disabled: false,
  size: 'md',
  color: '',
  width: '',
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
export default {
  title: 'forms/bx-input',
  component: BxInput,
  tags: ['autodocs'],
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
    width: defaultProps.width,
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
    width: {
      defaultValue: defaultProps.width,
      control: { type: 'text' },
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
};

export const Default = {
  render: (args) => ({
    template: '<bx-input v-bind="args" v-on="args" v-model="args.modelValue"></bx-input>',
    data: () => ({ args }),
    components: { BxInput },
  }),
};

const Story = (propName, propList) => ({
  render: (args) => ({
    template: `
      <div v-for="item in propList" :key="item" class="component">
        <bx-input v-bind="args" v-on="args" :[propName]="item" v-model="args.modelValue"></bx-input>
      </div>
    `,
    data: () => ({ args, propName, propList }),
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

export const Colors = Story('color', props.colors);
export const Sizes = Story('size', props.sizes);
export const BeforeIcons = Story('beforeIcon', props.icons);
export const AfterIcons = Story('afterIcon', props.icons);
export const TagColors = Story('tagColor', props.tagColors);
