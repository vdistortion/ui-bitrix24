### Использование метода .createBatch():
```js
const RestCall = this.$BX24.createBatch(handlerList);

RestCall.batch(options)
  .then(console.info)
  .catch(console.error);
```

* `options` аналогичен параметру `calls` в методе [callBatch](https://dev.1c-bitrix.ru/rest_help/js_library/rest/callBatch.php)
* `handlerList` — объект с обработчиками ответа, ключи идентичны `options`

### Пример:
```js
const options = {
  app: ['app.info'],
  user: ['user.current'],
  users: ['user.get', {
    FILTER: {
      USER_TYPE: 'employee',
    },
  }],
};

const handlerList = {
  app: (app) => `/marketplace/view/${app.CODE}/`,
  user: (user) => user.ID,
};

const RestCall = this.$BX24.createBatch(handlerList);

RestCall.batch(options)
  .then(console.info)
  .catch(console.error);

/**
{
  app: "/marketplace/view/local.6485686a9e5003.21815363/"
  user: "1"
  users: Array [ {…} ]
}
**/
```
