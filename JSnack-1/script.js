$(function(){

    const arrZucchine = [

        {
            nome : "zuccona",
            peso : 20,
            lunghezza : 30
        },
        {
            nome : "zucchetta",
            peso : 20,
            lunghezza : 30
        },
        {
            nome : "zuc",
            peso : 20,
            lunghezza : 30
        },
        {
            nome : "zuk",
            peso : 20,
            lunghezza : 30
        },
        {
            nome : "zucky",
            peso : 20,
            lunghezza : 30
        },
        {
            nome : "sluck",
            peso : 20,
            lunghezza : 30
        },
        {
            nome : "zucks",
            peso : 20,
            lunghezza : 30
        },
        {
            nome : "zucchin",
            peso : 20,
            lunghezza : 30
        },
        {
            nome : "zuca",
            peso : 20,
            lunghezza : 30
        },
        {
            nome : "zucca rossa",
            peso : 20,
            lunghezza : 30
        },

    ]

    let pesoTotale = 0;

    //console.log(arrZucchine);

    for(zucchine of arrZucchine){
        
       pesoTotale += zucchine.peso; 

    }

    console.log(
    `Il peso totale è ${pesoTotale} g`    
    );

})

