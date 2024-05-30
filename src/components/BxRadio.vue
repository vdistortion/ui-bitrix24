<template>
  <label class="bx-radio ui-ctl ui-ctl-radio">
    <input
      class="ui-ctl-element"
      type="radio"
      :checked="isChecked"
      :value="props.value"
      :disabled="props.disabled"
      @change="onChange"
    />
    <div class="ui-ctl-label-text">
      <slot></slot>
    </div>
  </label>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useStyles } from '../composable/useStyles';

useStyles();

const props = defineProps({
  modelValue: {
    type: [Boolean, String, Array, Object],
    default: '',
  },
  value: {
    type: [Boolean, String, Array, Object],
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['update:modelValue']);

const isChecked = computed(() => props.modelValue === props.value);

function onChange(event: Event) {
  const input = event.target as HTMLInputElement;
  emit('update:modelValue', input.value);
}
</script>

<style>
.ui-ctl-radio {
  cursor: pointer;
}

.bx-radio {
  width: 100%;
}
</style>
