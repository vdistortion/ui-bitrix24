<template>
  <div>
    <bx-input-date v-model="date" placeholder="BxInputDate" after="after"></bx-input-date>
    <bx-select label="name" :options="countries" :clearable="false"></bx-select>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BxInputDate from './examples/ExampleInputDate.vue';
import BxSelect from './examples/ExampleSelect.vue';
import countries from './utils/countries';

export default defineComponent({
  data() {
    return {
      countries,
      date: null,
    };
  },
  components: { BxInputDate, BxSelect },
  mounted() {
    if (!this.$BX24) return;
    console.info(this.$BX24);
  },
  inject: ['$BX24'],
  name: 'app',
});
</script>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}
</style>
