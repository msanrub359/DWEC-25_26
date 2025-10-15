"use strict";

import { Alumno } from "./appAlumno.js";

const aAlumnos = [];

const addAlumnos = () => {
  let nomAlu = prompt("Introduzca nombre del alumno. (Cancelar->Fin");

  //bucle mientras nombre sea diferente del null
  while (nomAlu != null) {
    const apel = prompt("Introduzca apellidos del alumno");
    const edad = Number(prompt("Introduzca edad del alumno"));
    //añadir el alumno al array
    aAlumnos.push(Alumno.crearAlumno(nomAlu, apel, edad));
    //añadir módulos al alumno
    aAlumnos.at(aAlumnos.length - 1).addModulo("DWEC");
    aAlumnos.at(aAlumnos.length - 1).addModulo("DWES");

    nomAlu = prompt("Introduzca nombre del alumno. (Cancelar->Fin");
  }
};

const mostrarAlumnos=()=>{
    let texto="";
    aAlumnos.sort((a,b)=>a.edad - b.edad);
    aAlumnos.forEach(alumno=>{
        texto+= `${alumno} módulos matriculados ${alumno.listModulos()}<br>`
    });
    document.getElementById("mostrar").innerHTML=texto;
}
//cuerpo script
try {
  addAlumnos();
  mostrarAlumnos();
  
} catch (error) {
  console.log(error);
}
