"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const plugins = require("./smartevent.plugins");
const events_1 = require("events");
exports.EventEmitter = events_1.EventEmitter;
exports.once = (eventEmitter, eventName) => __awaiter(this, void 0, void 0, function* () {
    let done = plugins.smartq.defer();
    eventEmitter.once(eventName, done.resolve);
    return yield done.promise;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsZ0RBQStDO0FBQy9DLG1DQUFxQztBQUduQyx1QkFITyxxQkFBWSxDQUdQO0FBR0gsUUFBQSxJQUFJLEdBQUcsQ0FBVSxZQUEwQixFQUFFLFNBQWlCO0lBQ3ZFLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFLLENBQUE7SUFDcEMsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQ3pDLE1BQU0sQ0FBQyxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUE7QUFDM0IsQ0FBQyxDQUFBLENBQUEifQ==