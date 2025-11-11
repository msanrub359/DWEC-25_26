"use strict"

const acceso=()=>{
   
  console.log("=== Acceso a elementos del DOM (ES Modules) ===");

  // Acceso por ID
  const nombre = document.querySelector("#nombreId");
  // const nombre = document.getElementById("nombreId");
  console.log({ nombre });
  console.log(`Valor del nombre: ${nombre.value}`);

  // Acceso por name
  // const nombres = document.querySelectorAll("[name='nombre']");
  const nombres =document.getElementsByName("nombre")
  console.log({ nombres });
  console.log(`Valor del segundo campo (by name): ${nombres[1]?.value}`);

  // Acceso por tag
  // const nombreTag = document.querySelectorAll("input");
   const nombreTag = document.getElementsByTagName("input")
  console.log({ nombreTag });
  console.log(`Cantidad de inputs: ${nombreTag.length}`);
  console.log(`Valor del segundo input: ${nombreTag[1].value}`);

  // Acceso por clase
   const nombreClass = document.querySelectorAll(".controls");
  //  const nombreClass =document.getElementsByClassName("controls")
  console.log({ nombreClass });
  console.log(`Valor de apellidos (by class): ${nombreClass[1].value}`);

  //mostrar el atributo value de todos los objetos que tengan la clase controls
  for (const elemento of nombreClass) {
    console.log(`El value es ${elemento.value}`);
  }
  nombreClass.forEach(elemento => {
    console.log(`El value es ${elemento.value}`);
  });
  

  // Acceso al botón
  const boton = document.querySelector(".botons");
  console.log(`Texto del botón: ${boton.textContent}`);
   console.log(`Texto del botón: ${boton.innerText}`);
   console.log(`Texto del botón: ${boton.innerHTML}`);
   boton.textContent = "Prueba"

  
}

//script
acceso()