"use strict"
/**
 * Las clases son una mejora sintáctica sobre la herencia basada en prototipos
 * Ofrecen una sintaxis más simple para crear las clases
 * No utiliza la palabra function
 * Utiliza la palabra class
 * Las propiedades se asignan en el constructor
 * 
 */

class Electro {
    constructor(nombre="Horno", precio=300, color='blue') { //el constructor de la clase
        this.nombre = nombre;
        this.precio = precio;
        this.color = color;
    }
    //métodos
    toString(){
        return `El electrodoméstico es ${this.nombre} el precio es ${this.precio}€ el color es ${this.color}`;
    }
};

//Herencia
class DispElectro extends Electro{
    constructor(nom, precio, color, potencia, clase){
        super(nom, precio,color); //parámetros de la clase base
        this.potencia = potencia;
        this.clase = clase;
    }
    toString(){
        return `${super.toString()} la potencia es ${this.potencia} y la clase es ${this.clase}`;
    }
}
const frigo= new Electro("Frigorífico", 500, "red");
const horno= new Electro();
const tv = new DispElectro("Televisor", 900, 'white', 500, "A++")
console.log(frigo.toString());
console.log(horno.toString());
console.log(tv.toString());