<template>
  <div class="ui-progressbar" :class="classList">
    <div v-if="textBefore" class="ui-progressbar-text-before">{{ textBefore }}</div>
    <div class="ui-progressbar-track">
      <div class="ui-progressbar-bar" :style="{ width }"></div>
    </div>
    <div v-if="textAfter" class="ui-progressbar-text-after">{{ textAfter }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export const props = {
  sizes: ['md', 'lg'],
  colors: ['primary', 'success', 'warning', 'danger'],
};

export default defineComponent({
  computed: {
    width() {
      return `${this.progress}%`;
    },
    classList() {
      return {
        [`ui-progressbar-${this.size}`]: props.sizes.includes(this.size),
        [`ui-progressbar-${this.color}`]: props.colors.includes(this.color),
        'ui-progressbar-bg': this.bg,
        'ui-progressbar-column': this.column,
      };
    },
  },
  props: {
    progress: {
      type: Number,
      default: 0,
      validator(value) {
        return Number.isFinite(value);
      },
    },
    size: {
      type: String,
      default: 'md',
      validator(value) {
        return props.sizes.includes(value);
      },
    },
    color: {
      type: String,
      default: 'primary',
      validator(value) {
        return props.colors.includes(value);
      },
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
});
</script>
