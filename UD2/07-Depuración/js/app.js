"use strict"
// Ejemplo básico sin funciones
// Tarea: Encuentra y corrige los errores del código

// 1. Declarar una variable para almacenar el nombre de una persona
let nombre = "Juan"; 

// 2. Imprimir el nombre en la consola
console.log(`El nombre de la persona es: ${nombre} `);

// 3. Declarar variables para almacenar la edad y la altura
let edad = "18",
    altura = "170cm"; 

// 4. Intentar sumar edad y altura`
const total = edad + altura; 
console.log(`Suma de edad y altura: ${total}` ); 

// 5. Intentar corregir la suma convirtiendo altura a número
const alturaNumerica = altura; 
const sumaCorregida = edad + alturaNumerica;
console.log(`Suma corregida de edad y altura: ${sumaCorregida}`); 

// 6. Uso de condicionales para comprobar si una persona es mayor de edad
if (edad === 18) { 
    console.log("La persona tiene exactamente 18 años");
} else if (edad > 18) {
    console.log("La persona es mayor de edad");
} else {
    console.log("La persona es menor de edad");
}

// 7. Contar del 1 al 5
for (let i = 0; i < 5; i++) {
    console.log(`Contador: ${i}`); 
}



// 8. Intentar acceder a una variable 
const apellidos="Pérez Montes";
console.log(`El valor de la variable 'apellido' es: ${ apellido}`); // Error: 'apellido' no está definida

// 10. Corregir un número decimal mal formateado
let precio = 20,5; 
console.log(`El precio es: ${precio}`);