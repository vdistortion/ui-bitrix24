<template>
  <div v-if="menu" class="ui-btn-split" :class="classList">
    <button class="ui-btn-main" :type="type" @click="$emit('click')">
      <slot></slot>
      <i v-if="counter" class="ui-btn-counter">{{ count }}</i>
    </button>
    <button class="ui-btn-menu" type="button" @click="$emit('toggle-menu')"></button>
  </div>
  <button v-else class="ui-btn" :class="classList" :type="type" @click="$emit('click')">
    <slot></slot>
    <i v-if="counter" class="ui-btn-counter">{{ count }}</i>
  </button>
</template>

<script>
export default {
  computed: {
    classList() {
      const colors = [
        'default', 'success', 'success-light', 'danger', 'danger-dark', 'danger-light',
        'primary', 'primary-dark', 'secondary', 'link', 'light', 'light-border',
      ];
      const icons = [
        'add', 'stop', 'start', 'pause', 'setting', 'task', 'info', 'search', 'follow', 'unfollow',
        'print', 'add-folder', 'list', 'business', 'business-confirm', 'business-warning', 'camera',
        'phone-up', 'phone-down', 'back', 'edit', 'share', 'remove', 'download', 'cloud', 'page',
        'chat', 'phone-call', 'lock', 'done', 'disk', 'mail', 'alert', 'angle-up', 'angle-down',
        'dots', 'forward', 'fail', 'success', 'plan', 'eye-opened', 'eye-closed', 'tariff',
        'battery', 'no-battery', 'half-battery', 'low-battery', 'crit-battery', 'demo',
      ];

      return {
        'ui-btn-disabled': this.disabled,
        'ui-btn-dropdown': this.dropdown,
        'ui-btn-round': this.round,
        'ui-btn-no-caps': this.noCaps,
        'ui-btn-clock': this.loader === 'clock',
        'ui-btn-wait': this.loader === 'wait',
        'ui-btn-xs': this.size === 'xs',
        'ui-btn-sm': this.size === 'sm',
        'ui-btn-md': this.size === 'md',
        'ui-btn-lg': this.size === 'lg',
        [`ui-btn-${this.color}`]: colors.includes(this.color),
        [`ui-btn-icon-${this.icon}`]: icons.includes(this.icon),
      };
    },
  },
  props: {
    type: {
      type: String,
      default: 'button',
    },
    color: {
      type: String,
      default: 'default',
    },
    size: {
      type: String,
      default: 'md',
    },
    icon: {
      type: String,
      default: '',
    },
    loader: {
      type: String,
      default: '',
    },
    count: {
      type: Number,
      default: 0,
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
};
</script>
