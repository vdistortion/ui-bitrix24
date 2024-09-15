import { default as React } from '../../../node_modules/react';

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
export declare const propsValues: TypesProps;
export declare const defaultProps: Omit<Props, 'onInput'>;
export {};
