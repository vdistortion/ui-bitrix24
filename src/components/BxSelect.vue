<template>
  <div class="ui-ctl ui-ctl-after-icon ui-ctl-dropdown">
    <component
      :is="type === 'select' ? 'div' : 'button'"
      class="ui-ctl-after ui-ctl-icon-angle"
      @click="$emit('click')"
    ></component>
    <template v-if="type === 'select'">
      <select
        class="ui-ctl-element"
        :value="modelValue"
        @change="$emit('update:modelValue', $event.target.value)"
      >
        <slot></slot>
      </select>
    </template>
    <template v-else-if="type === 'search'">
      <input
        type="text"
        class="ui-ctl-element"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
      >
    </template>
  </div>
</template>

<script>
export default {
  emits: ['click', 'update:modelValue'],
  props: {
    modelValue: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'select',
    },
  },
  name: 'bx-select',
};
</script>
