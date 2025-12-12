"use strict"
const AJAXFetch = (() => {
    let mensaje, spinner, cursos;
    const init = () => {
        document.addEventListener("DOMContentLoaded", () => {
            //establecer los elementos mensaje, spinner
            // mensaje = document.querySelector("#mensaje");
            spinner = document.querySelector("#spinner");
            cursos= document.querySelector("#cursos");
            //establecer el evento change al select de cursos
            cursos.addEventListener("change", mostrarModulos);
          
            //ocultar spinner
            spinner.classList.add("ocultar")
        })
    }
    const mostrarModulos = async () => {
        await mostrarSpinner();
        try {
            const response = await fetch("./data/Ejemplo2.xml");
            if (!response.ok) {
                throw new Error(`Error en la comunicacion ${response.status}`);
            };
            const data = await response.text()
            //parsear los datos xml
            const parse = new DOMParser();
            const xmlDoc =parse.parseFromString(data, "text/xml");
            borrarModulos();
            xmlDoc.querySelectorAll("curso").forEach((element, index)=>{
                if (index ==cursos.value){
                    element.querySelectorAll("asig").forEach(mod=>{
                        const modulo =document.createElement("option");
                        modulo.setAttribute("value", mod.textContent);
                        modulo.textContent=mod.textContent
                        //añadir la opción en el select modulos
                        document.querySelector("#modulos").append(modulo)
                    })
                }
            })
            console.log(data); 
            //cargar los datos al select modulos
        } catch (error) {
            console.log(error);
        }

    }
const  borrarModulos=()=>{
    //seleccionar todas las opciones de módulos, excepto la primera
    const opciones = document.querySelector("#modulos").querySelectorAll("option:not(:first-child)");
    opciones.forEach(elemento=>elemento.remove());
}  
const mostrarSpinner = () => {
   
    return new Promise((resolve, reject) => {
        spinner.classList.remove("ocultar");
        setTimeout(() => {
            spinner.classList.add("ocultar");
            resolve(true)
        }, 2000)

    })
}
return {
    init
}
}) ();
AJAXFetch.init();