# vue-bitrix24
[![NPM Version](https://img.shields.io/npm/v/vue-bitrix24?style=flat&logo=npm&label=version&color=cb3837)](https://www.npmjs.com/package/vue-bitrix24)
[![NPM Downloads](https://img.shields.io/npm/dw/vue-bitrix24?style=flat&logo=npm&color=cb3837)](https://www.npmjs.com/package/vue-bitrix24)
[![GitHub repo size](https://img.shields.io/github/repo-size/astrotrain55/to-webp-json?style=flat&logo=github)](https://github.com/astrotrain55/vue-bitrix24)
[![GitHub Repo stars](https://img.shields.io/github/stars/astrotrain55/vue-bitrix24?style=flat&logo=github)](https://github.com/astrotrain55/vue-bitrix24)

Component library in Bitrix24 style

## Install

```nodejs
npm i -S vue-bitrix24@latest bitrix24-library@latest
```

## Use
```ts
// plugins/vue-bitrix24.ts
import BxButton from 'vue-bitrix24/BxButton';
import BxInput from 'vue-bitrix24/BxInput';

export default {
  install(app) {
    [['bx-button', BxButton], ['bx-input', BxInput]]
      .forEach(([name, Component]) => {
        app.component(name, Component);
      });
  },
};

// or export all components
import usePlugin from 'vue-bitrix24';
import 'vue-bitrix24/css';

export default usePlugin;
```
```ts
// main.ts
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

## Components

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

## Links

* [react-bitrix24](https://www.npmjs.com/package/react-bitrix24)
* [bitrix24-library](https://www.npmjs.com/package/bitrix24-library)
* [bitrix24-create-app](https://www.npmjs.com/package/bitrix24-create-app)
* [bitrix24-stickerpack-app](https://github.com/astrotrain55/bitrix24-stickerpack-app)


* [UI library](https://dev.1c-bitrix.ru/api_d7/bitrix/ui/index.php)
