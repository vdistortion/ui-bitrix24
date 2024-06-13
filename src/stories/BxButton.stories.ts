import type { Meta, StoryObj } from '@storybook/vue3';
import { action } from '@storybook/addon-actions';
import { Story } from './Story';
import BxButton from '../components/BxButton.vue';
import { defaultProps, propsValues, type TypesPropsList } from '../components/BxButton.props';

const events = {
  click: action('click'),
  'toggle-menu': action('toggle-menu'),
};

const meta: Meta<typeof BxButton> = {
  title: 'bx-button',
  component: BxButton,
  args: {
    default: 'bx-button',
    ...events,
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
      control: { type: 'inline-radio' },
    },
    color: {
      options: propsValues.colors,
      control: { type: 'select' },
    },
    size: {
      options: propsValues.sizes,
      control: { type: 'inline-radio' },
    },
    icon: {
      options: propsValues.icons,
      control: { type: 'select' },
    },
    loader: {
      options: propsValues.loaders,
      control: { type: 'inline-radio' },
    },
    count: {
      control: { type: 'number' },
    },
    counter: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    dropdown: {
      control: { type: 'boolean' },
    },
    round: {
      control: { type: 'boolean' },
    },
    noCaps: {
      control: { type: 'boolean' },
    },
    menu: {
      control: { type: 'boolean' },
    },
  },
};

type StoryType = StoryObj<typeof meta>;

export default meta;
export const Default: StoryType = Story(BxButton);
export const Colors: StoryType = Story<TypesPropsList>(BxButton, 'color', propsValues.colors);
export const Sizes: StoryType = Story<TypesPropsList>(BxButton, 'size', propsValues.sizes);
export const Icons: StoryType = Story<TypesPropsList>(BxButton, 'icon', propsValues.icons);
export const Loaders: StoryType = Story<TypesPropsList>(BxButton, 'loader', propsValues.loaders);
