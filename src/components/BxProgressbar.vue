<template>
  <div class="ui-progressbar" :class="classList">
    <div v-if="textBefore" class="ui-progressbar-text-before">{{ textBefore }}</div>
    <div class="ui-progressbar-track">
      <div class="ui-progressbar-bar" :style="{ width }"></div>
    </div>
    <div v-if="textAfter" class="ui-progressbar-text-after">{{ textAfter }}</div>
  </div>
</template>

<script>
export default {
  computed: {
    width() {
      return `${this.progress}%`;
    },
    classList() {
      return {
        'ui-progressbar-lg': this.size === 'lg',
        'ui-progressbar-md': this.size === 'md',
        'ui-progressbar-primary': this.color === 'primary',
        'ui-progressbar-success': this.color === 'success',
        'ui-progressbar-warning': this.color === 'warning',
        'ui-progressbar-danger': this.color === 'danger',
        'ui-progressbar-bg': this.bg,
        'ui-progressbar-column': this.column,
      };
    },
  },
  props: {
    progress: {
      type: Number,
      default: 0,
    },
    size: {
      type: String,
      default: 'md',
    },
    color: {
      type: String,
      default: 'primary',
    },
    textBefore: {
      type: String,
      default: '',
    },
    textAfter: {
      type: String,
      default: '',
    },
    bg: {
      type: Boolean,
      default: false,
    },
    column: {
      type: Boolean,
      default: false,
    },
  },
  name: 'bx-progressbar',
};
</script>
