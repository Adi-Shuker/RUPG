
class DataModel{
    userCard: UserCard;
    constructor(){
      this.userCard = new UserCard()
    }
    generateUser(){
      return this.userCard.generateUser()
    }
    getUserCard():UserCard{
      return this.userCard
    }
}
