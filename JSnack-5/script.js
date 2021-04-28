const array = [1,2,3,4,5,6,7,8,9,10];

let a = 2;
let b = 6;

let newArray = [];

console.log(posizione(array,a,b));


function posizione(arr,num1,num2){

    for(var i = 0; i < arr.length; i++){

        if(num1 > i || num2 < i){

            newArray.push();

        }else{

            newArray.push(arr[i]);

        }

    }

    return newArray;

}