# vue-bitrix24

Библиотека vue-компонентов в стилистике Bitrix24

## Установка

```nodejs
npm i -S vue-bitrix24@latest bitrix24-library@latest
```

## Подключение
```js
// plugins/vue-bitrix24.js
import BxButton from 'vue-bitrix24/BxButton';
import BxInput from 'vue-bitrix24/BxInput';

export default {
  install(app) {
    [BxButton, BxInput].forEach((Component) => {
      app.component(Component.name, Component);
    });
  },
};

// или экспорт всех компонентов
import usePlugin from 'vue-bitrix24';
import 'vue-bitrix24/css';

export default usePlugin;
```
```js
// main.js
import { createApp } from 'vue';
import Bitrix24 from 'bitrix24-library';
import useBitrix24 from './plugins/vue-bitrix24';
import App from './App.vue';

Bitrix24.init().then((BX42) => {
  createApp(App)
    .provide('$BX24', BX24)
    .use(useBitrix24)
    .mount('#app');
});
```

## Компоненты

### [Storybook](https://astrotrain55.github.io/vue-bitrix24/)

* bx-alert
* bx-button
* bx-checkbox
* bx-entity-selector
* bx-icon
* bx-input
* bx-input-file
* bx-progressbar
* bx-radio
* bx-textarea

## Ссылки

* [UI-библиотека](https://dev.1c-bitrix.ru/api_d7/bitrix/ui/index.php)
* [bitrix24-library](https://www.npmjs.com/package/bitrix24-library)
* [bitrix24-create-app](https://www.npmjs.com/package/bitrix24-create-app)
* [bitrix24-stickerpack-app](https://github.com/astrotrain55/bitrix24-stickerpack-app)
