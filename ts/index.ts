import * as plugins from './smartevent.plugins'
import { EventEmitter } from 'events'

export {
  EventEmitter
}

export let once = async <T>(eventEmitter: EventEmitter, eventName: string): Promise<T> => {
  let done = plugins.smartq.defer<T>()
  eventEmitter.once(eventName,done.resolve)
  return await done.promise
}