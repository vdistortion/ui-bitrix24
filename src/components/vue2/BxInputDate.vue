<template>
  <date-picker
    class="bx-input-date"
    format="DD.MM.YYYY"
    :clearable="false"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <template v-if="!$slots['input']" #input="slotScope">
      <div
        class="ui-ctl"
        :class="{
          'ui-ctl-after-icon': after === 'after',
          'ui-ctl-ext-after-icon': after === 'ext-after',
        }"
        style="width: 100%;"
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
          v-bind="slotScope.props"
          v-on="slotScope.events"
        >
      </div>
    </template>
    <template v-if="!$slots['icon-calendar']" #icon-calendar>
      <span></span>
    </template>
    <template v-for="slot in Object.keys($slots)" #[slot]="slotScope">
      <slot :name="slot" v-bind="slotScope"></slot>
    </template>
  </date-picker>
</template>

<script>
import DatePicker from 'vue2-datepicker';
import injectStyles from '../../mixins/injectStyles';

export const props = {
  after: ['after', 'ext-after'],
};

export default {
  mixins: [injectStyles],
  props: {
    after: {
      type: String,
      default: 'after',
      validator(value) {
        return typeof value === 'string' && props.after.includes(value);
      },
    },
  },
  components: {
    DatePicker,
  },
  name: 'bx-input-date',
};
</script>

<style>
@import 'vue2-datepicker/index.css';

.bx-input-date {
  width: 100%;
}
</style>
