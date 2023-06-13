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

export default defineComponent({
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

        this.$emit('update:modelValue', newValue);
      } else {
        this.$emit('update:modelValue', Boolean(isChecked));
      }
    },
  },
  computed: {
    isChecked() {
      if (Array.isArray(this.modelValue)) return this.modelValue.includes(this.value);
      return this.modelValue === true;
    },
  },
  emits: ['update:modelValue'],
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
  name: 'bx-checkbox',
});
</script>

<style>
.ui-ctl-checkbox {
  cursor: pointer;
}
</style>
