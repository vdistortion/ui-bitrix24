import type { Meta, StoryObj } from '@storybook/vue3';
import { Story } from './Story';
import BxIcon from '../components/BxIcon.vue';
import { defaultProps, propsValues, type TypesPropsList } from '../components/BxIcon.props';

const meta: Meta<typeof BxIcon> = {
  title: 'bx-icon',
  component: BxIcon,
  args: {
    icon: defaultProps.icon,
    size: defaultProps.size,
    button: defaultProps.button,
    square: defaultProps.square,
  },
  argTypes: {
    icon: {
      options: propsValues.icons,
      control: { type: 'select' },
    },
    size: {
      options: propsValues.sizes,
      control: { type: 'select' },
    },
    button: {
      control: { type: 'boolean' },
    },
    square: {
      control: { type: 'boolean' },
    },
  },
};

type StoryType = StoryObj<typeof meta>;

export default meta;
export const Default: StoryType = Story(BxIcon);
export const Icons: StoryType = Story<TypesPropsList>(BxIcon, 'icon', propsValues.icons);
export const Sizes: StoryType = Story<TypesPropsList>(BxIcon, 'size', propsValues.sizes);
