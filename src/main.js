import Vue from 'vue';
import App from './App.vue';
import Bitrix24 from './install';

Vue.config.productionTip = false;
Vue.use(Bitrix24);

Bitrix24.init(true).then(($BX24) => {
  new Vue({
    provide: { $BX24 },
    render: (h) => h(App),
  }).$mount('#app');
});
