"use strict";

//declaración de función
//evento DOMContentLoaded
const FormularioModule = (() => {

    const init = () => {
      document.addEventListener("DOMContentLoaded", () => {
        console.log("DOM cargado, inicializando formulario");
        const formulario = document.querySelector("#formBusqueda");
        formulario.addEventListener("submit", ejecutar);
      });
    };

    const ejecutar = (e) => {
      e.preventDefault(); // Evita que el formulario se envíe realmente

      const mostrar = document.querySelector("#mostrar");
      mostrar.innerHTML = ""; // Limpiar contenido anterior

      // Acceder al input mediante el nombre del formulario y el nombre del input
      mostrar.innerHTML += `<strong>1. Por nombre del formulario:</strong> ${document.formNameBusq.nombre.value}<br>`;
      // Cambiar el valor del input
      document.formNameBusq.nombre.value = "Nuevo dato";

      // Acceder mediante la colección de elementos del formulario
      mostrar.innerHTML += `<strong>2. Nº de elementos del formulario:</strong> ${document.formNameBusq.elements.length}<br>`;
      mostrar.innerHTML += `<strong>2b. Primer elemento:</strong> ${document.formNameBusq.elements[0].value}<br>`;

      // Acceder mediante la colección forms
      mostrar.innerHTML += `<strong>3. Usando forms:</strong> ${document.forms[0].elements["nombre"].value}<br>`;

      // Acceder mediante querySelector por ID
      mostrar.innerHTML += `<strong>4. Usando querySelector:</strong> ${document.querySelector("#nombreId").value}<br>`;
    };

    return { init };

  })();

  FormularioModule.init();