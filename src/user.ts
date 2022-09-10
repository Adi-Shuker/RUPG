type friendItem = {
    name:{
       first:string,
       last:string 
    },
    location:Address,
    picture:{
        large:string
    }
}

type Address ={
    city:string,
    state:string
}
type UserDetails={
    name:string,
    address:Address,
    imageUrl:string,
    friends:Friend[]
}

class User{
    name:string;
    address:Address;
    imageUrl:string;
    friends:Friend[]
    constructor(){
        this.name=""
        this.imageUrl=""
        this.address={ city:"", state:""}
        this.friends=[]
    }
    static async generateUserDetails():Promise<UserDetails>{
        try {
            let res :UserDetails= {
                name:"",
                address:{city:"",state:""},
                imageUrl:"",
                friends:[]
            }
            const {results} = await $.get(
              'https://randomuser.me/api/?page=3&results=7',
              {
                headers: {
                  Accept: 'application/json',
                },
              },
            )
            let friends :Friend[]= []
            res.name = `${results[0].name.first} ${results[0].name.last}`
            res.address ={city:results[0].location.city,state:results[0].location.state};
            res.imageUrl = results[0].picture.large;
            results.pop();
            results.forEach(((item: friendItem)=>{
                res.friends.push(new Friend(item.name.first,
                    item.name.last,item.location.city,item.location.state,
                    item.picture.large))
             }))
            return res
        } catch (error) {
              console.log('error message: ', error);
              return {
                name:"",
                address:{city:"",state:""},
                imageUrl:"",
                friends:[]
            }
        } 
    }
    
}
User.generateUserDetails().then((user)=>{
    console.log(user.name)
    console.log(user.address)
    console.log(user.friends)
})

