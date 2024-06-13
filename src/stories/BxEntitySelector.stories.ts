import type { Meta, StoryObj } from '@storybook/vue3';
import { action } from '@storybook/addon-actions';
import { Story } from './Story';
import BxEntitySelector from '../components/BxEntitySelector.vue';
import { defaultProps } from '../components/BxEntitySelector.props';
import countriesWithoutLinks from './countries';

const countries = countriesWithoutLinks.map((country) => ({
  ...country,
  url: `https://www.google.com/search?q=${country.name}`,
}));

const events = {
  add: action('add'),
  click: action('click'),
  auxclick: action('auxclick'),
  delete: action('delete'),
};

const meta: Meta<typeof BxEntitySelector> = {
  title: 'bx-entity-selector',
  component: BxEntitySelector,
  args: {
    ...events,
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
      options: countries.map((c, index) => index),
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

type StoryType = StoryObj<typeof meta>;

export default meta;
export const Default: StoryType = Story(BxEntitySelector);
