let arrLunghe = [];
let arrCorte = [];
let pesoCorte = 0;
let pesoLunghe = 0;

const arrZucchina = [

    {
        nome : "zucchinaGialla",
        peso : 30,
        lunghezza : 20
    },
    {
        nome : "zucchetta",
        peso : 10,
        lunghezza : 10
    },
    {
        nome : "zuccona",
        peso : 30,
        lunghezza : 30
    },
    {
        nome : "zucchinaPink",
        peso : 30,
        lunghezza : 15
    },
    {
        nome : "zucchinaMini",
        peso : 2,
        lunghezza : 2
    },
    {
        nome : "zucchinaGigante",
        peso : 300,
        lunghezza : 200
    },
    {
        nome : "zucchinaNera",
        peso : 30,
        lunghezza : 10
    },
    {
        nome : "zucchinaMarrone",
        peso : 30,
        lunghezza : 20
    },
    {
        nome : "zucchinaArancione",
        peso : 40,
        lunghezza : 40
    },
    {
        nome : "zucchinaVerde",
        peso : 30,
        lunghezza : 20
    }

];

for(zucchine of arrZucchina){

    if(zucchine.lunghezza > 15){
        arrLunghe.push(zucchine);
        pesoLunghe += zucchine["peso"];
    }else{
        arrCorte.push(zucchine);
        pesoCorte += zucchine["peso"]

    }

}

console.log(arrLunghe);
console.log(arrCorte);

console.log(
    `Il peso delle zucchine corte è: ${pesoCorte} g`
);
console.log(
    `Il peso delle zucchine corte è: ${pesoLunghe} g`
);