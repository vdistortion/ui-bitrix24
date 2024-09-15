export type PropResize = '' | 'no' | 'y' | 'x';

type TypesProps = {
  resizes: PropResize[];
};

export type TypesPropsList = PropResize;

type Props = {
  value: string;
  placeholder: string;
  resize: PropResize;
  disabled: boolean;
};

export const propsValues: TypesProps = {
  resizes: ['', 'no', 'y', 'x'],
};

export const defaultProps: Props = {
  value: '',
  placeholder: '',
  resize: propsValues.resizes[0],
  disabled: false,
};
