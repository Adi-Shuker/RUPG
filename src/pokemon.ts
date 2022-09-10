type PokemonDetalis={
  id:string,
  name:string,
  imageUrl:string
}
class Pokemon{
    constructor(){
    }
    static async getRandomPokemon():Promise<PokemonDetalis>{
        const random = Math.floor(Math.random() * 256 + 1);
        try {
            const {id,name} = await $.get(
              `https://pokeapi.co/api/v2/pokemon/${random}`,
              {
                headers: {
                  Accept: 'application/json',
                },
            },
            );
            return {  
              id:id,
              name:name,
              imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
            }
          } catch (error) {
              console.log('error message: ', error);
              return {id:"",name:"",imageUrl:""}
          } 
      }
}
Pokemon.getRandomPokemon().then((res)=>{console.log("pockemon", res)})
