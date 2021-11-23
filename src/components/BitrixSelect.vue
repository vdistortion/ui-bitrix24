<template>
  <select class="bitrix-select" v-model="content" @change="$emit('input', content)">
    <slot></slot>
  </select>
</template>

<script>
export default {
  watch: {
    value() {
      this.content = this.value;
    },
  },
  data() {
    return {
      content: this.value,
    };
  },
  props: {
    value: {
      default: '',
    },
  },
  name: 'bitrix-select',
};
</script>

<style lang="stylus">
.bitrix-select
  display block
  box-sizing border-box
  padding 10px 9px
  min-height 30px
  width auto
  outline 0
  border 1px solid #c4c7cc
  border-radius 1px
  background-color #fff
  color #424956
  font-size 15px
  transition 220ms all ease
</style>
