import { PropType } from 'vue';
import { PropColor, PropIcon, PropSize } from './BxAlert.props';
declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    title: {
        type: StringConstructor;
        default: string;
        validator(value: unknown): boolean;
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
    icon: {
        type: PropType<PropIcon>;
        default: PropIcon;
        validator(value: PropIcon): boolean;
    };
    center: {
        type: BooleanConstructor;
        default: boolean;
    };
    inline: {
        type: BooleanConstructor;
        default: boolean;
    };
    closing: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    close: (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    title: {
        type: StringConstructor;
        default: string;
        validator(value: unknown): boolean;
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
    icon: {
        type: PropType<PropIcon>;
        default: PropIcon;
        validator(value: PropIcon): boolean;
    };
    center: {
        type: BooleanConstructor;
        default: boolean;
    };
    inline: {
        type: BooleanConstructor;
        default: boolean;
    };
    closing: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{
    onClose?: ((...args: any[]) => any) | undefined;
}>, {
    title: string;
    center: boolean;
    size: PropSize;
    color: PropColor;
    icon: PropIcon;
    inline: boolean;
    closing: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
