export type Props = {
    list: any[];
    displayField: string;
    displayFieldLink: string;
    textAdd: string;
    textMore: string;
    textChange: string;
    clickable: boolean;
    multiple: boolean;
    inline: boolean;
    onClick: (key: number, item: any) => void;
    onAuxClick: (key: number, item: any) => void;
    onAdd: () => void;
    onDelete: (key: number, item: any) => void;
};
export declare const defaultProps: Omit<Props, 'onClick' | 'onAuxClick' | 'onAdd' | 'onDelete'>;
