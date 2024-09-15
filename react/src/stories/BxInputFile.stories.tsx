import { Meta } from '@storybook/react';
import { fn } from '@storybook/test';
import { Story } from './Story';
import {
  BxInputFile,
  defaultProps,
  propsValues,
  type TypesPropsList,
} from '../../lib/components/BxInputFile';

const meta: Meta<typeof BxInputFile> = {
  title: 'Form/BxInputFile',
  args: {
    onChange: fn(),
    onDelete: fn(),
    placeholder: defaultProps.placeholder,
    type: defaultProps.type,
    multiple: defaultProps.multiple,
    disabled: defaultProps.disabled,
  },
  argTypes: {
    placeholder: {
      control: { type: 'text' },
    },
    type: {
      options: propsValues.types,
      control: { type: 'inline-radio' },
    },
    multiple: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
export const Default = Story(BxInputFile).bind({});
export const Types = Story<TypesPropsList>(BxInputFile, 'type', propsValues.types);
