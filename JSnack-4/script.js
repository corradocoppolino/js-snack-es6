const squadraBasket = [{name:'Ugo'},{name:'Giuseppe'},{name:'Mario'},{name:'Marco'},{name:'Filippo'}]

for(let player of squadraBasket){
  player.code = codiceRandom(6);
  player.points = generatoRandomNumber(0, 50);
  player.perc = generatoRandomNumber(0, 100);
}
console.log(squadraBasket);

function generatoRandomNumber(min,max){
    let num = Math.floor(Math.random()*(max - min + 1) + min);
    return num;
}

function codiceRandom(length){
    let stringRandom = "";
    let stringnumbers = "0123456789";
    let stringLetters = "ABCDEFGHILMNOPQRSTUVZ";

    for(var i = 0; i < length/2; i++){
        
        stringRandom += stringLetters.charAt(Math.floor(Math.random()*length));

    }

    for(var i = 0; i < length/2; i++){
        
        stringRandom += stringnumbers.charAt(Math.floor(Math.random()*length));

    }

    return stringRandom;
}