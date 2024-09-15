type PropSize = 'md' | 'lg';
type PropColor = 'primary' | 'success' | 'warning' | 'danger';

type TypesProps = {
  sizes: PropSize[];
  colors: PropColor[];
};

export type TypesPropsList = PropSize | PropColor;

export type Props = {
  progress: number;
  size: PropSize;
  color: PropColor;
  textBefore: string;
  textAfter: string;
  bg: boolean;
  column: boolean;
};

export const propsValues: TypesProps = {
  sizes: ['md', 'lg'],
  colors: ['primary', 'success', 'warning', 'danger'],
};

export const defaultProps: Props = {
  progress: 0,
  size: propsValues.sizes[0],
  color: propsValues.colors[0],
  textBefore: '',
  textAfter: '',
  bg: false,
  column: false,
};
