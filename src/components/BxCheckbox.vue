<template>
  <label class="bx-checkbox ui-ctl ui-ctl-checkbox">
    <input
      class="ui-ctl-element"
      type="checkbox"
      :checked="isChecked"
      :value="props.value"
      :disabled="props.disabled"
      @change="updateInput"
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
});

const emit = defineEmits(['update:modelValue']);

const isChecked = computed(() => props.modelValue.includes(props.value));

function updateInput(event: Event) {
  const input = event.target as HTMLInputElement;
  const isChecked = input.checked;
  const newValue = [...props.modelValue];

  if (isChecked) {
    newValue.push(props.value);
  } else {
    newValue.splice(newValue.indexOf(props.value), 1);
  }

  emit('update:modelValue', newValue);
}
</script>

<style>
.ui-ctl-checkbox {
  cursor: pointer;
}

.bx-checkbox {
  width: 100%;
}
</style>
