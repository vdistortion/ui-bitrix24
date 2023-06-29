import { loadScript } from '../utils/loadScript';
import { Bitrix24 } from './Bitrix24';

export default {
  init(scripts = []) {
    const loadScripts = ['https://api.bitrix24.com/api/v1/', ...scripts]
      .map((src) => loadScript(src));

    return Promise.all(loadScripts).then(() => {
      if (window.BX24) {
        const BX24 = new Bitrix24(window.BX24);
        return BX24.init().then(() => BX24);
      }
      return Promise.resolve(null);
    });
  },
  install(app, components) {
    components.forEach((Component) => {
      app.component(Component.name, Component);
    });
  },
};
