"use strict";
import { mensajeSweetAlert, hideModal, refreshTable } from "./funciones.js";
import { addUser, updateUser } from "./API.js";

export const validarFormulario = () => {
  const validar = new JustValidate("#frmUsuario", {
    errorFieldCssClass: "is-invalid", //es la clase que se añade al campo que tiene error
    errorLabelCssClass: "invalid-feedback", //Es la clase que se asigna al mensaje de error que aparece debajo del input
    focusInvalidField: true, //si un campo no pasa la validación, esta opción hace que el cursor se coloque en el primer campo inválido
    validateBeforeSubmitting: true, //hace que la validación ocurra antes de enviar el formulario
  });

  validar
    // Nombre
    .addField("#nameUser", [
      { rule: "required", errorMessage: "El nombre es obligatorio" },
      { rule: "minLength", value: 3, errorMessage: "Mínimo 3 caracteres" },
      { rule: "maxLength", value: 25, errorMessage: "Máximo 100 caracteres" },
      {
        rule: "customRegexp",
        value: /^[a-zA-Zá-úÁ-ÚñÑ,ºº\s]+$/,
        errorMessage: "Formato incorrecto",
      },
    ])
    // Email
    .addField("#emailUser", [
      { rule: "required", errorMessage: "El email es obligatorio" },
      { rule: "email", errorMessage: "Introduce un email válido" },
    ])

    // Rol
    .addField("#roleUser", [
      {
        rule: "required",
        errorMessage: "El rol es obligatorio. Seleccione un rol",
      },
    ])

    //Password
    .addField("#passUser", [
      //validar dependiendo de la acción.
      //Si se añade el campo password es obligatorio
      //Si se está actualiando el campo password puede estar vacío y no se valida ningún criterio
      {
        //Valida si el título de la ventana es 'Nuevo Usuario'
        validator: (value) => {
          const modalTitle = document.querySelector("#modalTitle")?.textContent || "";
          const isNuevoUsr = modalTitle === "Nuevo Usuario";

          // Solo validar como obligatorio si es nuevo usuario
          if (isNuevoUsr) {
            return Boolean(value && value.trim() !== '');
          }

          // Si es actualizar, siempre es válido (vacío o con valor)
          return true;
        },
        errorMessage: "La contraseña es obligatoria"
      },
      {
        //valida la longitud mínima, solo si hay valor
        validator: (value) => {
          // Si está vacío o es undefined/null, válido
          if (!value || value.trim() === '') {
            return true;
          }

          // Si tiene valor, validar longitud mínima
          return Boolean(value.length >= 8);
        },
        errorMessage: "Mínimo 8 caracteres"
      },
      {
        //valida la complejidad de la contraseña, solo si hay valorSi
        rule: "custom",
        validator: (value) => {
          // Si está vacío o es undefined/null, válido
          if (!value || value.trim() === '') {
            return true;
          }

          // // Si tiene valor, validar complejidad
          // const hasUpperCase = /[A-Z]/.test(value);
          // const hasLowerCase = /[a-z]/.test(value);
          // const hasNumber = /[0-9]/.test(value);
          // const hasSymbol = /[\W_]/.test(value);
          return Boolean( /[A-Z]/.test(value) &&
              /[a-z]/.test(value) &&
              /[0-9]/.test(value) &&
              /[\W_]/.test(value)); // aquí incluimos el guion bajo _. \W cualquier caracter que no sea letra ni número ni guión bajo

          // return Boolean(hasUpperCase && hasLowerCase && hasNumber && hasSymbol);
        },
        errorMessage: "Debe incluir mayúsculas, minúsculas, números y símbolos",
      },
    ])
    .onSuccess(async (e) => {
      e.preventDefault();

      // Recoger datos del formulario

      const formData = {
        // id: document.querySelector("#nameUser").getAttribute("data-id"),
        id: document.querySelector("#idUser").value.trim(),
        name: document.querySelector("#nameUser").value.trim(),
        email: document.querySelector("#emailUser").value.trim(),
        pass: document.querySelector("#passUser").value.trim(),
        role: document.querySelector("#roleUser").value.trim(),
        active: document.querySelector("#activeUser").checked,
      };
      //seleccionar el objeto que contiene el título
      const titulo = document.querySelector("#modalTitle");

      try {

        const accion = titulo.textContent === "Nuevo Usuario" ? addUser : updateUser;
        const respuesta = await accion(formData);
        
        // Verificar si es addUser (tiene id) o updateUser (solo mensaje)
        if (respuesta.id) {
          mensajeSweetAlert(`Usuario añadido con ID: ${respuesta.id}`, "success");
        } else {
          mensajeSweetAlert(respuesta.message, "success");
        }
        refreshTable(); //  Refrescar tabla
        hideModal(); //oculta el modal

      } catch (error) {
        mensajeSweetAlert(`${error.message}. ${error.error}`, error);
      }


    });
};



