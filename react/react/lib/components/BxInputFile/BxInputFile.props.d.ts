type PropType = 'drop' | 'button' | 'link';
type TypesProps = {
    types: PropType[];
};
export type TypesPropsList = PropType;
export type Props = {
    placeholder: string;
    type: PropType;
    multiple: boolean;
    disabled: boolean;
    onChange: (files: File[]) => void;
    onDelete: (files: File[], file: File) => void;
};
export declare const propsValues: TypesProps;
export declare const defaultProps: Omit<Props, 'onChange' | 'onDelete'>;
export {};
