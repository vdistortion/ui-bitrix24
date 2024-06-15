declare const _default: __VLS_WithTemplateSlots<import('../../vue/dist/vue.esm-bundler.js').DefineComponent<{
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
}, {}, unknown, {}, {}, import('../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
}, string, import('../../vue/dist/vue.esm-bundler.js').PublicProps, Readonly<import('../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
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
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    modelValue: unknown[];
    value: string | boolean | unknown[] | Record<string, any>;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
