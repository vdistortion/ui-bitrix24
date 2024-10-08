import React from 'react';

export type ItemType = Record<string, string>;

export type PropDefaultIcons = 'default-tag-user' | 'default-user' | 'extranet-user' | 'department';

type TypesProps = {
  defaultIcons: PropDefaultIcons[];
};

export type Props = {
  children: React.ReactNode;
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
  onAdd: (text: string) => void;
  onAuxClick: (key: number, item: any) => void;
  onClick: (key: number, item: any) => void;
  onCreate: () => void;
  onDelete: (key: number, item: any) => void;
  onEnter: (text: string) => void;
  onInput: (text: string) => void;
};

export const propsValues: TypesProps = {
  defaultIcons: ['default-tag-user', 'default-user', 'extranet-user', 'department'],
};

export const defaultProps: Omit<
  Props,
  'children' | 'onAdd' | 'onAuxClick' | 'onClick' | 'onCreate' | 'onDelete' | 'onEnter' | 'onInput'
> = {
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
