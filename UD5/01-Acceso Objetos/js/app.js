"use strict"

const acceso=()=>{
   
  console.log("=== Acceso a elementos del DOM (ES Modules) ===");

  // Acceso por ID
  const nombre = document.querySelector("#nombreId");
  console.log({ nombre });
  console.log(`Valor del nombre: ${nombre.value}`);

  // Acceso por name
  const nombres = document.querySelectorAll("[name='nombre']");
  console.log({ nombres });
  console.log(`Valor del segundo campo (by name): ${nombres[1]?.value}`);

  // Acceso por tag
  const nombreTag = document.querySelectorAll("input");
  console.log({ nombreTag });
  console.log(`Cantidad de inputs: ${nombreTag.length}`);
  console.log(`Valor del segundo input: ${nombreTag[1].value}`);

  // Acceso por clase
  const nombreClass = document.querySelectorAll(".controls");
  console.log({ nombreClass });
  console.log(`Valor de apellidos (by class): ${nombreClass[1].value}`);

  // Acceso al botón
  const boton = document.querySelector(".botons");
  console.log(`Texto del botón: ${boton.textContent}`);

  // Evento al hacer clic
  boton.addEventListener("click", () => {
    alert(`Nombre: ${nombre.value} | Apellidos: ${nombreClass[1].value}`);
  });
}

//script
acceso()