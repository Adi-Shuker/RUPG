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
class Pokemon {
    constructor() {
    }
    static getRandomPokumon() {
        return __awaiter(this, void 0, void 0, function* () {
            const random = Math.floor(Math.random() * 256 + 1);
            try {
                const { id, name } = yield $.get(`https://pokeapi.co/api/v2/pokemon/${random}`, {
                    headers: {
                        Accept: 'application/json',
                    },
                });
                return {
                    id: id,
                    name: name,
                    imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
                };
            }
            catch (error) {
                console.log('error message: ', error);
                return { id: "", name: "", imageUrl: "" };
            }
        });
    }
}
Pokemon.getRandomPokumon().then((res) => { console.log("pockemon", res); });
//# sourceMappingURL=pokemon.js.map