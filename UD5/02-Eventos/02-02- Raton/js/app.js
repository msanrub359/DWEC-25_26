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
    e.target.style.background = "#608ae5";
  };

  /** Evento: el ratón sale del input */
  const outMouse = (e) => {
    e.target.style.background = "";
  };

  /** Evento: se pulsa un botón del ratón */
  const downMouse = (e) => {
    //  e.preventDefault();
    console.log("mousedown:", e);
  
    if (e.buttons === 1) { // botón izquierdo
      pintar = true;
      colorOrig = e.target.style.background; // guardar color original
     
    }
  };

  /** Evento: se suelta el botón del ratón */
  const upMouse = (e) => {
    pintar = false;
    e.target.style.background = colorOrig; // restaurar color original
  };

  /** Evento: se mueve el ratón sobre el input */
  const moveMouse = (e) => {
    if (pintar) {
      e.target.style.background = "yellow";
    }
  };

  // Exponer solo init públicamente
  return { init };
})();

// Iniciar módulo
PintarInputsModule.init();
