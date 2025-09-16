"use strict"; //obliga a declarar variables y constantes

//mostrar datos en consola
console.log("Hola mundo de Javascript");
console.warn("Hola mundo de Javascript");
console.error("Hola mundo de Javascript");
//alert muestra ventana modal
alert("Hola mundo de Javascript");
//prompt muestra ventana  modal para petición de datos
const nombre = prompt("Introduzca su nombre", "María");
console.log("El nombre es " + nombre);

//confirm, parecido al alert pero con dos botones
// const respuesta=confirm("¿Le gusta el lenguaje JavaScript");
// if (respuesta){
//     console.log('Le gusta Javascript');
// }else{
//     console.log('No le gusta Javascript');
// }
if (confirm("¿Le gusta el lenguaje JavaScript")) {
  console.log("Le gusta Javascript");
} else {
  onsole.log("No le gusta Javascript");
}
