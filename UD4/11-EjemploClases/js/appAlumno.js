"use strict";
export class Alumno {
  //declarar las propiedades privadas
  #nombre;
  #curso;
  #edad;
  //constructor
  constructor(nom, cur, edad) {
    this.nombre = nom; //quitar la propiedad y poner los setter
    this.curso = cur;
    this.edad = edad;
  }
  //getter y setter
  get nombre() {
    return this.#nombre;
  }
  set nombre(value) {
    if (value.trim().length != 0) {
      //convertir el valor a mayúsculas
      this.#nombre = value.toUpperCase();
    } else {
      //genera un error
      throw "El nombre no debe estar vacío";
    }
  }
  get curso() {
    return this.#curso;
  }
  set curso(value) {
    const aCurso = ["1DAM", "2DAM", "1DAW", "2DAW", "CIBER", "VIDEOJUEGOS"];
    const existe = aCurso.find((curso) => curso === value.toUpperCase());
    if (existe != undefined) {
      this.#curso = value.toUpperCase();
    } else {
      throw "El curso no existe";
    }
  }
  get edad() {
    return this.#edad;
  }
  set edad(value){
    if(!isNaN(value)){ //es un número
        this.#edad=Number(value);
    }else{
        throw ('La edad debe ser un número')
    }
  }
  //métodos
  toString(){
    return `El nombre del alumno es ${this.#nombre} la edad es ${this.#edad} y el curso matriculado es ${this.#curso}<br>`
  }
  //método estático
  static crearAlumno(nom, curso, edad){
    return new Alumno(nom, curso, edad)
  }
}
