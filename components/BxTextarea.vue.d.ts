import { PropType } from '../../vue/dist/vue.esm-bundler.js';
import { PropResize } from './BxTextarea.props';

declare const _default: import('../../vue/dist/vue.esm-bundler.js').DefineComponent<{
    modelValue: {
        type: StringConstructor;
        default: string;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    resize: {
        type: PropType<PropResize>;
        default: PropResize;
        validator(value: PropResize): boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {}, unknown, {}, {}, import('../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
}, string, import('../../vue/dist/vue.esm-bundler.js').PublicProps, Readonly<import('../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    modelValue: {
        type: StringConstructor;
        default: string;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    resize: {
        type: PropType<PropResize>;
        default: PropResize;
        validator(value: PropResize): boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    modelValue: string;
    placeholder: string;
    resize: PropResize;
}, {}>;
export default _default;
