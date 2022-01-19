<template>
  <div
    class="ui-alert"
    :class="{
      'ui-alert-md': size === 'md',
      'ui-alert-xs': size === 'xs',
      'ui-alert-default': color === 'default',
      'ui-alert-primary': color === 'primary',
      'ui-alert-success': color === 'success',
      'ui-alert-warning': color === 'warning',
      'ui-alert-danger': color === 'danger',
      'ui-alert-icon-warning': icon === 'warning',
      'ui-alert-icon-danger': icon === 'danger',
      'ui-alert-icon-info': icon === 'info',
      'ui-alert-text-center': center,
      'ui-alert-inline': inline,
    }"
  >
    <span class="ui-alert-message">
      <strong v-if="title"> {{ title }} </strong>
      <slot></slot>
    </span>
    <span class="ui-alert-close-btn" @click="$emit('close')"></span>
  </div>
</template>

<script>
import '../assets/ui/ui.font.opensans.min.css';
import '../assets/ui/ui.alert.css';

export default {
  props: {
    title: {
      type: String,
      default: 'Внимание!',
    },
    size: {
      type: String,
      default: 'md',
    },
    color: {
      type: String,
      default: 'default',
    },
    icon: {
      type: String,
      default: '',
    },
    center: {
      type: Boolean,
      default: false,
    },
    inline: {
      type: Boolean,
      default: false,
    },
  },
  name: 'bx-alert',
};
</script>
