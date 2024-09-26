import { PropType } from 'vue';
import { PropIcon, PropSize } from './BxIcon.props';
declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    icon: {
        type: PropType<PropIcon>;
        default: PropIcon;
        validator(value: PropIcon): boolean;
    };
    size: {
        type: PropType<PropSize>;
        default: PropSize;
        validator(value: PropSize): boolean;
    };
    button: {
        type: BooleanConstructor;
        default: boolean;
    };
    square: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    icon: {
        type: PropType<PropIcon>;
        default: PropIcon;
        validator(value: PropIcon): boolean;
    };
    size: {
        type: PropType<PropSize>;
        default: PropSize;
        validator(value: PropSize): boolean;
    };
    button: {
        type: BooleanConstructor;
        default: boolean;
    };
    square: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{}>, {
    button: boolean;
    size: PropSize;
    icon: PropIcon;
    square: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
