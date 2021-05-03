// Creo vettore di stringhe

const str = ["pippo","PlUtO","PAPERINO"];

// Map che mi ritorna un vettore sistemato 

const strCapitalize = str.map((elemento) => {

    return capitalize(elemento);

})

// Leggo il mio nuovo vettore sistemato

console.log(strCapitalize);

// Funzione che mi trasforma in maiuscolo il primo carattere e in minuscolo tutto il resto.

function capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}