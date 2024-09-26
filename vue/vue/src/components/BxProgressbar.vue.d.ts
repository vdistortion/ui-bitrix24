import { PropType } from 'vue';
import { PropColor, PropSize } from './BxProgressbar.props';
declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    progress: {
        type: NumberConstructor;
        default: number;
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
    textBefore: {
        type: StringConstructor;
        default: string;
    };
    textAfter: {
        type: StringConstructor;
        default: string;
    };
    bg: {
        type: BooleanConstructor;
        default: boolean;
    };
    column: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    progress: {
        type: NumberConstructor;
        default: number;
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
    textBefore: {
        type: StringConstructor;
        default: string;
    };
    textAfter: {
        type: StringConstructor;
        default: string;
    };
    bg: {
        type: BooleanConstructor;
        default: boolean;
    };
    column: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{}>, {
    progress: number;
    size: PropSize;
    color: PropColor;
    textBefore: string;
    textAfter: string;
    bg: boolean;
    column: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
