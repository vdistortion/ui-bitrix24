import { createApp } from 'vue';
import { Bitrix24 } from 'bitrix24-library';
import App from './App.vue';

Bitrix24().then((BX24) => {
  createApp(App).provide('$BX24', BX24).mount('#app');
});
