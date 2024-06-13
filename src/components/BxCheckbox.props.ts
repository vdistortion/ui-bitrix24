type Props = {
  value: string | number;
  name: string;
  checked: boolean;
  disabled: boolean;
};

export const defaultProps: Props = {
  value: '',
  name: '',
  checked: false,
  disabled: false,
};
