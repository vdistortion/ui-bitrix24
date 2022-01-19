<template>
  <div class="ui-btn-container" :class="{
    'ui-btn-container-center': center,
    'ui-btn-container-right': right,
  }">
    <slot></slot>
  </div>
</template>

<script>
import '../assets/ui/ui.font.opensans.min.css';
import '../assets/ui/ui.buttons.css';

export default {
  props: {
    center: {
      type: Boolean,
      default: false,
    },
    right: {
      type: Boolean,
      default: false,
    },
  },
  name: 'bx-button-wrapper',
};
</script>

<style lang="stylus">
.ui-btn-container
  width 100%
.ui-btn-container-right
  text-align right
</style>
