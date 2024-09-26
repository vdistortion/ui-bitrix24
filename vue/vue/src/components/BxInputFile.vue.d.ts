import { PropType } from 'vue';
import { PropType as PropTypeInputFile } from './BxInputFile.props';
declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    placeholder: {
        type: StringConstructor;
        default: string;
        validator(value: unknown): boolean;
    };
    type: {
        type: PropType<PropTypeInputFile>;
        default: PropTypeInputFile;
        validator(value: PropTypeInputFile): boolean;
    };
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    change: (...args: any[]) => void;
    delete: (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    placeholder: {
        type: StringConstructor;
        default: string;
        validator(value: unknown): boolean;
    };
    type: {
        type: PropType<PropTypeInputFile>;
        default: PropTypeInputFile;
        validator(value: PropTypeInputFile): boolean;
    };
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{
    onChange?: ((...args: any[]) => any) | undefined;
    onDelete?: ((...args: any[]) => any) | undefined;
}>, {
    type: PropTypeInputFile;
    disabled: boolean;
    placeholder: string;
    multiple: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
