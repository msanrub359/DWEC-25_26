"use strict";
//declarar las variables globales al script
const numero = "123";
let valor;


//condicional en una sola línea
if (numero == 123) console.log("Los números son iguales");

//condicional en bloque
if (numero == 123) {
  console.log("Los números son iguales");
}

if (numero === 123) {
    console.log("Los números son iguales");
}else{
    console.log("Los números no son iguales");
}

//operador ternario
console.log(numero===123 ? 'Los números son iguales': 'Los números no son iguales');

//operador lógico Null coalescing
console.log(`Null Coalescing $(valor?? true)`);
