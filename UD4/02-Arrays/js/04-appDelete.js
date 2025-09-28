"use strict"
/**
 * @description eliminar elementos
 * 
 */
//declaraciones

const aNumeros=[1,2,3,4,"María"];

//eliminar con delete
// delete aNumeros[2]; //eliminamos el dato de la posición 2->3
//eliminar el último elemento con el método pop() 
// console.log(aNumeros.pop())

//eliminar el primer elemento con el método pop() 
//console.log(aNumeros.shift())
//console.log(aNumeros);

//eliminar el segundo elemento
// console.log(aNumeros.splice(1,2))


//splice, desde la posición 0 elimina 2 elemento e inserta en la posición 0, los elementos
//indicados en el tercer y cuarto argumentos
// console.log(aNumeros);
console.log(aNumeros.splice(0,2, "dos", "tres", "cuatro" ))
console.log(aNumeros);


