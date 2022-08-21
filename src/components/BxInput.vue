<template>
  <div
    class="ui-ctl ui-ctl-textbox ui-ctl-active ui-ctl-hover"
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
    :style="{
      'max-width': this.width || 'initial',
      'width': this.width || 'auto',
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
        'ui-ctl-tag-success': tagColor === 'success',
        'ui-ctl-tag-primary': tagColor === 'primary',
        'ui-ctl-tag-danger': tagColor === 'danger',
        'ui-ctl-tag-warning': tagColor === 'warning',
      }"
      >{{ tag }}</div>
    <input
      type="text"
      class="ui-ctl-element"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      @change="$emit('change', $event.target.value)"
      @input="$emit('update:modelValue', $event.target.value)"
    >
  </div>
</template>

<script>
import '../assets/ui/ui.font.opensans.min.css';
import '../assets/ui/ui.forms.min.css';

export default {
  emits: ['change', 'click-after', 'click-before', 'update:modelValue'],
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
      type: String,
      default: 'md',
    },
    color: {
      type: String,
      default: '',
    },
    width: {
      type: String,
      default: '',
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
      type: String,
      default: 'default',
    },
    beforeIcon: {
      type: String,
      default: '',
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
      type: String,
      default: '',
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
};
</script>

<style lang="stylus">
.ui-ctl-ext-before
  left 1px
</style>
