import { createApp } from 'vue';
import App from './App.vue';
import { Bitrix24 } from './install';

Bitrix24.init(['https://code.jquery.com/jquery-3.6.1.min.js', 'https://code.jquery.com/jquery-3.6.0.min.js']).then((BX24) => {
  createApp(App).provide('$BX24', BX24).mount('#app');
});
