"use strict"

// Módulo para manejar eventos de teclado en inputs
const TecladoInputsModule = (() => {

  // Inicializar eventos al cargar el DOM
  const init = () => {
    window.addEventListener("DOMContentLoaded", () => {
      console.log("DOM cargado, inicializando eventos de teclado");
      establecerEventos();
    });
  };

  // Establecer eventos a todos los inputs
  const establecerEventos = () => {
    const elementosInput = document.querySelectorAll("input"); // Todos los inputs
    console.log("Inputs encontrados:", elementosInput);

    elementosInput.forEach((element) => {
      element.addEventListener("keydown", keyDownHandler);
      element.addEventListener("keyup", keyUpHandler);
      element.addEventListener("input", inputHandler);
    });
  };

  /** Evento: cuando se pulsa cualquier tecla */
  const keyDownHandler = (e) => {
    console.log(`keydown -> ${e.target.value}`, e);
    //controlar la pulsación del teclado para que sea caracter o espacio en blannco
    if (!(e.code.startsWith("Key") || e.code.startsWith('Space') || e.code.startsWith('Bac'))){
          e.preventDefault(); //anular
    }
    
  };

  
  /** Evento: cuando se suelta la tecla */
  const keyUpHandler = (e) => {
    console.log(`keyup -> ${e.target.value}`, e);
  };

  /** Evento: cuando cambia el valor del input */
  const inputHandler = (e) => {
    console.log(`input -> ${e.target.value}`, e);
  };

  // Exponer solo init públicamente
  return { init };

})();

// Iniciar módulo
TecladoInputsModule.init();
