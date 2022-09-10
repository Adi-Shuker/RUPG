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
class User {
    constructor() {
        this.name = "";
        this.imageUrl = "";
        this.address = { city: "", state: "" };
        this.friends = [];
    }
    static generateUserDetails() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let res = {
                    name: "",
                    address: { city: "", state: "" },
                    imageUrl: "",
                    friends: []
                };
                const { results } = yield $.get('https://randomuser.me/api/?page=3&results=7', {
                    headers: {
                        Accept: 'application/json',
                    },
                });
                let friends = [];
                res.name = `${results[0].name.first} ${results[0].name.last}`;
                res.address = { city: results[0].location.city, state: results[0].location.state };
                res.imageUrl = results[0].picture.large;
                results.pop();
                results.forEach(((item) => {
                    res.friends.push(new Friend(item.name.first, item.name.last, item.location.city, item.location.state, item.picture.large));
                }));
                return res;
            }
            catch (error) {
                console.log('error message: ', error);
                return {
                    name: "",
                    address: { city: "", state: "" },
                    imageUrl: "",
                    friends: []
                };
            }
        });
    }
}
User.generateUserDetails().then((user) => {
    console.log(user.name);
    console.log(user.address);
    console.log(user.friends);
});
//# sourceMappingURL=user.js.map