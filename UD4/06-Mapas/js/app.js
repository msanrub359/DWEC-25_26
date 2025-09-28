"use strict"
/**
 * @description Los mapas son estructuras que permiten almacer una 
 * colección de datos organizados en forma de pares "clave-valor",
 * en las cuales, la clave no puede duplicada
 */

//crear un mapa
const agenda=new Map([
    ['María', 11111111],
    ['Jose', 22222222],
    ['Juan', 33333333],
])

//recorrer el mapa
for (const datos of agenda) {
    console.log({datos});
}
//mostra los datos por separado
for (const [nombre, telefono] of agenda) {
    console.log(`El teléfono de ${nombre} es ${telefono}`);
}

//mostrar claves
for (const clave of agenda.keys()) {
    console.log(`Las claves son ${clave}`);
}
//mostrar valores
for (const clave of agenda.values()) {
    console.log(`Los valores son ${clave}`);
}
//añadir elementos
agenda.set('Olga',3434343);
agenda.set('María', 888888);
console.log({agenda});
//búsqueda
if (agenda.has('JuaN')){
    console.log('Existe');
}else{
    console.log('No existe');
}
// //tamaño
console.log(`El tamaño de la agenda es ${agenda.size}`);
//acceso al valor de una clave
console.log(`El teléfono de Juan es ${agenda.get('Juan')}`);

//conversión a Array
const aAgenda=[...agenda];
console.log(aAgenda);