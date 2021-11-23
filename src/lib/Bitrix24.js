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

  infinityFitWindow(ms = 1000) {
    setInterval(() => this.fitWindow(), ms);
  }
}
