export type PropSize = 'md' | 'xs';
export type PropColor = 'default' | 'primary' | 'success' | 'warning' | 'danger';
export type PropIcon = '' | 'warning' | 'danger' | 'info';

type TypesProps = {
  sizes: PropSize[];
  colors: PropColor[];
  icons: PropIcon[];
};

export type TypesPropsList = PropSize | PropColor | PropIcon;

type Props = {
  title: string;
  size: PropSize;
  color: PropColor;
  icon: PropIcon;
  center: boolean;
  inline: boolean;
  closing: boolean;
};

export const propsValues: TypesProps = {
  sizes: ['md', 'xs'],
  colors: ['default', 'primary', 'success', 'warning', 'danger'],
  icons: ['', 'warning', 'danger', 'info'],
};

export const defaultProps: Props = {
  title: 'Внимание!',
  size: propsValues.sizes[0],
  color: propsValues.colors[0],
  icon: propsValues.icons[0],
  center: false,
  inline: false,
  closing: false,
};
