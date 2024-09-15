import { Meta } from '@storybook/react';
import { fn } from '@storybook/test';
import { Story } from './Story';
import {
  BxInput,
  defaultProps,
  propsValues,
  type TypesPropsList,
} from '../../lib/components/BxInput';

const meta: Meta<typeof BxInput> = {
  title: 'Form/BxInput',
  args: {
    onInput: fn(),
    onChange: fn(),
    onClickBefore: fn(),
    onClickAfter: fn(),
    value: defaultProps.value,
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
    value: {
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

export default meta;
export const Default = Story(BxInput).bind({});
export const Colors = Story<TypesPropsList>(BxInput, 'color', propsValues.colors);
export const Sizes = Story<TypesPropsList>(BxInput, 'size', propsValues.sizes);
export const BeforeIcons = Story<TypesPropsList>(BxInput, 'beforeIcon', propsValues.icons);
export const AfterIcons = Story<TypesPropsList>(BxInput, 'afterIcon', propsValues.icons);
export const TagColors = Story<TypesPropsList>(BxInput, 'tagColor', propsValues.tagColors);
