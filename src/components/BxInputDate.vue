<template>
  <vue-datepicker
    :modelValue="modelValue"
    modelType="format"
    format="dd.MM.yyyy"
    locale="ru"
    :enableTimePicker="false"
    :clearable="false"
    autoApply
    textInput
    v-bind="$attrs"
    @update:modelValue="$emit('update:modelValue', $event)"
  >
    <template #dp-input="{ value, onInput, onEnter, onTab }">
      <div
        class="ui-ctl"
        :class="{
          'ui-ctl-after-icon': after === 'after',
          'ui-ctl-ext-after-icon': after === 'ext-after',
        }"
        :style="{ width }"
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
          :placeholder="$attrs.placeholder"
          @input="onInput"
          @keydown.enter="onEnter"
          @keydown.tab="onTab"
        >
      </div>
    </template>
  </vue-datepicker>
</template>

<script>
import VueDatepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

export default {
  emits: ['update:modelValue'],
  props: {
    modelValue: {
      type: String,
      default: '',
    },
    after: {
      type: String,
      default: 'after',
    },
    width: {
      type: String,
      default: '320px',
    },
  },
  components: {
    VueDatepicker,
  },
  name: 'bx-input-date',
};
</script>
