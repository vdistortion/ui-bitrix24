<template>
  <div v-if="menu" class="ui-btn-split" :class="classList">
    <button
      class="ui-btn-main"
      :type="type"
      :disabled="disabled"
      @click="$emit('click')"
    >
      <slot></slot>
      <i v-if="counter" class="ui-btn-counter">{{ count }}</i>
    </button>
    <button
      class="ui-btn-menu"
      type="button"
      :disabled="disabled"
      @click="$emit('toggle-menu')"
    ></button>
  </div>
  <button
    v-else
    class="ui-btn"
    :class="classList"
    :type="type"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <slot></slot>
    <i v-if="counter" class="ui-btn-counter">{{ count }}</i>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import injectStyles from '../mixins/injectStyles';

export const props = {
  types: ['button', 'submit', 'reset'],
  colors: [
    'default', 'success', 'success-light', 'danger', 'danger-dark', 'danger-light', 'primary',
    'primary-dark', 'secondary', 'link', 'light', 'light-border',
  ],
  sizes: ['xs', 'sm', 'md', 'lg'],
  icons: [
    '', 'add', 'stop', 'start', 'pause', 'setting', 'task', 'info', 'search', 'follow', 'unfollow',
    'print', 'add-folder', 'list', 'business', 'business-confirm', 'business-warning', 'camera',
    'phone-up', 'phone-down', 'back', 'edit', 'share', 'remove', 'download', 'cloud', 'page',
    'chat', 'phone-call', 'lock', 'done', 'disk', 'mail', 'alert', 'angle-up', 'angle-down', 'dots',
    'forward', 'fail', 'success', 'plan', 'eye-opened', 'eye-closed', 'tariff', 'battery',
    'no-battery', 'half-battery', 'low-battery', 'crit-battery', 'demo',
  ],
  loaders: ['', 'clock', 'wait'],
};

export default defineComponent({
  computed: {
    classList() {
      return {
        [`ui-btn-${this.color}`]: props.colors.includes(this.color),
        [`ui-btn-${this.size}`]: props.sizes.includes(this.size),
        [`ui-btn-icon-${this.icon}`]: this.icon && props.icons.includes(this.icon),
        [`ui-btn-${this.loader}`]: this.loader && props.loaders.includes(this.loader),
        'ui-btn-disabled': this.disabled,
        'ui-btn-dropdown': this.dropdown,
        'ui-btn-round': this.round,
        'ui-btn-no-caps': this.noCaps,
      };
    },
  },
  mixins: [injectStyles],
  emits: ['click', 'toggle-menu'],
  props: {
    type: {
      type: String,
      default: 'button',
      validator(value) {
        return typeof value === 'string' && props.types.includes(value);
      },
    },
    color: {
      type: String,
      default: 'default',
      validator(value) {
        return typeof value === 'string' && props.colors.includes(value);
      },
    },
    size: {
      type: String,
      default: 'md',
      validator(value) {
        return typeof value === 'string' && props.sizes.includes(value);
      },
    },
    icon: {
      type: String,
      default: '',
      validator(value) {
        return typeof value === 'string' && props.icons.includes(value);
      },
    },
    loader: {
      type: String,
      default: '',
      validator(value) {
        return typeof value === 'string' && props.loaders.includes(value);
      },
    },
    count: {
      type: Number,
      default: 0,
      validator(value) {
        return Number.isFinite(value);
      },
    },
    counter: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    dropdown: {
      type: Boolean,
      default: false,
    },
    round: {
      type: Boolean,
      default: false,
    },
    noCaps: {
      type: Boolean,
      default: false,
    },
    menu: {
      type: Boolean,
      default: false,
    },
  },
  name: 'bx-button',
});
</script>
