import React from 'react';
import ReactDOM from 'react-dom/client';
import { Bitrix24 } from 'bitrix24-library';
import App from './App';

const rootElement = ReactDOM.createRoot(document.getElementById('root')!);

Bitrix24()
  .then((BX24) => {
    rootElement.render(
      <React.StrictMode>
        <App BX24={BX24} />
      </React.StrictMode>,
    );
  })
  .catch(() => {
    rootElement.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    );
  });
