export type PropType = 'drop' | 'button' | 'link';

type TypesProps = {
  types: PropType[];
};

export type TypesPropsList = PropType;

type Props = {
  placeholder: string;
  type: PropType;
  multiple: boolean;
  disabled: boolean;
};

export const propsValues: TypesProps = {
  types: ['drop', 'button', 'link'],
};

export const defaultProps: Props = {
  placeholder: '',
  type: propsValues.types[0],
  multiple: false,
  disabled: false,
};
