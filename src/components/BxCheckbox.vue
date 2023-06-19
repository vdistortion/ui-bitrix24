<template>
  <label class="ui-ctl ui-ctl-checkbox" :style="{ 'width': width }">
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

<script lang="ts">
import { defineComponent } from 'vue';
import { loadStyles } from '../utils/loadStyles';

export default defineComponent({
  methods: {
    updateInput(event) {
      const isChecked = event.target.checked;
      const newValue = [...this.modelValue];

      if (isChecked) {
        newValue.push(this.value);
      } else {
        newValue.splice(newValue.indexOf(this.value), 1);
      }

      this.$emit('update:modelValue', newValue);
    },
  },
  computed: {
    isChecked() {
      return this.modelValue.includes(this.value);
    },
  },
  created() {
    loadStyles();
  },
  emits: ['update:modelValue'],
  props: {
    modelValue: {
      type: Array,
      default: () => [],
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
  name: 'bx-checkbox',
});
</script>

<style>
.ui-ctl-checkbox {
  cursor: pointer;
}
</style>
