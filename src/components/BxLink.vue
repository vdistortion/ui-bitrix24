<template>
  <a :href="href" @click.left.prevent="onClick">
    <slot></slot>
  </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  methods: {
    onClick() {
      if (this.$BX24) this.$BX24.openLink(this.href);
    },
  },
  inject: ['$BX24'],
  props: {
    href: {
      type: String,
      required: true,
    },
  },
  name: 'bx-link',
});
</script>
