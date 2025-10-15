"use strict";
// /**
//  * Adivina el número 1-100
//  */

// let intentos=0;
// let numero;
// let verifica;
// const numeroSecreto= Math.floor(Math.random()* (100-1+1))+1;

// /**
//  * @description verificar si el número ha sido adivinado
//  * @param {number} num número a verificar
//  * @returns {{mensaje:string, adivinado:boolean}}
//  */
// const verificarNumero= (num)=>{
//     intentos++;
//     if (num === numeroSecreto){
//         return{mensaje: `¡Felicidades! Adivinaste el número ${num}. Ha necesitado ${intentos} intentos`, adivinado:true};
//     }else if (num < numeroSecreto){
//         return {mensaje:`El número secreto es más alto`, adivinado:false};
//     }else{
//         return {mensaje:`El número secreto es más bajo`, adivinado:false};
//     }
// }

// /**
//  * @description validar si es un número y verificar si es el número secreto
//  * @param {number} num
//  * @returns {string}
//  */
// const adivinar = (num)=>{
//  //controlar que sea un número correcto 1-100 y que sea un número
//  if (typeof num !== "number" || num < 1 || num > 100){
//     return 'El número no es válido. Debe ser entre 1 - 100'
//  }
//  return verificarNumero (num);
// }

// const mostrarIntentos=()=>{
//     return `Los intentos son: ${intentos}`;
// }

// //cuerpo del script
// do {
//     numero = prompt("Adivina el número entre 1 y 100 (Cancelar -> Fin)");

//     if (numero !== null) {
//         verifica = adivinar(Number(numero));
//         console.log(verifica.mensaje);
//     }
// } while (numero !== null && !verifica.adivinado);
// console.log(mostrarIntentos());

//Patrón de módulo
const adivinarNumero = (function () {
  let intentos = 0;
 

  const numeroSecreto = Math.floor(Math.random() * (100 - 1 + 1)) + 1;

  /**
   * @description verificar si el número ha sido adivinado
   * @param {number} num número a verificar
   * @returns {{mensaje:string, adivinado:boolean}}
   */
  const verificarNumero = (num) => {
    intentos++;
    if (num === numeroSecreto) {
      return {
        mensaje: `¡Felicidades! Adivinaste el número ${num}. Ha necesitado ${intentos} intentos`,
        adivinado: true,
      };
    } else if (num < numeroSecreto) {
      return { mensaje: `El número secreto es más alto`, adivinado: false };
    } else {
      return { mensaje: `El número secreto es más bajo`, adivinado: false };
    }
  };
  return {
    /**
     * @description validar si es un número y verificar si es el número secreto
     * @param {number} num
     * @returns {string}
     */
    adivinar: (num) => {
      //controlar que sea un número correcto 1-100 y que sea un número
      if (typeof num !== "number" || num < 1 || num > 100) {
        return "El número no es válido. Debe ser entre 1 - 100";
      }
      return verificarNumero(num);
    },

    mostrarIntentos: () => {
      return `Los intentos son: ${intentos}`;
    },
  };
})();

let verifica;
let numero;
//cuerpo del script
do {
  numero = prompt("Adivina el número entre 1 y 100 (Cancelar -> Fin)");

  if (numero !== null) {
    verifica = adivinarNumero.adivinar(Number(numero));
   
    console.log(verifica.mensaje);
  }
} while (numero !== null && !verifica.adivinado);
console.log(adivinarNumero.mostrarIntentos());
