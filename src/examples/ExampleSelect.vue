<template>
  <vue-select class="bx-select" :options="options" :label="label" :clearable="clearable">
    <template #open-indicator="{ attributes }">
      <button class="ui-ctl-after ui-ctl-icon-angle" v-bind="attributes"></button>
    </template>
  </vue-select>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import VueSelect from 'vue-select';
import injectStyles from '../mixins/injectStyles';

export default defineComponent({
  props: {
    clearable: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: '',
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  components: { VueSelect },
  mixins: [injectStyles],
});
</script>

<style>
@import 'vue-select/dist/vue-select.css';

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
