"use strict"; //Obligación declarar variables y constantes
//vamos a declarar varibles y constantes en un bloque para ver su modo de actuar
let acceso = true;

//Declarar diferentes variables
let a = 10;
let b = 30;
let c = 40;

// let a=10,
//     b=20,
//     c=30;

if (acceso) {
  var nombre = "M.Luz"; //variable global en todo el script
  let apellidos = "Sánchez Rubio"; //variable global solo en el bloque
  const localidad = "Córdoba"; //solo es visible en el bloque donde se crea y no se puede modificar su contenido

  console.log(`El nombre es ${nombre}`);
  //console.log("El nombre es" + nombre);
  console.log(`los apellidos son ${apellidos} y la localidad ${localidad}`);

  //localidad='Sevilla'; //Dará un error, ya que la constante no puede modificar su valor
}

//tanto la variable apellidos como la constante localidad no se mostrarán ya que no son visibles fuera del bloque

console.log(`El nombre es ${nombre}`);
console.log(`los apellidos son ${apellidos} y la localidad ${localidad}`);
