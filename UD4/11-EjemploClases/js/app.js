"use strict"
import { Alumno } from "./appAlumno.js"
//declaraciones variables, constantes y funciones
const aAlumnos=[];

const entradaAlumnos=()=>{
  let nombre=prompt("Introduzca nombre del alumno. (Cancelar->Fin)");
  //bucle mientras nombre sea diferente de null (cancelar)
  while (nombre!==null){
    const curso=prompt("Introduzca curso");
    const edad=prompt ("Introduzca edad");
    //añadir el objeto  al array
    aAlumnos.push(Alumno.crearAlumno(nombre, curso, edad));


    nombre=prompt("Introduzca nombre del alumno. (Cancelar->Fin)");
  }
  console.log(aAlumnos);
}
const mostrarAlumnos=()=>{
 //ordenar
 aAlumnos.sort((a,b)=>a.nombre.localeCompare(b.nombre));
 //mostrar
 aAlumnos.forEach(alumno=>{
  document.getElementById("mostrar").innerHTML+= alumno.toString();
 })
 
}

//body script
try {
  entradaAlumnos();
  mostrarAlumnos();
} catch (error) {
    console.log(error);
}

