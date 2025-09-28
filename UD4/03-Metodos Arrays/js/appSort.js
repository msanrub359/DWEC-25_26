"use strict"
/**
 * crear un array con el filtro indicado
 */

const aNumeros=[20, 3, 7, 5, -100, 8, 35, 15];
const aApellidos=['Torralbo', 'Ansio', 'Zurita', 'Cano', 'Riquelme'];
const aAlumnos=[['Pedro', 4], ['Ana', 15], ['Candela', 8]];

//ordenar números
aNumeros.sort(); //ordena el array mediante Unicode
console.log({aNumeros});
//ordenar apellidos
aApellidos.sort(); //ascendente [A-Z]
console.log({aApellidos});
// //reverse()
aApellidos.reverse(); //invierte el array (ordenación descendente) Z-A
//aApellidos.sort().reverse(); //ordenación descendente Z-A
//console.log(aApellidos);

// aNumeros.sort(function(a,b){
//     if (a>b){
//         return 1; //cuando es positivo, b se ordena antes de a
//     }else if (a<b){
//         return -1; //cuando es negativo, a se ordena antes que b
//     }else{
//         return 0 //no hay cambio
//     }
// })
// console.log({aNumeros});
aNumeros.sort((a,b)=>a-b);// ordenación ascendente
aNumeros.sort((a,b)=>b-a);// ordenación descendente
console.log(aNumeros);
aApellidos.sort((a,b)=>b.localeCompare(a))
console.log(aApellidos);

//toSorted y toReversed
const aNumToSorted=aNumeros.toSorted((a,b)=>a-b)
const aNumToReversed=aNumeros.toReversed()
console.log({aNumeros});
console.log({aNumToReversed});
console.log({aNumToSorted});

//ordenar el array bidimensional de alumnos
//por edad y descendente
 aAlumnos.sort((a,b)=>a[1]-b[1]);
 console.log({aAlumnos});
 //ordenar por nombre, ascendente
 //aAlumnos.sort((a,b)=>a[0].localeCompare(b[0]));
console.log({aAlumnos});






