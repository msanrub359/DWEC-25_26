"use strict"

//declaración de eventos con el modelo tradicional

//evento load del navegador
// const cargar=()=>{
//     alert("Página cargada")
// }
// function cargar(){
//     alert("Página cargada")
// }
// window.onload=cargar; //ya no se utiliza
//función anónima arrow

// window.addEventListener("load", ()=>{
//     console.log('load');
// })
//acceso al botón
window.addEventListener("DOMContentLoaded", ()=>{
    //acceso a objetos del DOM
    const boton=document.querySelector(".botons");
    const nombre=document.querySelector("#nombreId");
    const apellidos=document.querySelector("#apellidosId");
//establecer el evento click
    boton.addEventListener("click", mostrarDatos);
    nombre.addEventListener("focusin", (e)=>{ //recibe el foco. focusin()
        console.log('El nombre ha recibido el foco');
        e.target.style.backgroundColor= "cyan"; //e.target == nombre
    });
    nombre.addEventListener("focusout",  function(e){ //focusout 
        console.log('El nombre ha perdido el foco');
        this.style.backgroundColor= ""; //e.target == nombre
    })
})


const mostrarDatos= (e)=>{
    console.log(e);
    e.preventDefault(); //anula la acción final
    console.log('ha pulsado el botón');
}






