import { createApp } from 'vue';
import App from './App.vue';
import { Bitrix24 } from './install';

Bitrix24.init().then((BX24) => {
  createApp(App).provide('$BX24', BX24).mount('#app');
});
