<template>
  <label v-if="old" class="checkbox-container" :style="{ 'width': width }">
    <div class="checkbox-label">
      <slot></slot>
    </div>
    <input
      type="checkbox"
      :checked="isChecked"
      :value="value"
      :disabled="disabled"
      @change="updateInput"
    >
    <span class="checkbox-mark"></span>
  </label>
  <label v-else class="ui-ctl ui-ctl-checkbox" :style="{ 'width': width }">
    <input
      class="ui-ctl-element"
      type="checkbox"
      :checked="isChecked"
      :value="value"
      :disabled="disabled"
      @change="updateInput"
    >
    <div class="ui-ctl-label-text">
      <slot></slot>
    </div>
  </label>
</template>

<script>
export default {
  methods: {
    updateInput(event) {
      const isChecked = event.target.checked;

      if (Array.isArray(this.modelValue)) {
        const newValue = [...this.modelValue];

        if (isChecked) {
          newValue.push(this.value);
        } else {
          newValue.splice(newValue.indexOf(this.value), 1);
        }

        this.$emit('change', newValue);
      } else {
        this.$emit('change', Boolean(isChecked));
      }
    },
  },
  computed: {
    isChecked() {
      if (Array.isArray(this.modelValue)) return this.modelValue.includes(this.value);
      return this.modelValue === true;
    },
  },
  props: {
    value: {
      type: [Boolean, String, Array, Object],
      default: '',
    },
    modelValue: {
      type: [Boolean, String, Array, Object],
      default: '',
    },
    width: {
      type: String,
      default: '320px',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    old: {
      type: Boolean,
      default: false,
    },
  },
  model: {
    prop: 'modelValue',
    event: 'change',
  },
  name: 'bx-checkbox',
};
</script>

<style lang="stylus">
.ui-ctl-checkbox
  cursor pointer

.checkbox-container
  display block
  position relative
  padding-left 0
  margin-bottom 0 !important
  cursor pointer
  font-size 22px
  user-select none
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
    font-size 16px
  &:hover input ~ .checkbox-mark
    background-color #cccccc
  input:checked ~ .checkbox-mark
    background-color #3bc8f5
  &:hover input:checked ~ .checkbox-mark
    background-color #3eddff
  input[disabled] ~ .checkbox-mark
    opacity .4
  &:hover input[disabled] ~ .checkbox-mark
    opacity .5
  .checkbox-mark:after
    content ""
    position absolute
    display none
  input:checked ~ .checkbox-mark:after
    display block
  .checkbox-mark:after
    left 9px
    top 5px
    width 5px
    height 10px
    border solid white
    border-width 0 3px 3px 0
    transform rotate(45deg)
    box-sizing content-box
  input
    display none
</style>
