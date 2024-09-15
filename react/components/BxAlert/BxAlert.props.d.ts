import { default as React } from '../../../node_modules/react';

type PropSize = 'md' | 'xs';
type PropColor = 'default' | 'primary' | 'success' | 'warning' | 'danger';
type PropIcon = '' | 'warning' | 'danger' | 'info';
type TypesProps = {
    sizes: PropSize[];
    colors: PropColor[];
    icons: PropIcon[];
};
export type TypesPropsList = PropSize | PropColor | PropIcon;
export type Props = {
    children: React.ReactNode;
    title: string;
    size: PropSize;
    color: PropColor;
    icon: PropIcon;
    center: boolean;
    inline: boolean;
    closing: boolean;
    onClose: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
};
export declare const propsValues: TypesProps;
export declare const defaultProps: Omit<Props, 'children' | 'onClose'>;
export {};
