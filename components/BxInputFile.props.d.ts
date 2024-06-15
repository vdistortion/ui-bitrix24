export type PropType = 'drop' | 'button' | 'link';
type TypesProps = {
    types: PropType[];
};
export type TypesPropsList = PropType;
type Props = {
    placeholder: string;
    type: PropType;
    multiple: boolean;
    disabled: boolean;
};
export declare const propsValues: TypesProps;
export declare const defaultProps: Props;
export {};
