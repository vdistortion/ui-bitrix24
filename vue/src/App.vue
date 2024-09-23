<template>
  <div style="display: flex; flex-direction: column; gap: 20px; margin-left: 200px">
    <bx-dialog visible-footer>
      <bx-tag-selector
        :list="users"
        display-field-name="name"
        display-field-icon="icon"
        icon
        placeholder="поиск"
        show-input-text
        :show-add-button="false"
      ></bx-tag-selector>
    </bx-dialog>
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue';
import BxDialog from './components/BxDialog.vue';
import BxTagSelector from './components/BxTagSelector.vue';
import type { ItemType } from './components/BxTagSelector.props';

const users: ItemType[] = [
  {
    link: '/company/personal/user/648/',
    name: 'Валентин Золотов',
    icon: 'https://cdn-ru.bitrix24.ru/teamr/resize_cache/406111/7acf4cadf975128573a8b1c2766af5d8/main/083/083bb1c93b3f0ea32baf3942a5ac6831/T02A7V6EGBA-U02AWPPB8KW-8358c0c61795-512.png',
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
