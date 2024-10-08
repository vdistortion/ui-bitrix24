# react-bitrix24

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
- BxIcon
- BxInput
- BxInputFile
- BxProgressbar
- BxRadio
- BxTagSelector
- BxTextarea

## Links

- [UI library [EN]](https://training.bitrix24.com/api_d7/bitrix/ui/index.php)
- [UI library [RU]](https://dev.1c-bitrix.ru/api_d7/bitrix/ui/index.php)
