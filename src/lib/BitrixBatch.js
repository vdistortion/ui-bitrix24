export default class Batch {
  constructor(callBatch, handlerList = {}) {
    this.callBatch = callBatch;
    this.handler = handlerList;
    this.commands = [];
    this.result = {};
    this.errors = {};
    this.delay = 500;
    this.limit = 50;
  }

  batch(request) {
    this.commands = [];
    this.result = {};
    this.errors = {};

    return new Promise((resolve, reject) => {
      const requestList = this.parseRequest(request);
      const payloadList = [];
      let errorsCount = 0;

      this.callBatch(requestList, (result) => {
        Object.entries(result).forEach(([key, value]) => {
          const error = value.error();

          if (error) {
            this.errors[key] = error;
            errorsCount += 1;
          }

          const total = value.total();
          const data = value.data();
          this.result[key] = data;

          if (total > this.limit && total > data.length) {
            const length = Math.ceil(total / this.limit) - 1;
            const iterator = Array.from({ length });
            payloadList.push([key, requestList[key], iterator]);
          }
        });

        if (errorsCount > 0) {
          this.errorLogger();
          reject(this.errors);
        } else if (payloadList.length) {
          this.buildCommandsArray(payloadList);
          this.batchPayload().then(() => resolve(this.parseResult()));
        } else {
          resolve(this.parseResult());
        }
      });
    });
  }

  buildCommandsArray(payloadList) {
    let array = [];

    payloadList.forEach(([key, request, iterator]) => {
      iterator.forEach((_, i) => {
        const index = i + 1;
        const start = this.limit * index;
        const newKey = [key, index].join('_');
        const command = [newKey, this.addStart(request, start)];

        if (array.length === this.limit) {
          this.commands.push(array);
          array = [command];
        } else {
          array.push(command);
        }
      });
    });

    if (array.length) this.commands.push(array);
  }

  batchPayload() {
    const payloads = [];

    this.commands.forEach((command) => {
      const request = Object.fromEntries(command);
      const chunk = new Promise((resolve) => {
        setTimeout(() => {
          this.callBatch(request, (result) => {
            Object.entries(result).forEach(([oldKey, value]) => {
              const [key] = oldKey.split('_');
              const data = value.data();
              this.result[key].push(...data);
            });

            resolve();
          });
        }, this.delay);
      });

      payloads.push(chunk);
    });

    return Promise.all(payloads);
  }

  parseResult() {
    Object.entries(this.handler).forEach(([key, handler]) => {
      if (this.result[key]) this.result[key] = handler(this.result[key]);
    });

    return this.result;
  }

  parseRequest(r) {
    return Object.entries(r).reduce((requestList, [key, request]) => {
      if (Array.isArray(request)) {
        const [method, params = {}] = request;
        requestList[key] = [method, params];
      } else {
        const { method, params = {} } = request;
        requestList[key] = [method, params];
      }

      return requestList;
    }, {});
  }

  addStart(request, start) {
    const [method, params] = request;
    return [method, { start, ...params }];
  }

  errorLogger() {
    console.group(`${this.constructor.name}: Ошибки в методах!`);

    Object.entries(this.errors).forEach(([key, error]) => {
      console.info(`[${key}]`, error.toString());
    });

    console.groupEnd();
  }
}
