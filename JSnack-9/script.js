// Creo array di oggetti animali

const animali = [

    {nome: "leone", famiglia: "felidi", classe: "mammiferi"},
    {nome: "cane", famiglia: "canidi", classe: "mammiferi"},
    {nome: "gallina", famiglia: "fasianidi", classe: "uccelli"},
    {nome: "piccione", famiglia: "fasianidi", classe: "uccelli"},

]

// Utilizzo filter per nuovo vettore mammiferi

const mammiferi = animali.filter((elemento) => {

     if(elemento.classe === "mammiferi"){
         return true;
     }
     return false;

})

console.log(mammiferi);