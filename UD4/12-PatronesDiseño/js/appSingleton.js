"use strict"

/**
 * @description Patrón de Diseño Singleton: El patrón Singleton se utiliza para asegurarse
 * que una clase solo tenga una instancia y proporcionar un punto de acceso global a esa instancia.
 */

//Ejemplo 
class Singleton{
    #nombre
    #apellidos
    constructor(nom, ape){
        if (Singleton.instance){ //ya se ha instanciado a un objeto
            return Singleton.instance
        }
        this.#nombre=nom;
        this.#apellidos=ape;
        Singleton.instance=this
        
    }

    //Métodos de la clase
}

//cuerpo script

const instancia1 = new Singleton("Luis", "Cano");
const instancia2 = new Singleton("Esther", "López");
console.log(instancia1=== instancia2);
