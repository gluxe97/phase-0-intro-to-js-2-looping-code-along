

function writeCards(names, event) {
    let message=[];
    for(let i =0; i < names.length; i++) {
        message.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }           
  return message;
};
writeCards(["Gabriel", "Gonzo", "Rob", "Pedro"], "birthday")

function countDown(i){
    while((i+1)>0) {
        console.log(i);
        (i--);
    }
}

