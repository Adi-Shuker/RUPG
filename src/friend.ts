class Friend{
    name:string;
     location:{
         city:string,
         state:string
     }
     pictureUrl:string
     constructor(firstName :string,lastName:string,city:string, state:string, pictureUrl:string){
        this.name=`${firstName} ${lastName}`
        this.location={city:city, state:state}
        this.pictureUrl=pictureUrl
     }
}
