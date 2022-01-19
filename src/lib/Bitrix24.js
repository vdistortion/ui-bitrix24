import isMobile from 'is-mobile';
import BitrixWrapper from './BitrixWrapper';
import Batch from './BitrixBatch';

export default class Bitrix24 extends BitrixWrapper {
  batch(calls, handlerList) {
    const RestCall = new Batch(this.BX24.callBatch, handlerList);
    return RestCall.batch(calls);
  }

  appInfo() {
    return this.batch({
      appInfo: ['app.info'],
      profile: ['profile'],
      scope: ['scope'],
    }).then((response) => {
      response.placementInfo = this.placement.info();
      return response;
    });
  }

  openLink(href, target = '_blank') {
    const windowOpen = () => {
      const address = [this.getDomain(true), href].join('');
      window.open(address, target);
    };
    if (isMobile()) windowOpen();
    else this.openPath(href).catch(windowOpen);
  }

  callMethodAll(method, params) {
    return new Promise((resolve, reject) => {
      const data = [];

      this.callMethod(method, params, (result) => {
        if (result.error()) reject(new Error(result.error()));

        if (Array.isArray(result.data())) data.push(...result.data());
        else resolve(result.data());

        if (result.more()) result.next();
        else resolve(data);
      });
    });
  }
}
