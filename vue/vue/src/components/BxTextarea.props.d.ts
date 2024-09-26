export type PropResize = '' | 'no' | 'y' | 'x';
type TypesProps = {
    resizes: PropResize[];
};
export type TypesPropsList = PropResize;
type Props = {
    value: string;
    placeholder: string;
    resize: PropResize;
    disabled: boolean;
};
export declare const propsValues: TypesProps;
export declare const defaultProps: Props;
export {};
