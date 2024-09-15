import React from 'react';

type PropResize = '' | 'no' | 'y' | 'x';

type TypesProps = {
  resizes: PropResize[];
};

export type TypesPropsList = PropResize;

export type Props = {
  value: string;
  placeholder: string;
  resize: PropResize;
  disabled: boolean;
  onInput: (e: React.FormEvent<HTMLTextAreaElement>) => void;
};

export const propsValues: TypesProps = {
  resizes: ['', 'no', 'y', 'x'],
};

export const defaultProps: Omit<Props, 'onInput'> = {
  value: '',
  placeholder: '',
  resize: propsValues.resizes[0],
  disabled: false,
};
