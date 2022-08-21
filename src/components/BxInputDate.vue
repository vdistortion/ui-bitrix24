<template>
  <div
    class="ui-ctl"
    :class="{
      'ui-ctl-date': type === 'date',
      'ui-ctl-time': type === 'time',
      'ui-ctl-datetime': type === 'datetime',
      'ui-ctl-after-icon': after === 'after',
      'ui-ctl-ext-after-icon': after === 'ext-after',
    }"
  >
    <component
      :is="isTagIcon"
      class="ui-ctl-icon-calendar"
      :class="{
        'ui-ctl-after': after === 'after',
        'ui-ctl-ext-after': after === 'ext-after',
      }"
      @click="$emit('click')"
    ></component>
    <select
      v-if="slotType === 'select'"
      class="ui-ctl-element"
      :value="modelValue"
      @change="$emit('update:modelValue', $event.target.value)"
    >
      <slot></slot>
    </select>
    <input
      v-else-if="slotType === 'input'"
      class="ui-ctl-element"
      :type="type === 'datetime' ? 'datetime-local' : type"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    >
  </div>
</template>

<script>
import '../assets/ui/ui.font.opensans.min.css';
import '../assets/ui/ui.forms.min.css';

export default {
  computed: {
    isTagIcon() {
      if (this.slotType === 'input' && this.type === 'text') return 'button';
      if (this.slotType === 'default') return 'button';
      return 'div';
    },
  },
  emits: ['click', 'update:modelValue'],
  props: {
    modelValue: {
      type: String,
      default: '',
    },
    slotType: {
      type: String,
      default: 'input',
    },
    type: {
      type: String,
      default: 'date',
    },
    after: {
      type: String,
      default: 'after',
    },
  },
  name: 'bx-input-date',
};
</script>
