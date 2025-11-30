"use strict"

function crearCalculadora() {
   let total=0;
   return{
    sumar:function(cantidad) {
      total += cantidad;
      return total;
     },
     restar:function(cantidad) {
      total -= cantidad;
      return total;
     },
     obtenerTotal:function() {
        return total;
     },
    reiniciar:function() {
      total =0;
      return total;
     }
  }
} 
  // Crear una nueva calculadora
  const calculadora = crearCalculadora();
  
  console.log(calculadora.sumar(10));     // 10
  console.log(calculadora.restar(4));     // 6
  console.log(calculadora.obtenerTotal()); // 6
  console.log(calculadora.reiniciar());   // 0
  console.log(calculadora.sumar(5));      // 5
