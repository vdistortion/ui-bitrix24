<template>
  <div style="display: flex; flex-direction: column; gap: 20px">
    <bx-dialog></bx-dialog>
    <bx-tag-selector :list="users" display-field-name="name">
      <BxIcon icon="common-user" size="xs"></BxIcon>
    </bx-tag-selector>
    <bx-tag-selector
      :list="users"
      display-field-name="name"
      icon
      default-icon="default-user"
    ></bx-tag-selector>
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue';
import BxIcon from './components/BxIcon.vue';
import BxDialog from './components/BxDialog.vue';
import BxTagSelector from './components/BxTagSelector.vue';
import type { ItemType } from './components/BxTagSelector.props';

const users: ItemType[] = [
  {
    link: '/company/personal/user/150/',
    name: 'Администратор',
  },
  {
    link: '/company/personal/user/151/',
    name: 'Админ',
    icon: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png',
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
