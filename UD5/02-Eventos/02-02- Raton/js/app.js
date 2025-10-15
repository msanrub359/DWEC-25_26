"use strict"
// Módulo para manejar eventos del ratón sobre inputs
const PintarInputsModule = (() => {
  let pintar = false;
  let colorOrig = "";

  /**
   * @description Inicializar eventos al cargar el DOM
   */
  const init = () => {
    window.addEventListener("DOMContentLoaded", () => {
      console.log("DOM cargado, inicializando eventos");
      establecerEventos();
    });
  };

/**
 * description Establecer eventos a todos los inputs
 */
  const establecerEventos = () => {
    const elementosInput = document.querySelectorAll("input"); // Todos los inputs
    console.log("Inputs encontrados:", elementosInput);

    elementosInput.forEach((element) => {
      element.addEventListener("mouseover", overMouse);
      element.addEventListener("mouseout", outMouse);
      element.addEventListener("mousedown", downMouse);
      element.addEventListener("mouseup", upMouse);
      element.addEventListener("mousemove", moveMouse);
    });
  };

  /** Evento: el ratón entra en el input */
  const overMouse = (e) => {
   
  };

  /** Evento: el ratón sale del input */
  const outMouse = (e) => {
    
  };

  /** Evento: se pulsa un botón del ratón */
  const downMouse = (e) => {
    
  };

  /** Evento: se suelta el botón del ratón */
  const upMouse = (e) => {
    
  };

  /** Evento: se mueve el ratón sobre el input */
  const moveMouse = (e) => {
    
  };

  // Exponer solo init públicamente
  return { init };
})();

// Iniciar módulo
PintarInputsModule.init();

