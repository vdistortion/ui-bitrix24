export type ItemType = Record<string, string>;

export type PropDefaultIcons = 'default-tag-user' | 'default-user' | 'extranet-user' | 'department';

type TypesProps = {
  defaultIcons: PropDefaultIcons[];
};

type Props = {
  list: ItemType[];
  placeholder: string;
  displayFieldName: string;
  displayFieldLink: string;
  displayFieldIcon: string;
  defaultIcon: PropDefaultIcons;
  textAddButton: string;
  textCreateButton: string;
  textMoreButton: string;
  textChangeButton: string;
  showAddButton: boolean;
  showCreateButton: boolean;
  showInputText: boolean;
  clickable: boolean;
  multiple: boolean;
  inline: boolean;
  icon: boolean;
};

export const propsValues: TypesProps = {
  defaultIcons: ['default-tag-user', 'default-user', 'extranet-user', 'department'],
};

export const defaultProps: Props = {
  list: [],
  placeholder: '',
  displayFieldName: '',
  displayFieldLink: '',
  displayFieldIcon: '',
  defaultIcon: 'default-tag-user',
  textAddButton: 'Добавить',
  textCreateButton: 'Создать',
  textMoreButton: 'Добавить ещё',
  textChangeButton: 'Сменить',
  showAddButton: true,
  showCreateButton: false,
  showInputText: false,
  clickable: false,
  multiple: false,
  inline: false,
  icon: false,
};
