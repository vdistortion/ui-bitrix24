import type { Meta, StoryObj } from '@storybook/vue3';
import { action } from '@storybook/addon-actions';
import { Story } from './Story';
import BxAlert from '../components/BxAlert.vue';
import { propsValues, defaultProps, type TypesPropsList } from '../components/BxAlert.props';

const events = {
  close: action('close'),
};

const meta: Meta<typeof BxAlert> = {
  title: 'bx-alert',
  component: BxAlert,
  args: {
    default: '',
    ...events,
    title: defaultProps.title,
    size: defaultProps.size,
    color: defaultProps.color,
    icon: defaultProps.icon,
    center: defaultProps.center,
    inline: defaultProps.inline,
    closing: defaultProps.closing,
  },
  argTypes: {
    default: {
      control: { type: 'text' },
    },
    title: {
      control: { type: 'text' },
    },
    size: {
      options: propsValues.sizes,
      control: { type: 'inline-radio' },
    },
    color: {
      options: propsValues.colors,
      control: { type: 'inline-radio' },
    },
    icon: {
      options: propsValues.icons,
      control: { type: 'inline-radio' },
    },
    center: {
      control: { type: 'boolean' },
    },
    inline: {
      control: { type: 'boolean' },
    },
    closing: {
      control: { type: 'boolean' },
    },
  },
};

type StoryType = StoryObj<typeof meta>;

export default meta;
export const Default: StoryType = Story(BxAlert);
export const Sizes: StoryType = Story<TypesPropsList>(BxAlert, 'size', propsValues.sizes);
export const Colors: StoryType = Story<TypesPropsList>(BxAlert, 'color', propsValues.colors);
export const Icons: StoryType = Story<TypesPropsList>(BxAlert, 'icon', propsValues.icons);
