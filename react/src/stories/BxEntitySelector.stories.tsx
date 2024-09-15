import { Meta } from '@storybook/react';
import { fn } from '@storybook/test';
import { Story } from './Story';
import countriesWithoutLinks from './countries';
import { BxEntitySelector, defaultProps } from '../../lib/components/BxEntitySelector';

const countries = countriesWithoutLinks.map((country) => ({
  ...country,
  url: `https://www.google.com/search?q=${country.name}`,
}));

const meta: Meta<typeof BxEntitySelector> = {
  title: 'BxEntitySelector',
  args: {
    onClick: fn(),
    onAuxClick: fn(),
    onAdd: fn(),
    onDelete: fn(),
    list: defaultProps.list,
    displayField: defaultProps.displayField,
    displayFieldLink: defaultProps.displayFieldLink,
    textAdd: defaultProps.textAdd,
    textMore: defaultProps.textMore,
    textChange: defaultProps.textChange,
    clickable: defaultProps.clickable,
    multiple: defaultProps.multiple,
    inline: defaultProps.inline,
  },
  argTypes: {
    list: {
      mapping: countries,
      options: countries.map((_, index) => index),
      control: {
        type: 'multi-select',
        labels: countries.map(
          (country) => `{ code: ${country.code}, name: ${country.name}, url: ${country.url} }`,
        ),
      },
    },
    displayField: {
      options: ['code', 'name', 'url'],
      control: { type: 'inline-radio' },
    },
    displayFieldLink: {
      options: ['', 'url'],
      control: { type: 'inline-radio' },
    },
    textAdd: {
      control: { type: 'text' },
    },
    textMore: {
      control: { type: 'text' },
    },
    textChange: {
      control: { type: 'text' },
    },
    clickable: {
      control: { type: 'boolean' },
    },
    multiple: {
      control: { type: 'boolean' },
    },
    inline: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
export const Default = Story(BxEntitySelector).bind({});
