export class PubSub {
    private channels = new Map<string, any>();

    constructor() {}
  
    subscribe(paramName:string, paramChannel:string, paramFunction: Function): string {
      if (!this.channels.has(paramChannel)) {

      //  subscriber.set(paramFunction)
        this.channels.set(paramChannel, new Map());
      }
     // this.subscribers[paramChannel].push(callback)
      let hashId = this.createHash();
      this.channels.get(paramChannel).set(hashId, {name: paramName, fn: paramFunction} );
      return hashId;
    }
    unsubscribe(paramId:string, paramChannel:string): void {
      if (this.channels.has(paramChannel)) {

        //  subscriber.set(paramFunction)
          if(this.channels.get(paramChannel).has(paramId)){
            this.channels.get(paramChannel).delete(paramId)
          }else{
            alert("cant find " + paramId + " (ID) in " + paramChannel + " channel!");
          }
        }else{
          alert("cant find " + paramChannel + " channel!");
        }

    }
  
    publish(): void {
    //  this.channels.forEach((param) => param()
      for (let [key, value] of this.channels) {
        console.log("CHANNEL : ", key);
        for (let [hashId, dataObj] of value) {
          console.log("data : id = ", hashId, ", name = ", dataObj.name);
        }      
      }
    }

    createHash () : string{
      let result = '';

      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      const hasLength = 12;
      for ( let i = 0; i < hasLength; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      return result;
    }
  }