export type PropSize = 'md' | 'lg';
export type PropColor = 'primary' | 'success' | 'warning' | 'danger';
type TypesProps = {
    sizes: PropSize[];
    colors: PropColor[];
};
export type TypesPropsList = PropSize | PropColor;
type Props = {
    progress: number;
    size: PropSize;
    color: PropColor;
    textBefore: string;
    textAfter: string;
    bg: boolean;
    column: boolean;
};
export declare const propsValues: TypesProps;
export declare const defaultProps: Props;
export {};
