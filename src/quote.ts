
class Quote{
    static async getRandomQuote():Promise<string>{
        try {
            const data:{quote:string} = await $.get(
              'https://api.kanye.rest',
              {
                headers: {
                  Accept: 'application/json',
                },
              },
            );
            return data.quote;
        } catch (error) {
              console.log('error message: ', error);
              return ""
        } 
    }
    
}
Quote.getRandomQuote().then((res)=>{console.log("quote ", res)})
