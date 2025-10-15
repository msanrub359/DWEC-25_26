"use strict"
/**
 * Sumar el contenido de un array
 */

const aNumeros=[9,3,4,5,6,7,8,4];
let resultado=0;
aNumeros.forEach(numero=>{
    resultado+=numero;
})
console.log({resultado});

// realizar la suma con el método reduce

const suma=aNumeros.reduce((resultado, numero)=>(resultado+numero),0);
console.log({suma});
const producto=aNumeros.reduce((resultado, numero)=>(resultado*numero),1);
 console.log({producto});