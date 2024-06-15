import { PropType } from '../../vue/dist/vue.esm-bundler.js';

declare const _default: import('../../vue/dist/vue.esm-bundler.js').DefineComponent<{
    list: {
        type: PropType<any[]>;
        default: () => any[];
    };
    displayField: {
        type: StringConstructor;
        default: string;
    };
    displayFieldLink: {
        type: StringConstructor;
        default: string;
    };
    textAdd: {
        type: StringConstructor;
        default: string;
    };
    textMore: {
        type: StringConstructor;
        default: string;
    };
    textChange: {
        type: StringConstructor;
        default: string;
    };
    clickable: {
        type: BooleanConstructor;
        default: boolean;
    };
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    inline: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {}, unknown, {}, {}, import('../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {
    click: (...args: any[]) => void;
    add: (...args: any[]) => void;
    delete: (...args: any[]) => void;
    auxclick: (...args: any[]) => void;
}, string, import('../../vue/dist/vue.esm-bundler.js').PublicProps, Readonly<import('../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    list: {
        type: PropType<any[]>;
        default: () => any[];
    };
    displayField: {
        type: StringConstructor;
        default: string;
    };
    displayFieldLink: {
        type: StringConstructor;
        default: string;
    };
    textAdd: {
        type: StringConstructor;
        default: string;
    };
    textMore: {
        type: StringConstructor;
        default: string;
    };
    textChange: {
        type: StringConstructor;
        default: string;
    };
    clickable: {
        type: BooleanConstructor;
        default: boolean;
    };
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    inline: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onAuxclick?: ((...args: any[]) => any) | undefined;
    onClick?: ((...args: any[]) => any) | undefined;
    onAdd?: ((...args: any[]) => any) | undefined;
    onDelete?: ((...args: any[]) => any) | undefined;
}, {
    inline: boolean;
    list: any[];
    displayField: string;
    displayFieldLink: string;
    textAdd: string;
    textMore: string;
    textChange: string;
    clickable: boolean;
    multiple: boolean;
}, {}>;
export default _default;
