<template>
  <div></div>
</template>

<script setup lang="ts">
import { inject } from 'vue';

const $BX24 = inject('$BX24');
console.log({ $BX24 });
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
