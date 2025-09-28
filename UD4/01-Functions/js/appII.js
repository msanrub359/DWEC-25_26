"use strict"
//housting permite usar variables y funciones antes que se hayan declarado

//cuerpo script

console.log(multiplicar(5));
console.log(multiplicarII(5));
console.log(multiplicarIII(5,6));
console.log(multiplicarIV(5,6));


//declaraciones variables y funciones


function multiplicar(a){
    return a*5;
}

function multiplicarII(a,b=1){
    return (a*b);
}
const multiplicarIII=function(a,b){
    return a*b;
}
const multiplicarIV=(a,b)=>a*b;






