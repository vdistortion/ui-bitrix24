import loadScript from '../utils/loadScript';

export default class BitrixWrapper {
  constructor(BX24) {
    this.BX24 = BX24;
  }

  init() {
    return new Promise((resolve) => {
      this.BX24.init(resolve);
    });
  }

  install(callback) {
    if (typeof callback === 'string') {
      this.BX24.install(callback);
      return Promise.resolve();
    }
    return new Promise((resolve) => {
      this.BX24.install(resolve);
    });
  }

  installFinish() {
    this.BX24.installFinish();
  }

  getAuth() {
    return this.BX24.getAuth();
  }

  refreshAuth() {
    return new Promise((resolve) => {
      this.BX24.refreshAuth(resolve);
    });
  }

  callMethod(method, params, callback) {
    this.BX24.callMethod(method, params, callback);
  }

  callBatch(calls, bHaltOnError) {
    return new Promise((resolve) => {
      this.BX24.callBatch(calls, resolve, bHaltOnError);
    });
  }

  callBind(event, handler, authType, callback) {
    this.BX24.callBind(event, handler, authType, callback);
    return this.callUnbind.bind(this, event, handler, authType, callback);
  }

  callUnbind(event, handler, authType, callback) {
    this.BX24.callUnbind(event, handler, authType, callback);
  }

  get userOption() {
    return {
      set: (name, value) => {
        this.BX24.userOption.set(name, value);
      },
      get: (name) => this.BX24.userOption.get(name),
    };
  }

  get appOption() {
    return {
      set: (name, value) => new Promise((resolve) => {
        this.BX24.appOption.set(name, value, resolve);
      }),
      get: (name) => this.BX24.appOption.get(name),
    };
  }

  selectUser() {
    return new Promise((resolve) => {
      this.BX24.selectUser(resolve);
    });
  }

  selectUsers() {
    return new Promise((resolve) => {
      this.BX24.selectUsers(resolve);
    });
  }

  selectAccess(value) {
    return new Promise((resolve) => {
      if (Array.isArray(value)) this.BX24.selectAccess(value, resolve);
      else this.BX24.selectAccess(resolve);
    });
  }

  selectCRM(params = {}) {
    return new Promise((resolve) => {
      this.BX24.selectCRM(params, resolve);
    });
  }

  get placement() {
    return {
      bindEvent: (eventName) => new Promise((resolve) => {
        this.BX24.placement.bindEvent(eventName, resolve);
      }),
      call: (command, params) => new Promise((resolve) => {
        this.BX24.placement.call(command, params, resolve);
      }),
      getInterface: () => new Promise((resolve) => {
        this.BX24.placement.getInterface(resolve);
      }),
      info: () => this.BX24.placement.info(),
    };
  }

  isAdmin() {
    return this.BX24.isAdmin();
  }

  getLang() {
    return this.BX24.getLang();
  }

  getDomain(isOrigin) {
    const domain = this.BX24.getDomain();
    if (isOrigin) return ['https:', domain].join('//');
    return domain;
  }

  resizeWindow(width, height) {
    return new Promise((resolve) => {
      this.BX24.resizeWindow(width, height, resolve);
    });
  }

  fitWindow() {
    return new Promise((resolve) => {
      this.BX24.fitWindow(resolve);
    });
  }

  reloadWindow() {
    this.BX24.reloadWindow();
  }

  setTitle(title) {
    return new Promise((resolve) => {
      this.BX24.setTitle(title, resolve);
    });
  }

  scrollParentWindow(scroll) {
    return new Promise((resolve) => {
      this.BX24.scrollParentWindow(scroll, resolve);
    });
  }

  isReady() {
    return this.BX24.isReady();
  }

  ready() {
    return new Promise((resolve) => {
      this.BX24.ready(resolve);
    });
  }

  proxy(method, thisObject) {
    return this.BX24.proxy(method, thisObject);
  }

  proxyContext() {
    return this.BX24.proxyContext();
  }

  bind(element, eventName, callback) {
    this.BX24.bind(element, eventName, callback);
    return this.unbind.bind(this, element, eventName, callback);
  }

  unbind(element, eventName, callback) {
    this.BX24.unbind(element, eventName, callback);
  }

  getScrollSize() {
    return this.BX24.getScrollSize();
  }

  openApplication(params) {
    return new Promise((resolve) => {
      this.BX24.openApplication(params, resolve);
    });
  }

  openPath(path) {
    return new Promise((resolve, reject) => {
      this.BX24.openPath(path, (response) => {
        if (response.result === 'error') reject(new Error(response.errorCode));
        resolve(path);
      });
    });
  }

  closeApplication() {
    this.BX24.closeApplication();
  }

  loadScript(...scripts) {
    return loadScript(...scripts);
  }

  canUse() {
    return this.BX24.canUse('upload');
  }

  get im() {
    return {
      callTo: (userId, video) => {
        this.BX24.im.callTo(userId, video);
      },
      phoneTo: (number) => {
        this.BX24.im.phoneTo(number);
      },
      openMessenger: (dialogId) => {
        this.BX24.im.openMessenger(dialogId);
      },
      openHistory: (dialogId) => {
        this.BX24.im.openHistory(dialogId);
      },
    };
  }
}
