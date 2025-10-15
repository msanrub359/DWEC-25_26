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
      // element.addEventListener("keypress", keyPressHandler);
      element.addEventListener("keyup", keyUpHandler);
      element.addEventListener("input", inputHandler);
    });
  };

  /** Evento: cuando se pulsa cualquier tecla */
  const keyDownHandler = (e) => {
    console.log(`keydown -> ${e.target.value}`, e);
  };

  /** Evento: cuando se pulsa una tecla que genera carácter */
  const keyPressHandler = (e) => {
    console.log(`keypress -> ${e.target.value}`, e);

    // EJEMPLO 1: Permitir solo dígitos 0-9
    if (!(e.code.startsWith("Digit"))) {
      e.preventDefault();
    }

    // EJEMPLO 2: Permitir solo letras A-Z y espacios
    // if (!(e.code.startsWith("Key") || e.code === "Space")) {
    //   e.preventDefault();
    // }
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
