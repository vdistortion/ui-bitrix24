<template>
  <button
    class="bx-btn"
    :class="{
      primary: color === 'primary',
      outline: color === 'outline',
      success: color === 'success',
      danger: color === 'danger',
      'bx-xs': size === 'xs' || !size,
      'bx-sm': size === 'sm',
      'bx-md': size === 'md',
      'bx-lg': size === 'lg'
    }"
    v-on="$listeners"
  >
    <svg v-if="loading" class="spinner" viewBox="0 0 50 50">
      <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
    </svg>
    <slot v-else></slot>
  </button>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: '',
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  name: 'bitrix-button',
};
</script>

<style lang="stylus">
@import '~@/assets/vars.styl'

.bx-btn
  .spinner
    animation rotate 2s linear infinite
    position absolute
    margin auto
    left 0
    right 0
    top 0
    bottom 0
  &.bx-xs
    height 26px
    line-height 28px
    .spinner
      width 12px
      height 12px
      .path
        stroke-linecap round
        animation dash 1.5s ease-in-out infinite
  &.bx-sm
    height 31px
    line-height 31px
    .spinner
      width 14px
      height 14px
      .path
        stroke-linecap round
        animation dash 1.5s ease-in-out infinite
  &.bx-lg
    height 47px
    line-height 47px
    .spinner
      width 18px
      height 18px
      .path
        stroke-linecap round
        animation dash 1.5s ease-in-out infinite
  &.bx-md
    height 39px
    line-height 39px
    .spinner
      width 16px
      height 16px
      .path
        stroke-linecap round
        animation dash 1.5s ease-in-out infinite
.bx-btn.outline.bx-xs
  height 22px
  line-height 22px
.bx-btn.outline.bx-sm
  height 27px
  line-height 27px
.bx-btn.outline.bx-md
  height 35px
  line-height 35px
.bx-btn.outline.bx-lg
  height 47px
  line-height 47px
.bx-btn
  outline none
  padding 0 20px
  font-family 'Open Sans', sans-serif
  font-size 12px
  text-transform uppercase
  font-weight bold
  cursor pointer
  border-radius 2px
  transition .3s
  position relative
.bx-btn:disabled
  background-color $btn-disabled-background !important
  color $btn-disabled-color !important
  border none
  cursor default !important
  opacity 0.8 !important
  &:hover
    background-color $btn-disabled-background-hover !important
  .spinner .path
    stroke $btn-disabled-color
.bx-btn.primary
  background-color $btn-primary-background
  color $btn-primary-color
  border none
  &:hover
    background-color $btn-primary-background-hover
  .spinner .path
    stroke $btn-primary-color
.bx-btn.danger
  background-color $btn-danger-background
  color $btn-danger-color
  border none
  &:hover
    background-color $btn-danger-background-hover
  .spinner .path
    stroke $btn-danger-color
.bx-btn.success
  background-color $btn-success-background
  color $btn-success-color
  border none
  &:hover
    background-color $btn-success-background-hover
  .spinner .path
    stroke $btn-success-color
.bx-btn.outline
  background-color transparent
  color $btn-outline-color
  border 2px solid $btn-outline-border
  padding 0 20px
  &:hover
    background-color $btn-outline-background-hover
    color $btn-outline-color-hover
  .spinner .path
    stroke $btn-outline-color

@keyframes rotate
  100%
    transform rotate(360deg)
@keyframes dash
  0%
    stroke-dasharray 1, 150
    stroke-dashoffset 0
  50%
    stroke-dasharray 90, 150
    stroke-dashoffset -35
  100%
    stroke-dasharray 90, 150
    stroke-dashoffset -124
</style>
