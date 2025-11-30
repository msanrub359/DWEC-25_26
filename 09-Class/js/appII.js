"use strict"
/**
 * variables y métodos estáticos
 * significa que las variables y métodos pertenecen a la clase y no al objeto
 * Son útiles para contadores, constantes y constructores alternativos
 */

class Electro {
    //variable estática para contar el número de objetos crados
    static contador=0;

    constructor(nombre="Horno", precio=300, color='blue') { //el constructor de la clase
        this.nombre = nombre;
        this.precio = precio;
        this.color = color;
        Electro.contador++;
    }
    //métodos
    toString(){
        return `El electrodoméstico es ${this.nombre} el precio es ${this.precio}€ el color es ${this.color}`;
    }
    // método que realice la creación del objeto
    static crearElectro(nombre, precio, color){
        return new Electro(nombre, precio, color)
    }
    //método que devuelva el valor de la variable estática
    static contadorElect(){
        return Electro.contador;
    }
};


const frigo=  Electro.crearElectro("Frigorífico", 500, "red");
const horno=  Electro.crearElectro();

console.log(frigo.toString());
console.log(horno.toString());
console.log(`Los electrodométicos creados son ${Electro.contadorElect()}`);