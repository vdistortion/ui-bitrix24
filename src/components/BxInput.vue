<template>
  <div
    class="bx-input ui-ctl ui-ctl-textbox"
    :class="{
      'ui-ctl-lg': props.size === 'lg',
      'ui-ctl-md': props.size === 'md',
      'ui-ctl-sm': props.size === 'sm',
      'ui-ctl-xs': props.size === 'xs',
      'ui-ctl-success': props.color === 'success',
      'ui-ctl-warning': props.color === 'warning',
      'ui-ctl-danger': props.color === 'danger',
      'ui-ctl-before-icon': props.beforeIcon && !props.beforeExt,
      'ui-ctl-ext-before-icon': props.beforeIcon && props.beforeExt,
      'ui-ctl-after-icon': props.afterIcon && !props.afterExt,
      'ui-ctl-ext-after-icon': props.afterIcon && props.afterExt,
      'ui-ctl-inline': props.inline,
      'ui-ctl-no-border': props.noBorder,
      'ui-ctl-underline': props.underline,
      'ui-ctl-no-padding': props.noPadding,
      'ui-ctl-round': props.round,
    }"
  >
    <component
      v-if="props.beforeIcon"
      :is="props.beforeButton ? 'button' : 'div'"
      :class="{
        'ui-ctl-before': !props.beforeExt,
        'ui-ctl-ext-before': props.beforeExt,
        'ui-ctl-icon-search': props.beforeIcon === 'search',
        'ui-ctl-icon-calendar': props.beforeIcon === 'calendar',
        'ui-ctl-icon-dots': props.beforeIcon === 'dots',
        'ui-ctl-icon-phone': props.beforeIcon === 'phone',
        'ui-ctl-icon-mail': props.beforeIcon === 'mail',
        'ui-ctl-icon-clock': props.beforeIcon === 'clock',
        'ui-ctl-icon-angle': props.beforeIcon === 'angle',
        'ui-ctl-icon-clear': props.beforeIcon === 'clear',
        'ui-ctl-icon-loader': props.beforeIcon === 'loader',
      }"
      @click="$emit('click-before')"
    ></component>
    <component
      v-if="props.afterIcon"
      :is="props.afterButton ? 'button' : 'div'"
      :class="{
        'ui-ctl-after': !props.afterExt,
        'ui-ctl-ext-after': props.afterExt,
        'ui-ctl-icon-search': props.afterIcon === 'search',
        'ui-ctl-icon-calendar': props.afterIcon === 'calendar',
        'ui-ctl-icon-dots': props.afterIcon === 'dots',
        'ui-ctl-icon-phone': props.afterIcon === 'phone',
        'ui-ctl-icon-mail': props.afterIcon === 'mail',
        'ui-ctl-icon-clock': props.afterIcon === 'clock',
        'ui-ctl-icon-angle': props.afterIcon === 'angle',
        'ui-ctl-icon-clear': props.afterIcon === 'clear',
        'ui-ctl-icon-loader': props.afterIcon === 'loader',
      }"
      @click="$emit('click-after')"
    ></component>
    <div
      v-if="props.tag"
      class="ui-ctl-tag"
      :class="{
        '--tag_light': props.tagColor === 'light',
        '--tag_light-blue': props.tagColor === 'light-blue',
      }"
    >
      {{ props.tag }}
    </div>
    <input
      type="text"
      class="ui-ctl-element"
      :value="props.modelValue"
      :placeholder="props.placeholder"
      :disabled="props.disabled"
      @input="onEmit($event, 'update:modelValue')"
      @change="onEmit($event, 'change')"
    />
  </div>
</template>

<script lang="ts">
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

export const propsValues: TypesProps = {
  sizes: ['lg', 'md', 'sm', 'xs'],
  colors: ['', 'success', 'warning', 'danger'],
  icons: ['', 'search', 'calendar', 'dots', 'phone', 'mail', 'clock', 'angle', 'clear', 'loader'],
  tagColors: ['default', 'light', 'light-blue'],
};
</script>

<script setup lang="ts">
import type { PropType } from 'vue';
import { useStyles } from '../composable/useStyles';

useStyles();

const props = defineProps({
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
      return propsValues.sizes.includes(value);
    },
  },
  color: {
    type: String as PropType<PropColors>,
    default: '',
    validator(value: PropColors) {
      return propsValues.colors.includes(value);
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
      return propsValues.tagColors.includes(value);
    },
  },
  beforeIcon: {
    type: String as PropType<PropIcons>,
    default: '',
    validator(value: PropIcons) {
      return propsValues.icons.includes(value);
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
      return propsValues.icons.includes(value);
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
});

const emit = defineEmits(['update:modelValue', 'change', 'click-before', 'click-after']);

function onEmit(event: Event, eventName: 'change' | 'update:modelValue') {
  const input = event.target as HTMLInputElement;
  emit(eventName, input.value);
}
</script>

<style>
.ui-ctl-ext-before {
  left: 1px;
}

.bx-input {
  width: 100%;
}
</style>
