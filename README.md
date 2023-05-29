# vue-bitrix24

Promise-обёртка для работы с JavaScript REST API Bitrix24, библиотека компонентов в стилистике Bitrix24 и набор новых методов

## Установка

```nodejs
npm i vue-bitrix24
```

## Подключение
```js
// plugins/vue-bitrix24.js
import { Bitrix24, BxButton } from 'vue-bitrix24';
import 'vue-bitrix24/css';
// или
import Bitrix24 from 'vue-bitrix24/Library';
import BxButton from 'vue-bitrix24/BxButton';

const useBitrix24 = {
  install(app) {
    [BxButton].forEach((Component) => {
      app.component(Component.name, Component);
    });
  },
};

export { Bitrix24, useBitrix24 };

// main.js
import { createApp } from 'vue';
import { Bitrix24, useBitrix24 } from './plugins/vue-bitrix24';
import App from './App.vue';

Bitrix24.init().then((BX24) => {
  createApp(App)
    .use(useBitrix24)
    .provide('$BX24', BX24)
    .mount('#app');
});
```
`.init([scripts[, css]])` — можно передать список скриптов (см. метод `.loadScripts`), а также отменить загрузку стилей с портала (например если ui не нужен)

## Вызов методов
```js
export default {
  mounted() {
    console.log(this.$BX24.getAuth());

    const RestCall = this.$BX24.createBatch();
    RestCall.batch({
      info: ['app.info'],
      profile: ['profile'],
    }).then(console.log);
  },
  inject: ['$BX24'],
};
```

## Компоненты

[Demo](https://astrotrain55.github.io/vue-bitrix24/)
* bx-alert
* bx-button
* bx-checkbox
* bx-entity-selector
* bx-icon
* bx-input
* bx-input-date
* bx-input-file
* bx-link
* bx-progressbar
* bx-radio
* bx-select
* bx-textarea

## Битрикс24
* [Документация по REST API](https://dev.1c-bitrix.ru/rest_help/js_library/)
* [UI-библиотека](https://dev.1c-bitrix.ru/api_d7/bitrix/ui/index.php)

### Системные функции

* `.init()` — Добавляет в список обработчик события "библиотека готова к работе"

* `.install([callback])` — Возможность установить обработчик события "приложение запускается первый раз для текущего пользователя". Если в качестве обработчика передана строка, то она считается ссылкой на js-файл, который нужно загрузить и выполнить при срабатывании события

* `.installFinish()` — Функция, сигнализирующая об окончании работы инсталлятора или настройщика приложения

* `.getAuth()` — Получение текущих данных для авторизации через OAuth 2.0

* `.refreshAuth()` — Принудительное обновление ключа авторизации

### Вызов методов REST

* `.callMethod(method[, params])` — Метод вызывает указанный метод REST-сервиса с указанными параметрами

* `.callBatch(calls[, bHaltOnError])` — Пакетное выполнение запросов по несколько элементов (в настоящий момент не более, чем по 50)

* `.callBind(event, handler[, authType[, callback]])` — Интерфейс, регистрирующий новый обработчик события

* `.callUnbind(event, handler[, authType[, callback]])` — Интерфейс, удаляющий зарегистрированный обработчик события

### Настройки приложения

* `.userOption` — Работа с настройками текущего пользователя

* `.appOption` — Работа с общими настройками приложения. Установка значений настроек приложения доступа только пользователям с правом управления приложением (`.isAdmin()`)

### Показ системных диалогов

* `.selectUser()` — Показать стандартный диалог одиночного выбора пользователя

* `.selectUsers()` — Показать стандартный диалог множественного выбора пользователей

* `.selectAccess([value])` — Показать стандартный диалог выбора прав доступа

* `.selectCRM([params])` — Показать стандартный диалог выбора сущности CRM

### Встраивание приложений

* `.placement.info()` — Получение информации о контексте вызова

* `.placement.getInterface()` — Получение информации о js-интерфейсе текущего места встраивания: списке возможных команд и событий

* `.placement.call(command, params)` — Вызов зарегистрированной команды интерфейса

* `.placement.bindEvent(eventName)` — Установка обработчика события интерфейса

### Дополнительные методы

* `.isAdmin()` — Определяет, имеет ли текущий пользователь права на управление приложениями

* `.getLang()` — Возвращает идентификатор языка текущего портала

* `.resizeWindow(width, height)` — Изменяет размер фрейма с приложением

* `.fitWindow()` — Устанавливает размер фрейма с приложением в соответствии с размерами содержимого фрейма

* `.reloadWindow()` — Перезагружает страницу портала с приложением

* `.setTitle(title)` — Устанавливает заголовок страницы

* `.ready()` — Устанавливает обработчик события "DOM-структура документа готова к работе"

* `.isReady()` — Флаг "DOM-структура документа готова к работе"

* `.proxy(thisObject)` — Аналогична [BX.proxy](https://training.bitrix24.com/api_help/js_lib/kernel/events/bx_proxy.php)

* `.closeApplication()` — Метод закрывает открытое модальное окно с приложением

* `.getDomain([isOrigin])` — Возвращает адрес портала Битрикс24

* `.openApplication(params)` — Метод открывает приложение

* `.openPath(path[, callback])` — Метод открывает указанный путь внутри портала в слайдере

* `.proxyContext()` — При вызове изнутри прокси-функцию выдаст ссылку на оригинальный контекст выполнения прокси-функции

* `.scrollParentWindow(scroll)` — Метод прокручивает родительское окно

* `.bind(element, eventName, callback)` — Устанавливает функцию callback в качестве обработчика события eventName объекта element, возвращает функцию для отписки `.unbind()` с теми же параметрами

* `.unbind(element, eventName, callback)` — Убирает функцию callback в качестве обработчика события eventName объекта element

* `.getScrollSize()` — Функция возвращает внутренние размеры фрейма приложения

* `.loadScript(script)` — Загружает и выполняет клиентский js-файл

* `.im.callTo(userId[, video])` — Звонок по внутренней связи

* `.im.phoneTo(number)` — Звонок на телефонный номер

* `.im.openMessenger(dialogId)` — Открытие окна мессенджера

* `.im.openHistory(dialogId)` — Открытие окна истории

### Новые методы

* `.appInfo()` — Возвращает информацию о приложении (app.info), доступные разрешения (scope), базовую информацию о текущем пользователе (profile) и информацию о контексте вызова (BX24.placement.info())

* `.createBatch([handlerList[, BatchClass]])` — Создание пакетного выполнения запросов, надстройка над `.callBatch()`

* `.isMobile()` — [is-mobile](https://www.npmjs.com/package/is-mobile)

* `.loadScripts(...scripts)` — В метод можно передать любое количество скриптов строками или массивами строк любой вложенности

* `.openLink(href[, target])` — Обёртка над методом `.openPath()`, открывает адрес в новой вкладке, если не можем открыть в том же окне или используем метод на телефоне

<details>
  <summary>:imp:</summary>
  Если вам не повезло работать с битриксом, надеюсь данная библиотека хоть немного облегчит разработку ¯\_(ツ)_/¯
</details>
