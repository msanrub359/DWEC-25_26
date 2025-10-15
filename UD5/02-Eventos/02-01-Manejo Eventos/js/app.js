"use strict"

//declaración de eventos con el modelo tradicional

//evento load del navegador
// const cargar=()=>{
//     alert("Página cargada")
// }
// function cargar(){
//     alert("Página cargada")
// }
// window.onload=cargar;
//función anónima arrow

// window.addEventListener("load", ()=>{
//     console.log('load');
// })

//  Función manejadora separada (opcional)
const accBoton = (evento) => {
  evento.preventDefault();
  const nombre = document.querySelector("#nombreId");
  const apellidos = document.querySelector("#apellidosId");
  alert(`El nombre es ${nombre.value} y los apellidos son ${apellidos.value}`);
};


// Esperar a que el DOM esté completamente cargado
window.addEventListener("DOMContentLoaded", () => {
  console.log(" DOM cargado");

  // Seleccionar elementos del DOM
  const boton = document.querySelector("#enviar");
  const nombre = document.querySelector("#nombreId");
  const apellidos = document.querySelector("#apellidosId");

  // 1️⃣ Evento: Click en el botón
  boton.addEventListener("click", (evento) => {
    evento.preventDefault(); // evita recargar la página si el botón es "submit"
    console.log("Botón pulsado");

    alert(`El nombre es ${nombre.value} y los apellidos son ${apellidos.value}`);

    // Ejemplo: eliminar el evento después del primer clic
    boton.removeEventListener("click", accBoton);
    boton.type = "button";
  });

  //  Evento: Foco en el input nombre
  // 'focusin' se propaga (burbujea), 'focus' no
  //once :true; se ejecuta solo una vez
  nombre.addEventListener("focusin", (e) => {
    console.log("Focus en el campo nombre");
    e.target.style.backgroundColor = "lightcyan";
  }, {once:true});

  //  Evento: Pérdida de foco en el input nombre (se propaga). También blur es para pérdida de foco
  nombre.addEventListener("focusout", (e) => {
    console.log("Se perdió el foco del campo nombre");
    e.target.style.backgroundColor = "";
  });

    //  Evento: Cambio en apellidos
  apellidos.addEventListener("change", (e) => {
    console.log(`Valor cambiado a: ${e.target.value}`);
  });

  //  Ejemplo de uso de event delegation (delegación de eventos)
  document.querySelector("form").addEventListener("focusin", (e) => {
    console.log(`El elemento con id=${e.target.id} ha recibido el foco`);
  });
});


