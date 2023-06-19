<template>
  <a :href="href" target="_blank" @click="onClick" @auxclick="onMiddleClick">
    <slot></slot>
  </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  methods: {
    onClick(e) {
      if (this.$BX24) {
        e.preventDefault();
        this.$BX24.openLink(this.href);
      }
    },
    onMiddleClick(e) {
      if (this.$BX24) {
        e.preventDefault();
        this.$BX24.openLink(this.href, true);
      }
    },
  },
  inject: ['$BX24'],
  props: {
    href: {
      type: String,
      required: true,
      validator(value) {
        return typeof value === 'string';
      },
    },
  },
  name: 'bx-link',
});
</script>
