/// <reference types="node" />
import { EventEmitter } from 'events';
export { EventEmitter };
export declare let once: <T>(eventEmitter: EventEmitter, eventName: string) => Promise<T>;
