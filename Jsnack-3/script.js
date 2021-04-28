const arrUno = ["a","b","c"];
const arrDue = [1,2,3];
const arrTre = [];

let i = 0;

while(arrUno[i]!= undefined && arrDue[i]!= undefined){
    
    arrTre.push(arrUno[i]);
    arrTre.push(arrDue[i]);
    i++;

}

console.log(arrTre);