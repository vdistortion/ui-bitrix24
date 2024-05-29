<template>
  <vue-datepicker
    :model-value="modelValue"
    :placeholder="placeholder"
    @update:model-value="$emit('update:modelValue', $event)"
  >
    <template #dp-input="{ value, onInput, onEnter, onTab }">
      <div
        class="ui-ctl"
        :class="{
          'ui-ctl-after-icon': after === 'after',
          'ui-ctl-ext-after-icon': after === 'ext-after',
        }"
        style="width: 100%"
      >
        <button
          class="ui-ctl-icon-calendar"
          :class="{
            'ui-ctl-after': after === 'after',
            'ui-ctl-ext-after': after === 'ext-after',
          }"
        ></button>
        <input
          class="ui-ctl-element"
          type="text"
          :value="value"
          :placeholder="placeholder"
          @input="onInput"
          @keydown.enter="onEnter"
          @keydown.tab="onTab"
        />
      </div>
    </template>
  </vue-datepicker>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import VueDatepicker from '@vuepic/vue-datepicker';
import injectStyles from '../mixins/injectStyles';

export type PropAfter = 'after' | 'ext-after';

export type TypesProps = {
  after: PropAfter[];
};

export const props: TypesProps = {
  after: ['after', 'ext-after'],
};

export default defineComponent({
  props: {
    modelValue: {
      type: [Date, Number, String, Object, Array, null],
      required: true,
      default: null,
    },
    placeholder: {
      type: String,
      default: '',
    },
    after: {
      type: String as PropType<PropAfter>,
      default: 'after',
      validator(value: PropAfter) {
        return props.after.includes(value);
      },
    },
  },
  emits: ['update:modelValue'],
  components: { VueDatepicker },
  mixins: [injectStyles],
});
</script>

<style>
@import '@vuepic/vue-datepicker/dist/main.css';
</style>
