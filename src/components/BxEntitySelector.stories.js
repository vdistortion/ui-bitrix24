import { action } from '@storybook/addon-actions';
import BxEntitySelector from './BxEntitySelector.vue';
import countriesWithoutLinks from '../utils/countries';

const countries = countriesWithoutLinks.map((country) => ({
  ...country,
  url: `https://www.google.com/search?q=${country.name}`,
}));

const defaultProps = {
  list: [],
  displayField: 'name',
  displayFieldLink: '',
  textAdd: 'Добавить',
  textMore: 'Добавить ещё',
  textChange: 'Сменить',
  clickable: false,
  multiple: false,
  inline: false,
};

export default {
  title: 'bx-entity-selector',
  component: BxEntitySelector,
  tags: ['autodocs'],
  args: {
    add: action('add'),
    click: action('click'),
    delete: action('delete'),
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
        labels: countries.map((country) => `{ code: ${country.code}, name: ${country.name}, url: ${country.url} }`),
      },
    },
    displayField: {
      options: ['code', 'name', 'url'],
      defaultValue: defaultProps.displayField,
      control: { type: 'inline-radio' },
    },
    displayFieldLink: {
      options: ['', 'url'],
      defaultValue: defaultProps.displayFieldLink,
      control: { type: 'inline-radio' },
    },
    textAdd: {
      defaultValue: defaultProps.textAdd,
      control: { type: 'text' },
    },
    textMore: {
      defaultValue: defaultProps.textMore,
      control: { type: 'text' },
    },
    textChange: {
      defaultValue: defaultProps.textChange,
      control: { type: 'text' },
    },
    clickable: {
      defaultValue: defaultProps.clickable,
      control: { type: 'boolean' },
    },
    multiple: {
      defaultValue: defaultProps.multiple,
      control: { type: 'boolean' },
    },
    inline: {
      defaultValue: defaultProps.inline,
      control: { type: 'boolean' },
    },
  },
};

export const Default = {
  render: (args) => ({
    template: '<bx-entity-selector v-bind="args" v-on="args"></bx-entity-selector>',
    data: () => ({ args }),
    components: { BxEntitySelector },
  }),
};
