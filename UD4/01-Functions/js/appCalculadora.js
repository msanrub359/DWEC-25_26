"use strict";

let total = 0; // Variable privada que almacena el total



 // función declarativa
 
function sumar(cantidad) {
  total += cantidad;
  return total;
}

// expresión de función
const restar = function (cantidad) {
  total -= cantidad;
  return total;
}
// expresión de función arrow para obtener el valor actual del total
const obtenerTotal = () => total;


// función para reiniciar el valor total a 0
const reiniciar = () => {
  total = 0;
  return total;
}

//script

console.log(sumar(10)); // 10
console.log(restar(4)); // 6
console.log(obtenerTotal()); // 6
console.log(reiniciar()); // 0
console.log(sumar(5)); // 5
