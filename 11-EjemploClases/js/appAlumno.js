"use strict";

export class Alumno{
    //declarar los atributos privados
    #nombre;
    #apellidos;
    #edad;
    #modulos;


	

   constructor(nom, ape, edad){
        this.#nombre=nom;
        this.#apellidos=ape;
        this.#edad=edad;
        this.#modulos =[];
    };
    


    
    //getter y setter
    get nombre(){
        return this.#nombre;
    }
    set nombre(value){
        if (!value || value.trim() ===""){
            throw new Error("El nombre no puede estar vacío");
        };
        this.#nombre=value;
    }

    get apellidos(){
        return this.#apellidos;
    }
    set apellidos(value){
        if (!value || value.trim() ===""){
            throw new Error("El apellidos no pueden estar vacíos");
        };
        this.#apellidos=value;
    }
    get edad(){
        return this.#edad;
    }
    set edad(value){
        if (!value || value < 18){
            throw new Error("El edad no puede estar vacía o tiene que ser mayor de edad");
        };
        this.#edad=value;
    }
    /**
     * description retorna una cadena con los datos personales del alumno
     * @returns {string} la cadena
     */
    toString(){
        return `El nombre del alumno es ${this.#nombre} los apellidos son ${this.#apellidos} y la edad es ${this.#edad}`;
    }
    /**
     * @description añade un módulo al array
     * @param {string} modulo 
     */
    addModulo(modulo){
        const aModulos=['DWEC', 'DWES', 'DIW', 'DAW', 'INGLÉS', 'PROYECTO', 'IPEII']
        //controlar que el módulo solo pueda ser DWEC, DWES, DIW, DAW, INGLÉS, PROYECTO, IPEII
        if (!modulo || modulo.trim()===""){
            throw new Error("El módulo no puede estar vacío");
        }
        const existeMod=aModulos.find(modul=>modul===modulo.toLocaleUpperCase())
        if (!existeMod){
            throw new Error("El módulo no existe");
        }
        //añadir el módulo al array
        this.#modulos.push(modulo.toLocaleUpperCase());
    }
    listModulos(){
        return this.#modulos.join(", ") || 'No existen módulos'; //join convierte el array en cadena, concatenando todos los elementos separados por (, ) y espacioen blanco. Si el array está vacío ([]), devuelve la cadena 'No existen....'
    }
    //crear método static para crear el objeto
    static crearAlumno(nombre, apellidos, edad){
        return new Alumno(nombre, apellidos, edad);
    }

}
