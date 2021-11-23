import loadScript from '@/utils/loadScript';
import Bitrix24 from './Bitrix24';

export default {
  init(infinityFitWindow = false, script = []) {
    return new Promise((resolve, reject) => {
      loadScript('//api.bitrix24.com/api/v1/').then(() => {
        if (window.BX24) {
          const BX24 = new Bitrix24(window.BX24);
          if (infinityFitWindow) BX24.infinityFitWindow();

          BX24.loadScript(script).finally(() => {
            BX24.init().then(() => {
              resolve(BX24);
            });
          });
        } else resolve({});
      }).catch((e) => {
        reject(e.message);
      });
    });
  },
};
