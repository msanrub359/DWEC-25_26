"use strict"
  const FormulariosModule = (() => {

    const init = () => {
      document.addEventListener("DOMContentLoaded", () => {
        console.log(" DOM cargado, inicializando formularios");
        const frmSec = document.querySelector("#frmSec");
        frmSec.addEventListener("submit", ejecutar);
      });
    };

    const ejecutar = (e) => {
      e.preventDefault(); // Evita que el formulario se envíe realmente

      const mostrar = document.querySelector("#mostrar");
      mostrar.innerHTML = ""; // Limpiar contenido previo

      // Mostrar número total de formularios
      mostrar.innerHTML += `<strong>El número de formularios:</strong> ${document.forms.length}<br>`;

      // Mostrar número de elementos de cada formulario
      document.querySelectorAll("form").forEach((frm) => {
        mostrar.innerHTML += `<br><strong>Formulario ${frm.id}:</strong> ${frm.elements.length} elementos<br>`;
      });

      // Mostrar detalles de cada elemento de todos los formularios
      for (let frm of document.forms) {
        mostrar.innerHTML += `<hr><br><strong>Formulario ${frm.id}</strong>`;
        Array.from(frm.elements).forEach((ele) => {
          mostrar.innerHTML += `<br>Id: ${ele.id || "sin id"}`;
          mostrar.innerHTML += `<br>Type: ${ele.type}`;
          mostrar.innerHTML += `<br>Valor: ${ele.value}<br>`;
        });
      }
    };

    return { init };

  })();

  FormulariosModule.init();


