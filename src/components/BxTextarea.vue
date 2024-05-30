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

<script lang="ts">
export type PropResizes = '' | 'no' | 'y' | 'x';

export type TypesProps = {
  resizes: PropResizes[];
};

export const propsValues: TypesProps = {
  resizes: ['', 'no', 'y', 'x'],
};
</script>

<script setup lang="ts">
import type { PropType } from 'vue';
import { useStyles } from '../composable/useStyles';

useStyles();

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
  resize: {
    type: String as PropType<PropResizes>,
    default: '',
    validator(value: PropResizes) {
      return propsValues.resizes.includes(value);
    },
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['update:modelValue']);

function onInput(event: Event) {
  const input = event.target as HTMLInputElement;
  emit('update:modelValue', input.value);
}
</script>
