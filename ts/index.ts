import * as plugins from './smartevent.plugins';
import { EventEmitter } from 'events';

export { EventEmitter };

export const once = async <T>(eventEmitter: EventEmitter, eventName: string): Promise<T> => {
  const done = plugins.smartpromise.defer<T>();
  eventEmitter.once(eventName, eventPayload => {
    done.resolve(eventPayload);
  });
  return await done.promise;
};
