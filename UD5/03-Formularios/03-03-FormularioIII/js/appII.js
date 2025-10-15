"use strict";



const FormularioModule = (() => {
  let formulario;
  // Inicializar eventos al cargar el DOM
  const init = () => {
    window.addEventListener("DOMContentLoaded", () => {
      formulario = document.querySelector("#frmFirst");
      const edad = document.querySelector("#edad");
      const btnCancelar = document.querySelector("#cancelar");

      formulario.addEventListener("submit", validar);
      btnCancelar.addEventListener("click", limpiar);
      edad.addEventListener("focusout", comprobarEdad);
    });
  };
/**
 * @description configurar captcha
 */
  const activarCaptcha = () => {
    return new Promise((resolve, reject) => {
      grecaptcha.ready(() => {
        grecaptcha
          .execute("6LfVXr8UAAAAAMS-4Ar9OHK7RLug-6H6n_qxwo1L", { action: "submit" })
          .then(token => {
            console.log("Token reCAPTCHA:", token);
            document.querySelector("#recaptcha").value = token;
            resolve(token); // devolvemos el token
           })
          .catch(err => reject(err));
      });
    });
};
  // Validación del formulario
  const validar = async(evento) => {
    evento.preventDefault(); // Evita envío del formulario

    const erroresInputs = validarInputs();
    const erroresRadios = validarRadio();

    console.log({ erroresInputs, erroresRadios });

    if (!erroresInputs && !erroresRadios) { //Si no hay errores (false) está todo correcto
      await activarCaptcha();
      const spinner = document.querySelector("#spinner");
      const exito = document.querySelector("#exito");

      // Recoger datos con FormData y mostrar por consola
      const datos = new FormData(formulario);
      console.log(Object.fromEntries(datos) );

      spinner.style.display = "block";
      exito.textContent = "Datos enviados";

      // Ocultar spinner y limpiar formulario después de 3s
      setTimeout(() => {
        spinner.style.display = "none";
        exito.textContent = "";
        limpiar();
      }, 3000);
    }
  };

 

  // Comprobar edad >= 18
  const comprobarEdad = (e) => {
    const error = document.querySelector("#erredad");
    if (Number(e.target.value, 10) < 18) {
      error.textContent = "La edad debe ser mayor o igual a 18 años";
      e.target.focus();
    } else {
      error.textContent = "";
    }
  };

  // Validar inputs requeridos
  const validarInputs = () => {
    let hayErrores = false;

    document.querySelectorAll(".classTexto").forEach((input) => {
      const error = document.querySelector(`#err${input.id}`);
      if (input.value.trim() === "") {
        error.textContent = "El campo es requerido";
        hayErrores = true;
      } else {
        error.textContent = "";
      }
    });

    return hayErrores;
  };

  // Validar grupo de radios
  const validarRadio = () => {
    const radios = document.querySelectorAll("[name='tipo']");
    const errorTexto = document.querySelector("#errtipo");
    const seleccionado = [...radios].some((radio) => radio.checked);
    errorTexto.textContent = seleccionado ? "" : "Seleccione una opción";
      
    return !seleccionado; // true si hay error
  };

   // Limpiar formulario
  const limpiar = () => {
    // Limpiar inputs
    document.querySelectorAll(".classTexto").forEach((input) => input.value = "");

    // Limpiar mensajes de error
    document.querySelectorAll("[name='error']").forEach((span) => span.textContent = "");

    // Limpiar radios
    document.querySelectorAll("[name='tipo']").forEach((radio) => radio.checked = false);

    // Foco en nombre
    document.querySelector("#nombre").focus();
  };

  return { init };

})();
// Iniciar módulo
FormularioModule.init();