"use strict"
/**
 * captura, el evento se propaga desde el documento raíz hacía el elemento objetivo. De arriba hacia abajo en el DOM
 * burbujeo, el evento se propaga desde el elemento objtivo hacía el documento raíz. De abajo hacia arriba. Propagación por defecto
 */
const EventoPropagacionModule = (() => {

  const init = () => {
    window.addEventListener("DOMContentLoaded", () => {
      console.log("DOM cargado, inicializando eventos");
      // Descomenta la función que quieras probar
       eventoCaptura();
      //eventoBurbujeo();
      
    });
  };

  /** 
   * Ejemplo de eventos en fase de captura
   */
  const eventoCaptura = () => {
    const capaPrincipal = document.querySelector("#capaPrincipal");
    const capaSecundaria = document.querySelector("#capaSecundaria");

    // true -> fase de captura
    capaPrincipal.addEventListener("click", () => {
      alert("Capa principal - Captura");
    }, true);

    capaSecundaria.addEventListener("click", () => {
      alert("Capa secundaria - Captura");
    }, true);
  };

  /** 
   * Ejemplo de eventos en fase de burbujeo
   */
  const eventoBurbujeo = () => {
    const capaPrincipal = document.querySelector("#capaPrincipal");
    const capaSecundaria = document.querySelector("#capaSecundaria");

    // false o sin argumento -> fase de burbuja
    capaPrincipal.addEventListener("click", () => {
      alert("Capa principal - Burbuja");
    }, false);

    capaSecundaria.addEventListener("click", (e) => {
      alert("Capa secundaria - Burbuja");
      // Detiene la propagación hacia los elementos padres
       e.stopPropagation();
    }, false);
  };

  return { init};

})();


// Iniciar módulo
EventoPropagacionModule.init();