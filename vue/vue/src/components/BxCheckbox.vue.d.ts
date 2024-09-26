declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    modelValue: {
        type: ArrayConstructor;
        default: () => any[];
    };
    value: {
        type: (ObjectConstructor | StringConstructor | BooleanConstructor | ArrayConstructor)[];
        default: any;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    modelValue: {
        type: ArrayConstructor;
        default: () => any[];
    };
    value: {
        type: (ObjectConstructor | StringConstructor | BooleanConstructor | ArrayConstructor)[];
        default: any;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}>, {
    disabled: boolean;
    modelValue: unknown[];
    value: string | boolean | Record<string, any> | unknown[];
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
