"use strict"

function crearCalculadora() {
    let total = 0;  // Variable privada que almacena el total
  
    return {
      // Método para sumar
      sumar: function(cantidad) {
        total += cantidad;
        return total;
      },
      // Método para restar
      restar: function(cantidad) {
        total -= cantidad;
        return total;
      },
      // Método para obtener el valor actual del total
      obtenerTotal: function() {
        return total;
      },
      // Método para reiniciar el valor total a 0
      reiniciar: function() {
        total = 0;
        return total;
      }
    };
  }
  
  // Crear una nueva calculadora
  const calculadora = crearCalculadora();
  
  console.log(calculadora.sumar(10));     // 10
  console.log(calculadora.restar(4));     // 6
  console.log(calculadora.obtenerTotal()); // 6
  console.log(calculadora.reiniciar());   // 0
  console.log(calculadora.sumar(5));      // 5