"use strict"
let nombre='María', numero;
//mostrar el tipo de las variables
console.log(`El valor de la variable nombre es ${nombre} y el typeof es ${typeof nombre}`);
console.log(`El valor de la variable numero es ${numero} y el typeof es ${typeof numero}`);

//asignar valor a la variable numero
numero=23;
console.log(`El valor de la variable numero es ${numero} y el typeof es ${typeof numero}`);

//cambiar el valor y tipo a la variable numero
numero=true;
console.log(`El valor de la variable numero es ${numero} y el typeof es ${typeof numero}`);

numero="23";
console.log(`El valor de la variable numero es ${numero} y el typeof es ${typeof numero}`);

//sumar una cadena con una variable numérica, sería concatenar los valores

numero="23" + 3;
console.log(`El valor de la variable numero es ${numero} y el typeof es ${typeof numero}`);