import Vue from 'vue';
import Example from './Example.vue';
import { Bitrix24 } from './install';

Vue.config.productionTip = false;

Bitrix24.init().then(($BX24) => {
  new Vue({
    provide: { $BX24 },
    render: (h) => h(Example),
  }).$mount('#app');
});
