export type ItemType = Record<string, string>;
export type PropDefaultIcons = 'default-tag-user' | 'default-user' | 'extranet-user' | 'department';
type TypesProps = {
    defaultIcons: PropDefaultIcons[];
};
type Props = {
    list: ItemType[];
    placeholder: string;
    displayFieldName: string;
    displayFieldLink: string;
    displayFieldIcon: string;
    defaultIcon: PropDefaultIcons;
    textAddButton: string;
    textCreateButton: string;
    textMoreButton: string;
    textChangeButton: string;
    showAddButton: boolean;
    showCreateButton: boolean;
    showInputText: boolean;
    clickable: boolean;
    multiple: boolean;
    inline: boolean;
    icon: boolean;
};
export declare const propsValues: TypesProps;
export declare const defaultProps: Props;
export {};
