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
    document.addEventListener("mouseup", ()=>{
      pintar=false
    });
  };

  /** Evento: el ratón entra en el input */
  const overMouse = (e) => {
    e.target.style.backgroundColor="cyan"
  };

  /** Evento: el ratón sale del input */
  const outMouse = (e) => {
    e.target.style.backgroundColor=""
  };

  /** Evento: se pulsa un botón del ratón */
  const downMouse = (e) => {
    console.log(e);
    //Qué tecla se ha pulsado del ratón
    if (e.buttons==1){
      pintar=true; //indicamos que puede pintar al realizarse el evento mouseMove
      colorOrig=e.target.style.backgroundColor; //guardar el color de fondo
    }
  };

  /** Evento: se suelta el botón del ratón */
  const upMouse = (e) => {
    pintar=false;
     e.target.style.backgroundColor=colorOrig;
  };

  /** Evento: se mueve el ratón sobre el input */
  const moveMouse = (e) => {
    if (pintar){
      e.target.style.backgroundColor="yellow";
    }
  };

  // Exponer solo init públicamente
  return { init };
})();

// Iniciar módulo
PintarInputsModule.init();

