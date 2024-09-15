import type { Meta, StoryObj } from '@storybook/vue3';
import { action } from '@storybook/addon-actions';
import BxInput from '../components/BxInput.vue';
import { defaultProps, propsValues, type TypesPropsList } from '../components/BxInput.props';
import { Story } from './Story';

const events = {
  'update:modelValue': action('update:modelValue'),
  change: action('change'),
  'click-before': action('click-before'),
  'click-after': action('click-after'),
};

const meta: Meta<typeof BxInput> = {
  title: 'forms/bx-input',
  component: BxInput,
  args: {
    ...events,
    modelValue: defaultProps.value,
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
      control: { type: 'text' },
    },
    placeholder: {
      control: { type: 'text' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    size: {
      options: propsValues.sizes,
      control: { type: 'inline-radio' },
    },
    color: {
      options: propsValues.colors,
      control: { type: 'inline-radio' },
    },
    inline: {
      control: { type: 'boolean' },
    },
    noBorder: {
      control: { type: 'boolean' },
    },
    underline: {
      control: { type: 'boolean' },
    },
    noPadding: {
      control: { type: 'boolean' },
    },
    round: {
      control: { type: 'boolean' },
    },
    tag: {
      control: { type: 'text' },
    },
    tagColor: {
      options: propsValues.tagColors,
      control: { type: 'inline-radio' },
    },
    beforeIcon: {
      options: propsValues.icons,
      control: { type: 'select' },
    },
    beforeExt: {
      control: { type: 'boolean' },
    },
    beforeButton: {
      control: { type: 'boolean' },
    },
    afterIcon: {
      options: propsValues.icons,
      control: { type: 'select' },
    },
    afterExt: {
      control: { type: 'boolean' },
    },
    afterButton: {
      control: { type: 'boolean' },
    },
  },
};

type StoryType = StoryObj<typeof meta>;

export default meta;
export const Default: StoryType = Story(BxInput);
export const Colors: StoryType = Story<TypesPropsList>(BxInput, 'color', propsValues.colors);
export const Sizes: StoryType = Story<TypesPropsList>(BxInput, 'size', propsValues.sizes);
export const BeforeIcons: StoryType = Story<TypesPropsList>(
  BxInput,
  'beforeIcon',
  propsValues.icons,
);
export const AfterIcons: StoryType = Story<TypesPropsList>(BxInput, 'afterIcon', propsValues.icons);
export const TagColors: StoryType = Story<TypesPropsList>(
  BxInput,
  'tagColor',
  propsValues.tagColors,
);
