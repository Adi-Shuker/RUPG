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
class UserCard {
    constructor() {
        this.pokemon = { id: "", name: "", imageUrl: "" };
        this.aboutMe = "";
        this.quote = "";
        this.userDetails = {
            name: "",
            address: { city: "", state: "" },
            imageUrl: "",
            friends: []
        };
    }
    generateUser() {
        return __awaiter(this, void 0, void 0, function* () {
            const pockemon1 = Pokemon.getRandomPokumon().then(pokemon => { this.pokemon = pokemon; });
            const aboutMe = AboutMe.getRandomText().then((lines) => this.aboutMe = lines.toString());
            const quote = Quote.getRandomQuote().then((quote) => this.quote = quote);
            const userDetalis = User.generateUserDetails().then((userDetails) => this.userDetails = userDetails);
            return Promise.all([pockemon1, aboutMe, quote, userDetalis]);
        });
    }
}
//# sourceMappingURL=userCard.js.map