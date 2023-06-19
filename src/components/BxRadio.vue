<template>
  <label class="ui-ctl ui-ctl-radio" :style="{ 'width': width }">
    <input
      class="ui-ctl-element"
      type="radio"
      :checked="isChecked"
      :value="value"
      :disabled="disabled"
      @change="$emit('update:modelValue', $event.target.value)"
    >
    <div class="ui-ctl-label-text">
      <slot></slot>
    </div>
  </label>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { loadStyles } from '../utils/loadStyles';

export default defineComponent({
  computed: {
    isChecked() {
      return this.modelValue === this.value;
    },
  },
  created() {
    loadStyles();
  },
  emits: ['update:modelValue'],
  props: {
    modelValue: {
      type: [Boolean, String, Array, Object],
      default: '',
    },
    value: {
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
  name: 'bx-radio',
});
</script>

<style>
.ui-ctl-radio {
  cursor: pointer;
}
</style>
