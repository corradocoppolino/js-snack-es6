// arr 10 oggetti

const automobili = [

    {
        marca: "fiat", 
        modello: "panda", 
        alimentazione: "benzina"
    },
    {
        marca: "wolksvagen", 
        modello: "polo", 
        alimentazione: "diesel"
    },
    {
        marca: "mini", 
        modello: "one", 
        alimentazione: "benzina"
    },
    {
        marca: "jeep", 
        modello: "renegade", 
        alimentazione: "diesel"
    },
    {
        marca: "tesla", 
        modello: "model 3", 
        alimentazione: "elettrico"
    },
    {
        marca: "opel", 
        modello: "astra", 
        alimentazione: "gpl"
    },
    {
        marca: "ford", 
        modello: "focus", 
        alimentazione: "elettrico"
    },
    {
        marca: "seat", 
        modello: "mii", 
        alimentazione: "metano"
    },
    {
        marca: "tesla", 
        modello: "model 3", 
        alimentazione: "elettrico"
    },
    {
        marca: "Bmw", 
        modello: "serie 6", 
        alimentazione: "benzina"
    },

];

const benzina = automobili.filter((elemento) => {

    if(elemento.alimentazione === "benzina"){
        return true;
    }

})

const diesel = automobili.filter((elemento) => {

    if(elemento.alimentazione === "diesel"){
        return true;
    }

})

const eco = automobili.filter((elemento) => {

    if(elemento.alimentazione === "elettrico" || elemento.alimentazione === "metano" || elemento.alimentazione === "gpl"){
        return true;
    }

})

console.log(benzina);
console.log(diesel);
console.log(eco);