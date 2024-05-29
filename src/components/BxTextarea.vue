<template>
  <div
    class="ui-ctl ui-ctl-textarea"
    :class="{
      'ui-ctl-no-resize': resize === 'no',
      'ui-ctl-resize-y': resize === 'y',
      'ui-ctl-resize-x': resize === 'x',
    }"
  >
    <textarea
      class="ui-ctl-element"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      @input="onInput"
    ></textarea>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import injectStyles from '../mixins/injectStyles';

export type PropResizes = '' | 'no' | 'y' | 'x';

export type TypesProps = {
  resizes: PropResizes[];
};

export const props: TypesProps = {
  resizes: ['', 'no', 'y', 'x'],
};

export default defineComponent({
  methods: {
    onInput(event: Event) {
      const input = event.target as HTMLInputElement;
      this.$emit('update:modelValue', input.value);
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
        return props.resizes.includes(value);
      },
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  name: 'bx-textarea',
});
</script>
