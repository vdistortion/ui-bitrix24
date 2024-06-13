<template>
  <div
    class="ui-ctl ui-ctl-textarea"
    :class="{
      'ui-ctl-no-resize': props.resize === 'no',
      'ui-ctl-resize-y': props.resize === 'y',
      'ui-ctl-resize-x': props.resize === 'x',
    }"
  >
    <textarea
      class="ui-ctl-element"
      :value="props.modelValue"
      :placeholder="props.placeholder"
      :disabled="props.disabled"
      @input="onInput"
    ></textarea>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import { defaultProps, type PropResize, propsValues } from './BxTextarea.props';
import { useStyles } from '../composable/useStyles';

useStyles();

const props = defineProps({
  modelValue: {
    type: String,
    default: defaultProps.value,
  },
  placeholder: {
    type: String,
    default: defaultProps.placeholder,
  },
  resize: {
    type: String as PropType<PropResize>,
    default: defaultProps.resize,
    validator(value: PropResize) {
      return propsValues.resizes.includes(value);
    },
  },
  disabled: {
    type: Boolean,
    default: defaultProps.disabled,
  },
});

const emit = defineEmits(['update:modelValue']);

function onInput(event: Event) {
  const input = event.target as HTMLInputElement;
  emit('update:modelValue', input.value);
}
</script>
