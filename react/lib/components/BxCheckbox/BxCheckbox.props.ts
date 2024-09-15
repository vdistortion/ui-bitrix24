import React from 'react';

export type Props = {
  children: React.ReactNode;
  value: string | number;
  name: string;
  checked: boolean;
  disabled: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const defaultProps: Omit<Props, 'children' | 'onChange'> = {
  value: '',
  name: '',
  checked: false,
  disabled: false,
};
