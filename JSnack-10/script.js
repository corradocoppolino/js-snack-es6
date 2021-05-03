// Creo array di oggetti persone

const persone = [

    {nome: "Mario", cognome: "Rossi", età: 62},
    {nome: "Luigi", cognome: "Verdi", età: 12},
    {nome: "Marco", cognome: "Riva", età: 35},
    {nome: "Erika", cognome: "Piva", età: 79},
    {nome: "Ludovica", cognome: "Beati", età: 16},

];

const strGuidare = persone.map((elemento,index) => {

    if(elemento.età >= 18){
        return `${elemento.nome} ${elemento.cognome} può guidare`;
    }
    
    return `${elemento.nome} ${elemento.cognome} non può guidare`;

})

console.log(strGuidare);



