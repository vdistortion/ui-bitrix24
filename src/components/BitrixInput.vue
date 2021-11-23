<template>
  <div class="bitrix-input">
    <input
      v-if="type !== 'checkbox'"
      v-model="content"
      :class="{ invalid: !valid && validation }"
      :type="type"
      @change="$emit('change', content)"
      @input="$emit('input', content)"
    >
    <label v-else class="checkbox-container">
      <div class="checkbox-label">{{ label }}</div>
      <input
        v-model="content"
        type="checkbox"
        @change="$emit('input', content)"
      >
      <span class="checkbox-mark"></span>
    </label>
  </div>
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
    type: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    valid: {
      type: Boolean,
      default: false,
    },
    validation: {
      type: Boolean,
      default: false,
    },
  },
  name: 'bitrix-input',
};
</script>

<style lang="stylus">
@import '~@/assets/vars.styl'

.bitrix-input
  input
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
  input.invalid
    border 1px solid #f5222d
  .checkbox-container
    display block
    position relative
    width 25px
    padding-left 0
    height auto
    margin-bottom 0 !important
    cursor pointer
    font-size 22px
    user-select none
  .checkbox-container input
    opacity 0
    cursor pointer
    height 0
    width 0
  .checkbox-mark
    position absolute
    top 0
    left 0
    height 25px
    width 25px
    background-color #eee
    border-radius 2px
  .checkbox-label
    margin-left 35px
    line-height 25px
    width 300px
    font-size 16px
  .checkbox-container:hover input ~ .checkbox-mark
    background-color #ccc
  .checkbox-container input:checked ~ .checkbox-mark
    background-color $btn-primary-background
  .checkbox-mark:after
    content ""
    position absolute
    display none
  .checkbox-container input:checked ~ .checkbox-mark:after
    display block
  .checkbox-container input
    display none
  .checkbox-container .checkbox-mark:after
    left 9px
    top 5px
    width 5px
    height 10px
    border solid white
    border-width 0 3px 3px 0
    transform rotate(45deg)
    box-sizing content-box
</style>
