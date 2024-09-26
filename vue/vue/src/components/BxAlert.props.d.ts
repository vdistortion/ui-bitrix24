export type PropSize = 'md' | 'xs';
export type PropColor = 'default' | 'primary' | 'success' | 'warning' | 'danger';
export type PropIcon = '' | 'warning' | 'danger' | 'info';
type TypesProps = {
    sizes: PropSize[];
    colors: PropColor[];
    icons: PropIcon[];
};
export type TypesPropsList = PropSize | PropColor | PropIcon;
type Props = {
    title: string;
    size: PropSize;
    color: PropColor;
    icon: PropIcon;
    center: boolean;
    inline: boolean;
    closing: boolean;
};
export declare const propsValues: TypesProps;
export declare const defaultProps: Props;
export {};
