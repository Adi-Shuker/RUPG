"use strict";
const renderer = new Renderer();
const userCard = new UserCard();
userCard.generateUser().then(() => {
    renderer.render(userCard);
});
$(".generate-user-btn").on("click", function () {
    console.log("in genarate");
    userCard.generateUser().then(() => {
        renderer.render(userCard);
    });
});
//# sourceMappingURL=rupgController.js.map