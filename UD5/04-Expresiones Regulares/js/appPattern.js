"use strict";
const Expresiones = (() => {
  let valor,  mostrar;
  const init = () => {
  
    window.addEventListener("DOMContentLoaded", () => {
      document.querySelector("#formBusqueda").addEventListener("submit", validar);

      //asignar los objetos a variables
      valor = document.querySelector("#valor");
      mostrar = document.querySelector("#mostrar");
      //asignar al input el attributo pattern
      //asignar el atributo title
      valor.setAttribute("pattern", "^(?=.*[2468])(?!.*delete)[\\wá-úÁ-ÚÑñ\\s]{8,20}$");
      valor.setAttribute("title", "Formato: Debe contener un número par, no de contener la palabra 'Delete'. Longitud entre 8 y 20 carac.")
     
    });
  };
/**
 * @description valida la expresión regular
 * @param {evento} e 
 */
  const validar = (e) => {
    e.preventDefault();
    if (valor.validity.valid){
      mostrar.textContent="Dato Correcto"
    }else if (valor.validity.valueMissing){
       mostrar.textContent="Dato Requerido"
    }else if (valor.validity.patternMismatch){
       mostrar.textContent="Formato erróneo"
    }
     
   
  };

  return { init };
})();

Expresiones.init();
