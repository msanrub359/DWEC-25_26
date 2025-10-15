"use strict"
let numVent=1;
//abrir subventana
function crearVent(){
     const ventana=window.open("", `secundaria${numVent}`, "width=200,height=200");
    // const ventana=window.open("https://www.marca.com", `secundaria`,"width=200,height=200"); //Se instancia en el mismo objeto
    // console.log(ventana);
    //añadir título y botón a la ventana secundaria
   
    ventana.document.writeln(`<h1>Ventana secundaria ${numVent++}</h1>`);
     ventana.document.writeln("<button type='button' onclick='self.close()'>Cerrar ventana</button>")
   

}

function cerrarVent(){
    self.close();//cierra ventana principal
}
