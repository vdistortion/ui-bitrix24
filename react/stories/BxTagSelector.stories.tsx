import { Meta } from '@storybook/react';
import { fn } from '@storybook/test';
import { Story } from './Story';
import { BxTagSelector, defaultProps, propsValues } from '../lib/components/BxTagSelector';
import countries from '../../common/storybook/countries';

const meta: Meta<typeof BxTagSelector> = {
  title: 'BxTagSelector',
  args: {
    onAdd: fn(),
    onAuxClick: fn(),
    onClick: fn(),
    onCreate: fn(),
    onDelete: fn(),
    onEnter: fn(),
    onInput: fn(),
    list: defaultProps.list,
    placeholder: defaultProps.placeholder,
    displayFieldName: defaultProps.displayFieldName,
    displayFieldLink: defaultProps.displayFieldLink,
    displayFieldIcon: defaultProps.displayFieldIcon,
    defaultIcon: defaultProps.defaultIcon,
    textAddButton: defaultProps.textAddButton,
    textCreateButton: defaultProps.textCreateButton,
    textMoreButton: defaultProps.textMoreButton,
    textChangeButton: defaultProps.textChangeButton,
    showAddButton: defaultProps.showAddButton,
    showCreateButton: defaultProps.showCreateButton,
    showInputText: defaultProps.showInputText,
    clickable: defaultProps.clickable,
    multiple: defaultProps.multiple,
    inline: defaultProps.inline,
    icon: defaultProps.icon,
  },
  argTypes: {
    list: {
      mapping: countries,
      options: countries.map((_, index) => index),
      control: {
        type: 'multi-select',
        labels: countries.map((country) => `{ code: ${country.code}, name: ${country.name} }`),
      },
    },
    placeholder: {
      control: { type: 'text' },
    },
    displayFieldName: {
      options: ['code', 'name', 'url'],
      control: { type: 'inline-radio' },
    },
    displayFieldLink: {
      options: ['', 'url'],
      control: { type: 'inline-radio' },
    },
    displayFieldIcon: {
      options: ['', 'icon'],
      control: { type: 'inline-radio' },
    },
    defaultIcon: {
      options: propsValues.defaultIcons,
      control: { type: 'inline-radio' },
    },
    textAddButton: {
      control: { type: 'text' },
    },
    textCreateButton: {
      control: { type: 'text' },
    },
    textMoreButton: {
      control: { type: 'text' },
    },
    textChangeButton: {
      control: { type: 'text' },
    },
    showAddButton: {
      control: { type: 'boolean' },
    },
    showCreateButton: {
      control: { type: 'boolean' },
    },
    showInputText: {
      control: { type: 'boolean' },
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
    icon: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
export const Default = Story(BxTagSelector).bind({});
