import { Meta } from '@storybook/react';
import { Story } from './Story';
import {
  BxIcon,
  defaultProps,
  propsValues,
  type TypesPropsList,
} from '../../lib/components/BxIcon';

const meta: Meta<typeof BxIcon> = {
  title: 'BxIcon',
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

export default meta;
export const Default = Story(BxIcon).bind({});
export const Icons = Story<TypesPropsList>(BxIcon, 'icon', propsValues.icons);
export const Sizes = Story<TypesPropsList>(BxIcon, 'size', propsValues.sizes);
