<template>
  <label class="ui-ctl ui-ctl-radio" :style="{ 'width': width }">
    <input
      class="ui-ctl-element"
      type="radio"
      :checked="isChecked"
      :value="value"
      :disabled="disabled"
      @change="$emit('change', $event.target.value)"
    >
    <div class="ui-ctl-label-text">
      <slot></slot>
    </div>
  </label>
</template>

<script>
import '../assets/ui/ui.font.opensans.min.css';
import '../assets/ui/ui.forms.min.css';

export default {
  computed: {
    isChecked() {
      return this.modelValue === this.value;
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
  },
  model: {
    prop: 'modelValue',
    event: 'change',
  },
  name: 'bx-radio',
};
</script>

<style lang="stylus">
.ui-ctl-radio
  cursor pointer
</style>
