import { default as React } from '../../../node_modules/react';

export type Props = {
    children: React.ReactNode;
    value: string | number;
    name: string;
    checked: boolean;
    disabled: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
export declare const defaultProps: Omit<Props, 'children' | 'onChange'>;
