type Props = {
  list: any[];
  displayField: string;
  displayFieldLink: string;
  textAdd: string;
  textMore: string;
  textChange: string;
  clickable: boolean;
  multiple: boolean;
  inline: boolean;
};

export const defaultProps: Props = {
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
