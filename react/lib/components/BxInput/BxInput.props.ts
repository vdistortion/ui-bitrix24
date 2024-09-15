import React from 'react';

type PropSize = 'lg' | 'md' | 'sm' | 'xs';
type PropColor = '' | 'success' | 'warning' | 'danger';
type PropIcon =
  | ''
  | 'search'
  | 'calendar'
  | 'dots'
  | 'phone'
  | 'mail'
  | 'clock'
  | 'angle'
  | 'clear'
  | 'loader';
type PropTagColor = 'default' | 'light' | 'light-blue';

type TypesProps = {
  sizes: PropSize[];
  colors: PropColor[];
  icons: PropIcon[];
  tagColors: PropTagColor[];
};

export type TypesPropsList = PropSize | PropColor | PropIcon | PropTagColor;

export type Props = {
  value: string;
  placeholder: string;
  disabled: boolean;
  size: PropSize;
  color: PropColor;
  inline: boolean;
  noBorder: boolean;
  underline: boolean;
  noPadding: boolean;
  round: boolean;
  tag: string;
  tagColor: PropTagColor;
  beforeIcon: PropIcon;
  beforeExt: boolean;
  beforeButton: boolean;
  afterIcon: PropIcon;
  afterExt: boolean;
  afterButton: boolean;
  onInput: (e: React.FormEvent<HTMLInputElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClickBefore: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onClickAfter: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export const propsValues: TypesProps = {
  sizes: ['md', 'lg', 'sm', 'xs'],
  colors: ['', 'success', 'warning', 'danger'],
  icons: ['', 'search', 'calendar', 'dots', 'phone', 'mail', 'clock', 'angle', 'clear', 'loader'],
  tagColors: ['default', 'light', 'light-blue'],
};

export const defaultProps: Omit<Props, 'onInput' | 'onChange' | 'onClickBefore' | 'onClickAfter'> =
  {
    value: '',
    placeholder: '',
    disabled: false,
    size: propsValues.sizes[0],
    color: propsValues.colors[0],
    inline: false,
    noBorder: false,
    underline: false,
    noPadding: false,
    round: false,
    tag: '',
    tagColor: propsValues.tagColors[0],
    beforeIcon: propsValues.icons[0],
    beforeExt: false,
    beforeButton: false,
    afterIcon: propsValues.icons[0],
    afterExt: false,
    afterButton: false,
  };
