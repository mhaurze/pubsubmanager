import { PubSub } from "./pubSubClass";

//let form = document.querySelector($('#form1')[0])!;

const pubSub  = new PubSub();
const btnSubscribe = $('#subscribe')[0];
const btnUnSubscribe = $('#unsubscribe')[0];

btnSubscribe?.addEventListener('click', function handleSubClick(event) {
   // const data = formData(form);
    var inputName = (<HTMLInputElement>document.getElementById("name")).value;
    var inputChannel = (<HTMLInputElement>document.getElementById("channel")).value;

    let id = pubSub.subscribe(inputName, inputChannel, callback);
    //console.log("====> id is " + id + " of ", data.name);

    pubSub.publish();

});

btnUnSubscribe?.addEventListener('click', function handleUnSubClick(event) {
  //  const data = formData(form);
   // pubSub.unsubscribe(data.name, data.channel);
   var inputId = (<HTMLInputElement>document.getElementById("id")).value;
   var inputChannel = (<HTMLInputElement>document.getElementById("unsubchannel")).value;

   pubSub.unsubscribe(inputId, inputChannel);
    pubSub.publish();
}); 


let callback = (paramId:string) => {
    console.log(paramId)
}