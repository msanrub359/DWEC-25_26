"use strict";
//módulos en javascript permite compartir el código en distintos
//scripts que pueden reutilizarse.
// import {Alumno, mensaje, calcularMedia} from "./modulos.js" //importar individualmente
import * as libreria from "./modulos.js"; //todo el contenido exportable del módulo



//cuerpo script
try {
    const alumno = new libreria.Alumno("Pepe", "Pérez Rodríguez", 23);
//    console.log(libreria.mensaje);
    document.getElementById("mostrar").innerHTML=libreria.mensaje
    console.log(alumno.nombre);
    console.log(alumno.apellidos); 
    console.log(libreria.calcularMedia());
    //alumno.edad = 12; 
} catch (error) {
    console.log(error);
}

