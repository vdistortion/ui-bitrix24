<template>
  <label class="bx-checkbox ui-ctl ui-ctl-checkbox">
    <input
      class="ui-ctl-element"
      type="checkbox"
      :checked="isChecked"
      :value="value"
      :disabled="disabled"
      @change="updateInput"
    />
    <div class="ui-ctl-label-text">
      <slot></slot>
    </div>
  </label>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import injectStyles from '../mixins/injectStyles';

export default defineComponent({
  methods: {
    updateInput(event: Event) {
      const input = event.target as HTMLInputElement;
      const isChecked = input.checked;
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
  mixins: [injectStyles],
  model: {
    prop: 'modelValue',
    event: 'update:modelValue',
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

.bx-checkbox {
  width: 100%;
}
</style>
