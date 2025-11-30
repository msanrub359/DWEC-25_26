"use strict"
/**
 * propiedades y métodos privados
 * Encapsulación: los datos no pueden ser leídos, ni modificados desde fuera
 * Seguridad: Evita manipular directamente el estado interno del objeto
 * Control: el acceso debe hacerser a través de métodos públicos (getters y setters)
 */

class Alumno{
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
    mostrarModulos(){
        return this.#modulos.join(" - ")
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
        if (!modulo || modulo.trim()===""){
            throw new Error("El módulo no puede estar vacío");
        }
        //añadir el módulo al array
        this.#modulos.push(modulo);
    }
    listModulos(){
        return this.#modulos.join(", ") || 'No existen módulos'; //join convierte el array en cadena, concatenando todos los elementos separados por (, ) y espacioen blanco. Si el array está vacío ([]), devuelve la cadena 'No existen....'
    }
}

//cuerpo del script
try {
    const alumno= new Alumno("María", "López Ruiz", 1);
    alumno.edad=12;
    alumno.addModulo("DWES");
    alumno.addModulo("DWEC");
    console.log(alumno.toString());
    console.log(alumno.listModulos());
    console.log(alumno instanceof Alumno);
} catch (error) {
    console.log(error);
}