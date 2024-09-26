import { PropType } from 'vue';
import { ItemType } from './BxTagSelector.props';
declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    list: {
        type: PropType<ItemType[]>;
        default: () => ItemType[];
    };
    placeholder: {
        type: PropType<string>;
        default: string;
    };
    displayFieldName: {
        type: PropType<string>;
        default: string;
    };
    displayFieldLink: {
        type: PropType<string>;
        default: string;
    };
    displayFieldIcon: {
        type: PropType<string>;
        default: string;
    };
    defaultIcon: {
        type: PropType<string>;
        default: import('./BxTagSelector.props').PropDefaultIcons;
    };
    textAddButton: {
        type: PropType<string>;
        default: string;
    };
    textCreateButton: {
        type: PropType<string>;
        default: string;
    };
    textMoreButton: {
        type: PropType<string>;
        default: string;
    };
    textChangeButton: {
        type: PropType<string>;
        default: string;
    };
    showAddButton: {
        type: PropType<boolean>;
        default: boolean;
    };
    showCreateButton: {
        type: PropType<boolean>;
        default: boolean;
    };
    showInputText: {
        type: PropType<boolean>;
        default: boolean;
    };
    clickable: {
        type: PropType<boolean>;
        default: boolean;
    };
    multiple: {
        type: PropType<boolean>;
        default: boolean;
    };
    inline: {
        type: PropType<boolean>;
        default: boolean;
    };
    icon: {
        type: PropType<boolean>;
        default: boolean;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    input: (...args: any[]) => void;
    auxclick: (...args: any[]) => void;
    click: (...args: any[]) => void;
    add: (...args: any[]) => void;
    delete: (...args: any[]) => void;
    create: (...args: any[]) => void;
    enter: (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    list: {
        type: PropType<ItemType[]>;
        default: () => ItemType[];
    };
    placeholder: {
        type: PropType<string>;
        default: string;
    };
    displayFieldName: {
        type: PropType<string>;
        default: string;
    };
    displayFieldLink: {
        type: PropType<string>;
        default: string;
    };
    displayFieldIcon: {
        type: PropType<string>;
        default: string;
    };
    defaultIcon: {
        type: PropType<string>;
        default: import('./BxTagSelector.props').PropDefaultIcons;
    };
    textAddButton: {
        type: PropType<string>;
        default: string;
    };
    textCreateButton: {
        type: PropType<string>;
        default: string;
    };
    textMoreButton: {
        type: PropType<string>;
        default: string;
    };
    textChangeButton: {
        type: PropType<string>;
        default: string;
    };
    showAddButton: {
        type: PropType<boolean>;
        default: boolean;
    };
    showCreateButton: {
        type: PropType<boolean>;
        default: boolean;
    };
    showInputText: {
        type: PropType<boolean>;
        default: boolean;
    };
    clickable: {
        type: PropType<boolean>;
        default: boolean;
    };
    multiple: {
        type: PropType<boolean>;
        default: boolean;
    };
    inline: {
        type: PropType<boolean>;
        default: boolean;
    };
    icon: {
        type: PropType<boolean>;
        default: boolean;
    };
}>> & Readonly<{
    onInput?: ((...args: any[]) => any) | undefined;
    onAuxclick?: ((...args: any[]) => any) | undefined;
    onClick?: ((...args: any[]) => any) | undefined;
    onAdd?: ((...args: any[]) => any) | undefined;
    onDelete?: ((...args: any[]) => any) | undefined;
    onCreate?: ((...args: any[]) => any) | undefined;
    onEnter?: ((...args: any[]) => any) | undefined;
}>, {
    icon: boolean;
    inline: boolean;
    list: ItemType[];
    placeholder: string;
    multiple: boolean;
    displayFieldName: string;
    displayFieldLink: string;
    displayFieldIcon: string;
    defaultIcon: string;
    textAddButton: string;
    textCreateButton: string;
    textMoreButton: string;
    textChangeButton: string;
    showAddButton: boolean;
    showCreateButton: boolean;
    showInputText: boolean;
    clickable: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
