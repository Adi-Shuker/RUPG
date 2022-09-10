
class AboutMe {
    constructor(){
    }
    static async getRandomText():Promise<string[]>{
        try {
            const lines:string[] = await $.get(
              'https://baconipsum.com/api/?type=all-meat&paras=2&start-with-lorem=1',
              {
                headers: {
                  Accept: 'application/json',
                },
              },
            );
            return lines;
        } catch (error) {
              console.log('error message: ', error);
              return []
            }
        
    }
}

