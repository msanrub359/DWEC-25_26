"use strict";

const FormularioModule = (() => {
  // ----- Variables privadas -----
  let form, btnEnviar, btnCancelar, spinner, exito;
  let provincia, radios;
 
 /**
  * @description función principal
  */
  const init = () => {
    document.addEventListener("DOMContentLoaded", () => {
      inicializarObjetos();
      establecerEventos();
    });
  }

/**
 * @description inicializa las referncias a los elementos del formulario
 */
  const inicializarObjetos = () => {
    form = document.querySelector("#frmFirst");
    btnEnviar = document.querySelector("#enviar");
    btnCancelar = document.querySelector("#cancelar");
    spinner = document.querySelector("#spinner");
    exito = document.querySelector("#exito");
    provincia = document.querySelector("#provincia");
    radios = document.querySelectorAll("input[name='tipo']");
  };

  /**
 * @description Asigna los eventos necesarios a los elementos del formulario.
 *
 * Configura los listeners para inputs, select de provincia, radios,
 * envío y reinicio del formulario, de manera que se pueda validar
 * y comprobar el formulario en tiempo real.
 *
  */

  const establecerEventos = () => {
    const inputs = document.querySelectorAll(".classInput")
    inputs.forEach(objeto => {
      objeto.addEventListener("input", (e) => {
        validarCampo(e.target);
        comprobarFormulario();
      })
    })

    provincia.addEventListener("change", () => {
      validarCampo(provincia);
      comprobarFormulario();
    });

    radios.forEach((radio) =>
      radio.addEventListener("change", () => {
        validarRadios();
        comprobarFormulario();
      })
    );

    form.addEventListener("submit", validarFormulario);
    btnCancelar.addEventListener("click", resetFormulario);

  };

  /**
   * @description validar el formulario
   * @param {object} e evento
   */
  const validarFormulario = (e) => {
    e.preventDefault();
   
// Recoger datos con FormData y mostrar por consola
      const datos = new FormData(e.target);
      const datosObj= Object.fromEntries(datos)
      console.log(`Datos enviados: ${datosObj.nombre}` );
   
    exito.textContent = "Formulario enviado correctamente!";
    spinner.style.display = "inline-block"; //mostrar spinner
    btnEnviar.disabled = true; //deshabilitar

    setTimeout(() => {
      spinner.style.display = "none";
      resetFormulario(e.target);
    }, 2000);
    
  }

  /**
   * @description comprobar si el formulario es válido para habilitar  el botón.
   */
  const comprobarFormulario = () => {
    console.log(form.checkValidity());
    
     

    const valido =
      form.checkValidity() &&
      validarRadios();

    btnEnviar.disabled = !valido; //habilitar el botón
    
  }
/**
 * @description valida el campo según el evento
 * @param {object} objeto 
 */
  const validarCampo = (objeto) => { 
    //establecer el span de error
    const spanError = document.querySelector(`#error${objeto.id}`);
    
    // Evaluamos la primera condición verdadera
    switch (true) {
      case objeto.validity.valid:
        spanError.textContent = ""; //elimina el texto
        break;
      case objeto.validity.valueMissing: //Falta el valor
       spanError.textContent = "El campo es obligatorio";
      //objeto.reportValidity(); //muestra el mensaje de error nativo del navegador
        break;
      case objeto.validity.rangeUnderflow:
        spanError.textContent = `Debe ser mayor o igual que ${objeto.min}.`;
        break;
      case objeto.validity.rangeOverflow:
        spanError.textContent = `Debe ser como máximo ${objeto.max}.`;
        break;
      
      case objeto.validity.tooShort:
        spanError.textContent = `Demasiado corto, mínimo ${objeto.minLength} caracteres.`;
        break;
      case objeto.validity.tooLong:
        spanError.textContent = `Demasiado largo, máximo ${objeto.maxLength} caracteres.`;
        break;
      case objeto.validity.patternMismatch:
        spanError.textContent = "El formato no coincide con el patrón esperado.";
        break;
      default:
        spanError.textContent = "Valor no válido.";
    }
  }

  /**
   * @description valida los radios
   * @returns {boolean} 
   */
  const validarRadios = () => {
    const seleccionado = [...radios].some(radio => radio.checked);
    const errorTipo = document.querySelector("#errortipo");
    errorTipo.textContent = seleccionado ? "" : "Seleccione una opción";
    return seleccionado;
  }

  /**
   * @description limpiar el formulario
   * @param {object} formulario
   */
  const resetFormulario = (form) => {
    form.reset();
    exito.textContent = ""; //limpiar la etiqueta
    document.querySelector("#nombre").focus();
  };


  return { init };
})();

// Iniciar módulo
FormularioModule.init();
