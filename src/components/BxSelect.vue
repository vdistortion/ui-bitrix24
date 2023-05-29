<template>
  <vue-select
    class="bx-select"
    :clearable="$attrs.multiple"
    v-bind="$attrs"
    style="width: 100%;"
  >
    <template #open-indicator="{ attributes }">
      <button class="ui-ctl-after ui-ctl-icon-angle" v-bind="attributes"></button>
    </template>
    <template v-for="slot in Object.keys($slots)" v-slot:[slot]="slotScope">
      <slot :name="slot" v-bind="slotScope"></slot>
    </template>
  </vue-select>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import VueSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';

export default defineComponent({
  components: {
    VueSelect,
  },
  name: 'bx-select',
});
</script>

<style lang="stylus">
.bx-select
  &:hover .vs__dropdown-toggle
  &.vs--open .vs__dropdown-toggle
    border-color #66afe9
  .vs__dropdown-toggle
    transition border-color .5s
  .vs__dropdown-toggle
  .vs__selected
    border-radius 2px
  .vs__selected
    background-color #bcedfc
</style>
