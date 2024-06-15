import { PropType } from '../../vue/dist/vue.esm-bundler.js';
import { PropColor, PropIcon, PropSize, PropTagColor } from './BxInput.props';

declare const _default: import('../../vue/dist/vue.esm-bundler.js').DefineComponent<{
    modelValue: {
        type: StringConstructor;
        default: string;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: PropType<PropSize>;
        default: PropSize;
        validator(value: PropSize): boolean;
    };
    color: {
        type: PropType<PropColor>;
        default: PropColor;
        validator(value: PropColor): boolean;
    };
    inline: {
        type: BooleanConstructor;
        default: boolean;
    };
    noBorder: {
        type: BooleanConstructor;
        default: boolean;
    };
    underline: {
        type: BooleanConstructor;
        default: boolean;
    };
    noPadding: {
        type: BooleanConstructor;
        default: boolean;
    };
    round: {
        type: BooleanConstructor;
        default: boolean;
    };
    tag: {
        type: StringConstructor;
        default: string;
    };
    tagColor: {
        type: PropType<PropTagColor>;
        default: PropTagColor;
        validator(value: PropTagColor): boolean;
    };
    beforeIcon: {
        type: PropType<PropIcon>;
        default: PropIcon;
        validator(value: PropIcon): boolean;
    };
    beforeExt: {
        type: BooleanConstructor;
        default: boolean;
    };
    beforeButton: {
        type: BooleanConstructor;
        default: boolean;
    };
    afterIcon: {
        type: PropType<PropIcon>;
        default: PropIcon;
        validator(value: PropIcon): boolean;
    };
    afterExt: {
        type: BooleanConstructor;
        default: boolean;
    };
    afterButton: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {}, unknown, {}, {}, import('../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
    change: (...args: any[]) => void;
    "click-before": (...args: any[]) => void;
    "click-after": (...args: any[]) => void;
}, string, import('../../vue/dist/vue.esm-bundler.js').PublicProps, Readonly<import('../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    modelValue: {
        type: StringConstructor;
        default: string;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: PropType<PropSize>;
        default: PropSize;
        validator(value: PropSize): boolean;
    };
    color: {
        type: PropType<PropColor>;
        default: PropColor;
        validator(value: PropColor): boolean;
    };
    inline: {
        type: BooleanConstructor;
        default: boolean;
    };
    noBorder: {
        type: BooleanConstructor;
        default: boolean;
    };
    underline: {
        type: BooleanConstructor;
        default: boolean;
    };
    noPadding: {
        type: BooleanConstructor;
        default: boolean;
    };
    round: {
        type: BooleanConstructor;
        default: boolean;
    };
    tag: {
        type: StringConstructor;
        default: string;
    };
    tagColor: {
        type: PropType<PropTagColor>;
        default: PropTagColor;
        validator(value: PropTagColor): boolean;
    };
    beforeIcon: {
        type: PropType<PropIcon>;
        default: PropIcon;
        validator(value: PropIcon): boolean;
    };
    beforeExt: {
        type: BooleanConstructor;
        default: boolean;
    };
    beforeButton: {
        type: BooleanConstructor;
        default: boolean;
    };
    afterIcon: {
        type: PropType<PropIcon>;
        default: PropIcon;
        validator(value: PropIcon): boolean;
    };
    afterExt: {
        type: BooleanConstructor;
        default: boolean;
    };
    afterButton: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    "onClick-before"?: ((...args: any[]) => any) | undefined;
    "onClick-after"?: ((...args: any[]) => any) | undefined;
}, {
    size: PropSize;
    color: PropColor;
    inline: boolean;
    disabled: boolean;
    round: boolean;
    modelValue: string;
    placeholder: string;
    noBorder: boolean;
    underline: boolean;
    noPadding: boolean;
    tag: string;
    tagColor: PropTagColor;
    beforeIcon: PropIcon;
    beforeExt: boolean;
    beforeButton: boolean;
    afterIcon: PropIcon;
    afterExt: boolean;
    afterButton: boolean;
}, {}>;
export default _default;
