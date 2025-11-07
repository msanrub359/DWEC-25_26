"use strict";
const Expresiones = (() => {
  const init = () => {
    window.addEventListener("DOMContentLoaded", () => {
      document.querySelector("#formBusqueda").addEventListener("submit", validar);
    });
  };

  const validar = (e) => {
    e.preventDefault();
    const valor = document.querySelector("#valor");
    const mostrar = document.querySelector("#mostrar");
    let expresion; //contendrá la expresión regular
    //1 Ejemplo, debe contener la palabra mesa
    // expresion=/mesa/;
    //2 Ejemplo, solo debe contener la palabra mesa, indeferente may o min
    //  expresion=/^(mesa)*$/i
    // expresion=new RegExp("^(mesa)*$")
    //3 Ejemplo, solo debe contener letras a-z minús y may, ñ, vocales acentuadas y el espacio en blanco
    // expresion=/^[a-zá-úñ\s]$/i
    // expresion=/^[a-zá-úñ\s]{5,}$/i
    // 4 Ejemplo, 4 números
      // expresion=/^[0-9]{4}$/  // /^\d{4}$/
    //números pares del 10 al 99
    // expresion=/^[1-9][02468]$/

    //números del 1 al 15
    // expresion=/^([1-9]|0[1-9]|1[0-5])$/

    //horas,minutos y segundos hh:mm:ss
    // expresion=/^([0-1][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$/
    //Representa una fecha dd/mm/yyyy ; fecha válida 01/01/1983 al 31/12/2050
    // expresion=/^(0[1-9]|[1-2][0-9]|3[01])[\/](0[1-9]|1[0-2])[\/](198[3-9]|199[0-9]|20[0-4][0-9]|2050)$/
    /**
     * Lookahead positivo Expresión que debe contener almenos un número par (?=.*[2468])
     * Lookahead negativoNo debe contener la palabra delete (?!.*delete)
     * Solo puede contener caracteres alfanúmericos, no permite espacios en blanco, símbolos especiales, ni tiles \w
     * La longitud mínima son 8 caracteres y la máxima son 20
     */
     expresion = /^(?=.*[2468])(?!.*delete)[\wá-úñ\s]{8,20}$/i;
    //validar expresión
    if (expresion.test(valor.value)) {
      //devuelve true, si la cadena coincide con el patrón y false, si no coincide
      mostrar.textContent = "Valor correcto";
    } else {
      mostrar.textContent = "Valor incorrecto";
    }
   
  };

  return { init };
})();

Expresiones.init();
