
class UserCard{
    pokemon:PokemonDetalis;
    aboutMe:string;
    quote:string;
    userDetails:UserDetails;
    constructor(){
        this.pokemon = {id:"",name:"",imageUrl:""}
        this.aboutMe = ""
        this.quote=""
        this.userDetails = {
            name:"",
            address:{city:"",state:""},
            imageUrl:"",
            friends:[]
        };
    }
    async generateUser(){
       const pockemon= Pokemon.getRandomPokemon().then(pokemon=>{this.pokemon=pokemon})
       const aboutMe =  AboutMe.getRandomText().then((lines)=>this.aboutMe=lines.toString())
       const quote = Quote.getRandomQuote().then((quote)=>this.quote=quote)
       const userDetalis =  User.generateUserDetails().then((userDetails)=>this.userDetails=userDetails)
        return Promise.all([pockemon,aboutMe,quote,userDetalis])
    }
}


