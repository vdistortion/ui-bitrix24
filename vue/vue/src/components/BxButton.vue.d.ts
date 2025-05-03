import { PropType } from 'vue';
import { PropColor, PropIcon, PropSize, PropLoader, PropType as PropTypeButton } from './BxButton.props';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
        default?(_: {}): any;
    };
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    type: {
        type: PropType<PropTypeButton>;
        default: PropTypeButton;
        validator(value: PropTypeButton): boolean;
    };
    color: {
        type: PropType<PropColor>;
        default: PropColor;
        validator(value: PropColor): boolean;
    };
    size: {
        type: PropType<PropSize>;
        default: PropSize;
        validator(value: PropSize): boolean;
    };
    icon: {
        type: PropType<PropIcon>;
        default: PropIcon;
        validator(value: PropIcon): boolean;
    };
    loader: {
        type: PropType<PropLoader>;
        default: PropLoader;
        validator(value: PropLoader): boolean;
    };
    count: {
        type: NumberConstructor;
        default: number;
        validator(value: unknown): boolean;
    };
    counter: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    dropdown: {
        type: BooleanConstructor;
        default: boolean;
    };
    round: {
        type: BooleanConstructor;
        default: boolean;
    };
    noCaps: {
        type: BooleanConstructor;
        default: boolean;
    };
    menu: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    click: (...args: any[]) => void;
    "toggle-menu": (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    type: {
        type: PropType<PropTypeButton>;
        default: PropTypeButton;
        validator(value: PropTypeButton): boolean;
    };
    color: {
        type: PropType<PropColor>;
        default: PropColor;
        validator(value: PropColor): boolean;
    };
    size: {
        type: PropType<PropSize>;
        default: PropSize;
        validator(value: PropSize): boolean;
    };
    icon: {
        type: PropType<PropIcon>;
        default: PropIcon;
        validator(value: PropIcon): boolean;
    };
    loader: {
        type: PropType<PropLoader>;
        default: PropLoader;
        validator(value: PropLoader): boolean;
    };
    count: {
        type: NumberConstructor;
        default: number;
        validator(value: unknown): boolean;
    };
    counter: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    dropdown: {
        type: BooleanConstructor;
        default: boolean;
    };
    round: {
        type: BooleanConstructor;
        default: boolean;
    };
    noCaps: {
        type: BooleanConstructor;
        default: boolean;
    };
    menu: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{
    onClick?: ((...args: any[]) => any) | undefined;
    "onToggle-menu"?: ((...args: any[]) => any) | undefined;
}>, {
    type: PropTypeButton;
    menu: boolean;
    size: PropSize;
    color: PropColor;
    icon: PropIcon;
    loader: PropLoader;
    count: number;
    counter: boolean;
    disabled: boolean;
    dropdown: boolean;
    round: boolean;
    noCaps: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
