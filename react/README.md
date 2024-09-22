# react-bitrix24

[![NPM Version](https://img.shields.io/npm/v/react-bitrix24?style=flat&logo=npm&label=version&color=cb3837)](https://www.npmjs.com/package/react-bitrix24)
[![NPM Downloads](https://img.shields.io/npm/dw/react-bitrix24?style=flat&logo=npm&color=cb3837)](https://www.npmjs.com/package/react-bitrix24)
[![npm bundle size](https://img.shields.io/bundlephobia/min/react-bitrix24?style=flat&logo=npm&color=cb3837)](https://www.npmjs.com/package/react-bitrix24)

[![GitHub Repo stars](https://img.shields.io/github/stars/astrotrain55/ui-bitrix24?style=flat&logo=github)](https://github.com/astrotrain55/ui-bitrix24)
[![GitHub forks](https://img.shields.io/github/forks/astrotrain55/ui-bitrix24?style=flat&logo=github)](https://github.com/astrotrain55/ui-bitrix24)
[![GitHub Created At](https://img.shields.io/github/created-at/astrotrain55/ui-bitrix24?style=flat&logo=github)](https://github.com/astrotrain55/ui-bitrix24)

Component library in Bitrix24 style

## Install

```nodejs
npm i -S react-bitrix24@latest bitrix24-library@latest
```

## Use

```tsx
// App.tsx
import { BxButton, loadStyles } from 'react-bitrix24';
import Bitrix24 from 'bitrix24-library';

function App() {
  Bitrix24.init().then((BX24) => {
    loadStyles(BX24);
  });

  return <BxButton menu>BxButton</BxButton>;
}
```

## Components

### [Storybook](https://astrotrain55.github.io/ui-bitrix24/react)

- BxAlert
- BxButton
- BxCheckbox
- BxEntitySelector
- BxIcon
- BxInput
- BxInputFile
- BxProgressbar
- BxRadio
- BxTextarea

## Links

- [bitrix24-library](https://www.npmjs.com/package/bitrix24-library)
- [bitrix24-create-app](https://www.npmjs.com/package/bitrix24-create-app)
- [bitrix24-stickerpack-app](https://github.com/astrotrain55/bitrix24-stickerpack-app)
- [UI library](https://dev.1c-bitrix.ru/api_d7/bitrix/ui/index.php)