import { expect, tap } from '@pushrocks/tapbundle';

import * as smartevent from '../ts/index';

let myEventEmitter: smartevent.EventEmitter;

tap.test('should create an emitter ->', async () => {
  myEventEmitter = new smartevent.EventEmitter();
  expect(myEventEmitter).to.be.instanceof(smartevent.EventEmitter);
});

tap.test('smartevent.once -> should return a promise', async () => {
  let oncePromise = smartevent.once(myEventEmitter, 'customEvent');
  expect(oncePromise).to.be.instanceof(Promise);
  expect(oncePromise).to.not.be.fulfilled;
  myEventEmitter.emit('customEvent');
  await expect(oncePromise).to.eventually.be.fulfilled;
});

tap.start();
