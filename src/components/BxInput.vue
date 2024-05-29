<template>
  <div
    class="bx-input ui-ctl ui-ctl-textbox"
    :class="{
      'ui-ctl-lg': size === 'lg',
      'ui-ctl-md': size === 'md',
      'ui-ctl-sm': size === 'sm',
      'ui-ctl-xs': size === 'xs',
      'ui-ctl-success': color === 'success',
      'ui-ctl-warning': color === 'warning',
      'ui-ctl-danger': color === 'danger',
      'ui-ctl-before-icon': beforeIcon && !beforeExt,
      'ui-ctl-ext-before-icon': beforeIcon && beforeExt,
      'ui-ctl-after-icon': afterIcon && !afterExt,
      'ui-ctl-ext-after-icon': afterIcon && afterExt,
      'ui-ctl-inline': inline,
      'ui-ctl-no-border': noBorder,
      'ui-ctl-underline': underline,
      'ui-ctl-no-padding': noPadding,
      'ui-ctl-round': round,
    }"
  >
    <component
      v-if="beforeIcon"
      :is="beforeButton ? 'button' : 'div'"
      :class="{
        'ui-ctl-before': !beforeExt,
        'ui-ctl-ext-before': beforeExt,
        'ui-ctl-icon-search': beforeIcon === 'search',
        'ui-ctl-icon-calendar': beforeIcon === 'calendar',
        'ui-ctl-icon-dots': beforeIcon === 'dots',
        'ui-ctl-icon-phone': beforeIcon === 'phone',
        'ui-ctl-icon-mail': beforeIcon === 'mail',
        'ui-ctl-icon-clock': beforeIcon === 'clock',
        'ui-ctl-icon-angle': beforeIcon === 'angle',
        'ui-ctl-icon-clear': beforeIcon === 'clear',
        'ui-ctl-icon-loader': beforeIcon === 'loader',
      }"
      @click="$emit('click-before')"
    ></component>
    <component
      v-if="afterIcon"
      :is="afterButton ? 'button' : 'div'"
      :class="{
        'ui-ctl-after': !afterExt,
        'ui-ctl-ext-after': afterExt,
        'ui-ctl-icon-search': afterIcon === 'search',
        'ui-ctl-icon-calendar': afterIcon === 'calendar',
        'ui-ctl-icon-dots': afterIcon === 'dots',
        'ui-ctl-icon-phone': afterIcon === 'phone',
        'ui-ctl-icon-mail': afterIcon === 'mail',
        'ui-ctl-icon-clock': afterIcon === 'clock',
        'ui-ctl-icon-angle': afterIcon === 'angle',
        'ui-ctl-icon-clear': afterIcon === 'clear',
        'ui-ctl-icon-loader': afterIcon === 'loader',
      }"
      @click="$emit('click-after')"
    ></component>
    <div
      v-if="tag"
      class="ui-ctl-tag"
      :class="{
        '--tag_light': tagColor === 'light',
        '--tag_light-blue': tagColor === 'light-blue',
      }"
    >
      {{ tag }}
    </div>
    <input
      type="text"
      class="ui-ctl-element"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      @input="onEmit($event, 'update:modelValue')"
      @change="onEmit($event, 'change')"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import injectStyles from '../mixins/injectStyles';

export type PropSizes = 'lg' | 'md' | 'sm' | 'xs';
export type PropColors = '' | 'success' | 'warning' | 'danger';
export type PropIcons =
  | ''
  | 'search'
  | 'calendar'
  | 'dots'
  | 'phone'
  | 'mail'
  | 'clock'
  | 'angle'
  | 'clear'
  | 'loader';
export type PropTagColors = 'default' | 'light' | 'light-blue';

export type TypesProps = {
  sizes: PropSizes[];
  colors: PropColors[];
  icons: PropIcons[];
  tagColors: PropTagColors[];
};

export const props: TypesProps = {
  sizes: ['lg', 'md', 'sm', 'xs'],
  colors: ['', 'success', 'warning', 'danger'],
  icons: ['', 'search', 'calendar', 'dots', 'phone', 'mail', 'clock', 'angle', 'clear', 'loader'],
  tagColors: ['default', 'light', 'light-blue'],
};

export default defineComponent({
  methods: {
    onEmit(event: Event, eventName: 'change' | 'update:modelValue') {
      const input = event.target as HTMLInputElement;
      this.$emit(eventName, input.value);
    },
  },
  mixins: [injectStyles],
  model: {
    prop: 'modelValue',
    event: 'update:modelValue',
  },
  emits: ['update:modelValue', 'change', 'click-before', 'click-after'],
  props: {
    modelValue: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String as PropType<PropSizes>,
      default: 'md',
      validator(value: PropSizes) {
        return props.sizes.includes(value);
      },
    },
    color: {
      type: String as PropType<PropColors>,
      default: '',
      validator(value: PropColors) {
        return props.colors.includes(value);
      },
    },
    inline: {
      type: Boolean,
      default: false,
    },
    noBorder: {
      type: Boolean,
      default: false,
    },
    underline: {
      type: Boolean,
      default: false,
    },
    noPadding: {
      type: Boolean,
      default: false,
    },
    round: {
      type: Boolean,
      default: false,
    },
    tag: {
      type: String,
      default: '',
    },
    tagColor: {
      type: String as PropType<PropTagColors>,
      default: 'default',
      validator(value: PropTagColors) {
        return props.tagColors.includes(value);
      },
    },
    beforeIcon: {
      type: String as PropType<PropIcons>,
      default: '',
      validator(value: PropIcons) {
        return props.icons.includes(value);
      },
    },
    beforeExt: {
      type: Boolean,
      default: false,
    },
    beforeButton: {
      type: Boolean,
      default: false,
    },
    afterIcon: {
      type: String as PropType<PropIcons>,
      default: '',
      validator(value: PropIcons) {
        return props.icons.includes(value);
      },
    },
    afterExt: {
      type: Boolean,
      default: false,
    },
    afterButton: {
      type: Boolean,
      default: false,
    },
  },
  name: 'bx-input',
});
</script>

<style>
.ui-ctl-ext-before {
  left: 1px;
}

.bx-input {
  width: 100%;
}
</style>
