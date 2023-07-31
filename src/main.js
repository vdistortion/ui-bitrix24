import { createApp } from 'vue';
import Bitrix24 from 'bitrix24-library';
import useBitrix24 from './lib';
import App from './App.vue';

Bitrix24.init().then((BX24) => {
  createApp(App).provide('$BX24', BX24).use(useBitrix24).mount('#app');
});
