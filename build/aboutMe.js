"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class AboutMe {
    constructor() {
    }
    static getRandomText() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const lines = yield $.get('https://baconipsum.com/api/?type=all-meat&paras=2&start-with-lorem=1', {
                    headers: {
                        Accept: 'application/json',
                    },
                });
                return lines;
            }
            catch (error) {
                console.log('error message: ', error);
                return [];
            }
        });
    }
}
//# sourceMappingURL=aboutMe.js.map