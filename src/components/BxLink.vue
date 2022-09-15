<template>
  <a ref="link" :href="portal+href" target="_blank" @click.left.prevent="onClick">
    <slot></slot>
  </a>
</template>

<script>
export default {
  methods: {
    onClick() {
      this.$BX24.openLink(this.href, this.$refs.link.target);
    },
  },
  computed: {
    portal() {
      return this.$BX24.getDomain(true);
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
};
</script>
