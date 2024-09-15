import { default as React } from '../../../node_modules/react';

type PropType = 'button' | 'submit' | 'reset';
type PropSize = 'xs' | 'sm' | 'md' | 'lg';
type PropLoader = '' | 'clock' | 'wait';
type PropColor = 'default' | 'success' | 'success-light' | 'danger' | 'danger-dark' | 'danger-light' | 'primary' | 'primary-dark' | 'secondary' | 'link' | 'light' | 'light-border';
type PropIcon = '' | 'add' | 'stop' | 'start' | 'pause' | 'setting' | 'task' | 'info' | 'search' | 'follow' | 'unfollow' | 'print' | 'add-folder' | 'list' | 'business' | 'business-confirm' | 'business-warning' | 'camera' | 'phone-up' | 'phone-down' | 'back' | 'edit' | 'share' | 'remove' | 'download' | 'cloud' | 'page' | 'chat' | 'phone-call' | 'lock' | 'done' | 'disk' | 'mail' | 'alert' | 'angle-up' | 'angle-down' | 'dots' | 'forward' | 'fail' | 'success' | 'plan' | 'eye-opened' | 'eye-closed' | 'tariff' | 'battery' | 'no-battery' | 'half-battery' | 'low-battery' | 'crit-battery' | 'demo';
type TypesProps = {
    types: PropType[];
    colors: PropColor[];
    sizes: PropSize[];
    icons: PropIcon[];
    loaders: PropLoader[];
};
export type TypesPropsList = PropType | PropColor | PropSize | PropIcon | PropLoader;
export type Props = {
    children: React.ReactNode;
    type: PropType;
    color: PropColor;
    size: PropSize;
    icon: PropIcon;
    loader: PropLoader;
    count: number;
    counter: boolean;
    disabled: boolean;
    dropdown: boolean;
    round: boolean;
    noCaps: boolean;
    menu: boolean;
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    onToggleMenu: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};
export declare const propsValues: TypesProps;
export declare const defaultProps: Omit<Props, 'children' | 'onClick' | 'onToggleMenu'>;
export {};
