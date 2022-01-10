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
      @change="$emit('change', $event.target.value)"
    >
      <slot></slot>
    </select>
    <input
      v-else-if="slotType === 'input'"
      class="ui-ctl-element"
      :type="type === 'datetime' ? 'datetime-local' : type"
      :value="$slots.default[0].text"
      @input="$emit('input', $event.target.value)"
      @change="$emit('change', $event.target.value)"
    >
    <div v-else class="ui-ctl-element">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    isTagIcon() {
      if (this.slotType === 'input' && this.type === 'text') return 'button';
      if (this.slotType === 'default') return 'button';
      return 'div';
    },
  },
  props: {
    slotType: {
      type: String,
      default: 'default',
    },
    type: {
      type: String,
      default: 'text',
    },
    after: {
      type: String,
      default: 'after',
    },
  },
  name: 'bx-input-date',
};
</script>
