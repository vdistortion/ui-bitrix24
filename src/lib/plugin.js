import { loadScripts } from '../utils/loadScript';
import { Bitrix24 } from './Bitrix24';

export default {
  init(scripts, css = true) {
    return loadScripts('//api.bitrix24.com/api/v1/', scripts).then(() => {
      if (window.BX24) {
        if (css) this.initAssets(window.BX24.getDomain());
        const BX24 = new Bitrix24(window.BX24);
        return BX24.init().then(() => BX24);
      }
      this.initAssets();
      return Promise.resolve({});
    });
  },
  initAssets(domain = 'www.bitrix24.ru') {
    const root = `//${domain}/bitrix/js/ui`;
    const files = [
      'alerts/ui.alerts.min.css',
      'buttons/ui.buttons.min.css',
      'buttons/icons/ui.buttons.icons.min.css',
      'fonts/opensans/ui.font.opensans.min.css',
      'forms/ui.forms.min.css',
      'icons/b24/ui.icons.b24.min.css',
      'icons/base/ui.icons.base.min.css',
      'icons/disk/ui.icons.disk.min.css',
      'icons/service/ui.icons.service.min.css',
      'progressbar/ui.progressbar.min.css',
    ];
    const styles = files.reduce((Fragment, file) => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = [root, file].join('/');
      Fragment.append(link);
      return Fragment;
    }, new DocumentFragment());

    document.head.prepend(styles);
  },
};
