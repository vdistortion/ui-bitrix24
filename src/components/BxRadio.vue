<template>
  <label class="ui-ctl ui-ctl-radio" :class="$style['bx-radio']">
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
import { defaultProps } from './BxRadio.props';
import { useStyles } from '../composable/useStyles';

useStyles();

const props = defineProps({
  modelValue: {
    type: [Boolean, String, Array, Object],
    default: defaultProps.value,
  },
  value: {
    type: [Boolean, String, Array, Object],
    default: defaultProps.value,
  },
  disabled: {
    type: Boolean,
    default: defaultProps.disabled,
  },
});

const emit = defineEmits(['update:modelValue']);

const isChecked = computed(() => props.modelValue === props.value);

function onChange(event: Event) {
  const input = event.target as HTMLInputElement;
  emit('update:modelValue', input.value);
}
</script>

<style module>
.bx-radio {
  cursor: pointer;
  width: 100%;
}
</style>
