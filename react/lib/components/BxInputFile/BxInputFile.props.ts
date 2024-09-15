type PropType = 'drop' | 'button' | 'link';

type TypesProps = {
  types: PropType[];
};

export type TypesPropsList = PropType;

export type Props = {
  placeholder: string;
  type: PropType;
  multiple: boolean;
  disabled: boolean;
  onChange: (files: File[]) => void;
  onDelete: (files: File[], file: File) => void;
};

export const propsValues: TypesProps = {
  types: ['drop', 'button', 'link'],
};

export const defaultProps: Omit<Props, 'onChange' | 'onDelete'> = {
  placeholder: '',
  type: propsValues.types[0],
  multiple: false,
  disabled: false,
};
