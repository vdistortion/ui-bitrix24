import { PropType } from '../../vue/dist/vue.esm-bundler.js';
import { PropColor, PropSize } from './BxProgressbar.props';

declare const _default: import('../../vue/dist/vue.esm-bundler.js').DefineComponent<{
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
}, {}, unknown, {}, {}, import('../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {}, string, import('../../vue/dist/vue.esm-bundler.js').PublicProps, Readonly<import('../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
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
}>>, {
    progress: number;
    size: PropSize;
    color: PropColor;
    textBefore: string;
    textAfter: string;
    bg: boolean;
    column: boolean;
}, {}>;
export default _default;
