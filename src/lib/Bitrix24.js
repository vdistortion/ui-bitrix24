import isMobile from 'is-mobile';
import { BitrixWrapper } from './BitrixWrapper';
import { BitrixBatch } from './BitrixBatch';

export class Bitrix24 extends BitrixWrapper {
  isMobile = isMobile;

  appInfo() {
    const RestCall = this.createBatch();

    return RestCall.batch({
      appInfo: ['app.info'],
      profile: ['profile'],
      scope: ['scope'],
    }).then((response) => ({
      ...response,
      placementInfo: this.placement.info(),
    }));
  }

  createBatch(handlerList = {}, RestCall = BitrixBatch) {
    return new RestCall(this.BX24.callBatch, handlerList);
  }

  openLink(href, target = '_blank') {
    const windowOpen = () => {
      const anchor = document.createElement('a');
      anchor.href = [this.getDomain(true), href].join('');
      anchor.target = target;
      anchor.click();
    };
    if (isMobile()) windowOpen();
    else this.openPath(href).catch(windowOpen);
  }
}
