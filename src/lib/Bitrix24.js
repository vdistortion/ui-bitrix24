import isMobile from 'is-mobile';
import { BitrixWrapper } from './BitrixWrapper';
import { BitrixBatch } from './BitrixBatch';
import { loadScripts } from '../utils/loadScript';

export class Bitrix24 extends BitrixWrapper {
  appInfo() {
    const RestCall = this.createBatch();

    return RestCall.batch({
      appInfo: ['app.info'],
      profile: ['profile'],
      scope: ['scope'],
    }).then((response) => {
      response.placementInfo = this.placement.info();
      return response;
    });
  }

  createBatch(handlerList = {}, RestCall = BitrixBatch) {
    return new RestCall(this.BX24.callBatch, handlerList);
  }

  isMobile() {
    return isMobile();
  }

  loadScripts(...scripts) {
    return loadScripts(...scripts);
  }

  openLink(href, target = '_blank') {
    const windowOpen = () => {
      const address = [this.getDomain(true), href].join('');
      window.open(address, target);
    };
    if (isMobile()) windowOpen();
    else this.openPath(href).catch(windowOpen);
  }
}
