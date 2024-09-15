import React from 'react';

type PropSize = 'md' | 'xs';
type PropColor = 'default' | 'primary' | 'success' | 'warning' | 'danger';
type PropIcon = '' | 'warning' | 'danger' | 'info';

type TypesProps = {
  sizes: PropSize[];
  colors: PropColor[];
  icons: PropIcon[];
};

export type TypesPropsList = PropSize | PropColor | PropIcon;

export type Props = {
  children: React.ReactNode;
  title: string;
  size: PropSize;
  color: PropColor;
  icon: PropIcon;
  center: boolean;
  inline: boolean;
  closing: boolean;
  onClose: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
};

export const propsValues: TypesProps = {
  sizes: ['md', 'xs'],
  colors: ['default', 'primary', 'success', 'warning', 'danger'],
  icons: ['', 'warning', 'danger', 'info'],
};

export const defaultProps: Omit<Props, 'children' | 'onClose'> = {
  title: 'Внимание!',
  size: propsValues.sizes[0],
  color: propsValues.colors[0],
  icon: propsValues.icons[0],
  center: false,
  inline: false,
  closing: false,
};
