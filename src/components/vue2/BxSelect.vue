<template>
  <vue-select class="bx-select" :clearable="false" v-bind="$attrs" v-on="$listeners">
    <template v-if="!$slots['open-indicator']" #open-indicator="{ attributes }">
      <button class="ui-ctl-after ui-ctl-icon-angle" v-bind="attributes"></button>
    </template>
    <template v-for="slot in Object.keys($slots)" #[slot]="slotScope">
      <slot :name="slot" v-bind="slotScope"></slot>
    </template>
  </vue-select>
</template>

<script>
import VueSelect from 'vue2-select/dist/vue-select.js';
import injectStyles from '../../mixins/injectStyles';

export default {
  mixins: [injectStyles],
  components: {
    VueSelect,
  },
  name: 'bx-select',
};
</script>

<style>
@import 'vue2-select/dist/vue-select.css';

.bx-select:hover .vs__dropdown-toggle,
.bx-select.vs--open .vs__dropdown-toggle {
  border-color: #66afe9;
}

.bx-select .vs__dropdown-toggle {
  transition: border-color 0.5s;
}

.bx-select .vs__dropdown-toggle,
.bx-select .vs__selected {
  border-radius: 2px;
}

.bx-select .vs__selected {
  background-color: #bcedfc;
}
</style>
