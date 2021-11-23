# vue-bitrix24

Promise-обёртка для работы с JavaScript REST API Bitrix24, библиотека компонентов в стилистике Bitrix24 и набор новых методов

## Установка

```nodejs
npm i vue-bitrix24
// или
yarn add vue-bitrix24
```

## Подключение
```js
// main.js
import Bitrix24 from 'vue-bitrix24';
import 'vue-bitrix24/dist/vue-bitrix24.css';

Vue.use(Bitrix24);

Bitrix24.init().then(($BX24) => {
  new Vue({
    provide: { $BX24 },
    render: (h) => h(App),
  }).$mount('#app');
});
```
Если в .init() передать параметр, то сначала выполнится .loadScript()

## Вызов методов
```js
// inject: ['$BX24'],

console.log(this.$BX24.getAuth());

this.$BX24.batch({
  info: ['app.info'],
  profile: ['profile'],
}).then(console.log);
```

## Компоненты

[Demo](https://astrotrain55.github.io/vue-bitrix24/)
* bx-button-wrapper
* bx-button
* bx-input
* bx-input-date
* bx-input-file
* bx-select
* bx-radio
* bx-checkbox
* bx-textarea
* bx-progressbar
* bx-alert
* bx-icon

## Битрикс24
* [Документация по REST API](https://dev.1c-bitrix.ru/rest_help/js_library/)
* [UI-библиотека](https://dev.1c-bitrix.ru/api_d7/bitrix/ui/)

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

* `.appOption` — Работа с общими настройками приложения. Установка значений настроек приложения доступа только пользователям с правом управления приложением (.isAdmin)

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

* `.proxy(thisObject)` — Аналогична BX.proxy

* `.proxyContext()` — При вызове изнутри прокси-функцию выдаст ссылку на оригинальный контекст выполнения прокси-функции

* `.bind(element, eventName, callback)` — Устанавливает функцию callback в качестве обработчика события eventName объекта element

* `.unbind(element, eventName, callback)` — Убирает функцию callback в качестве обработчика события eventName объекта element

* `.getDomain([isOrigin])` — Возвращает адрес портала Битрикс24

* `.getScrollSize()` — Функция возвращает внутренние размеры фрейма приложения

* `.loadScript(script)` — Загружает и выполняет клиентский js-файл или массив файлов

* `.im.callTo(userId[, video])` — Звонок по внутренней связи

* `.im.phoneTo(number)` — Звонок на телефонный номер

* `.im.openMessenger(dialogId)` — Открытие окна мессенджера

* `.im.openHistory(dialogId)` — Открытие окна истории

* `.openApplication(params)` — Метод открывает приложение

* `.closeApplication()` — Метод закрывает открытое модальное окно с приложением

* `.scrollParentWindow(scroll)` — Метод прокручивает родительское окно

* `.canUse()` — Проверяет window.FileReader

### Новые методы

* `.batch(calls[, handlerList])` — Пакетное выполнение запросов

* `.appInfo()` — Возвращает информацию о приложении (app.info), доступные разрешения (scope), базовую информацию о текущем пользователе (profile) и информацию о контексте вызова (BX24.placement.info())

* `.infinityFitWindow([ms])` — Вызывает метод .fitWindow() каждые ms секунд
