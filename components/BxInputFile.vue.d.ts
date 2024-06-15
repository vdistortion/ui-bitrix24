import { PropType } from '../../vue/dist/vue.esm-bundler.js';
import { PropType as PropTypeInputFile } from './BxInputFile.props';

declare const _default: import('../../vue/dist/vue.esm-bundler.js').DefineComponent<{
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
}, {}, unknown, {}, {}, import('../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {
    change: (...args: any[]) => void;
    delete: (...args: any[]) => void;
}, string, import('../../vue/dist/vue.esm-bundler.js').PublicProps, Readonly<import('../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
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
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    onDelete?: ((...args: any[]) => any) | undefined;
}, {
    type: PropTypeInputFile;
    disabled: boolean;
    placeholder: string;
    multiple: boolean;
}, {}>;
export default _default;
