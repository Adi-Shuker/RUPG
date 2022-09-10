"use strict";
class Renderer {
    constructor() { }
    render(userCard) {
        const userCardSource = $("#user-card-template").html();
        const userCardTemplate = Handlebars.compile(userCardSource);
        const userCardHTML = userCardTemplate({ userCard: userCard });
        $(".card-container").empty();
        $(".card-container").append(userCardHTML);
        const aboutFriendsSource = $("#about-friends-template").html();
        const aboutFriendsTemplate = Handlebars.compile(aboutFriendsSource);
        const aboutFriendsHTML = aboutFriendsTemplate({ userCard: userCard });
        $(".about-friends-container").empty();
        $(".about-friends-container").append(aboutFriendsHTML);
    }
}
//# sourceMappingURL=renderer.js.map