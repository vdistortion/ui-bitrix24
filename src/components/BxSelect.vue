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
        :value="value"
        @change="$emit('change', $event.target.value)"
      >
        <slot></slot>
      </select>
    </template>
    <template v-else-if="type === 'search'">
      <input
        type="text"
        class="ui-ctl-element"
        :value="value"
        @change="$emit('change', $event.target.value)"
        @input="$emit('input', $event.target.value)"
      >
      <slot></slot>
    </template>
    <template v-else>
      <div class="ui-ctl-element">{{ value }}</div>
      <slot></slot>
    </template>
  </div>
</template>

<script>
import '../assets/ui/ui.font.opensans.min.css';
import '../assets/ui/ui.forms.min.css';

export default {
  props: {
    type: {
      type: String,
      default: 'default',
    },
    value: {
      type: String,
      default: '',
    },
  },
  name: 'bx-select',
};
</script>
