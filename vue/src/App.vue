<template>
  <div style="display: flex; flex-direction: column; gap: 20px">
    <bx-dialog></bx-dialog>
    <bx-tag-selector :tags="users" placeholder="placeholder"></bx-tag-selector>
    <bx-tag-selector :tags="users" hidden-text-box></bx-tag-selector>
    <bx-entity-selector></bx-entity-selector>
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue';
import BxDialog from './components/BxDialog.vue';
import BxTagSelector from './components/BxTagSelector.vue';
import BxEntitySelector from './components/BxEntitySelector.vue';

const users = [
  {
    link: '/company/personal/user/150/',
    name: 'Администратор Админ',
  },
  {
    link: '/company/personal/user/150/',
    name: 'Администратор Админ',
  },
];

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
