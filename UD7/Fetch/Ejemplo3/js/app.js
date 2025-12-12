"use strict"
const AJAXFetch = (() => {
    let mensaje, provincias;
    const init = () => {
        document.addEventListener("DOMContentLoaded", () => {
            //establecer los elementos mensaje, spinner
            mensaje = document.querySelector("#mensaje");

            provincias = document.querySelector("#provincias");


            mostrarProvincias();
        })
    }
    const mostrarProvincias = async () => {

        try {
            const response = await fetch("https://raw.githubusercontent.com/IagoLast/pselect/master/data/provincias.json");
            if (!response.ok) {
                throw new Error(`Error en la comunicacion ${response.status}`);
            };
            const data = await response.json()
            //ordenar el json
            data.sort((a, b) => a.nm.localeCompare(b.nm));

            data.forEach(element => {

                const prov = document.createElement("option");
                prov.setAttribute("value", element.id);
                prov.textContent = element.nm
                provincias.append(prov)
                       
            })
            //establecer el evento change al select de provncias
            provincias.addEventListener("change", ()=>{
                mensaje.classList.remove("ocultar");
                mensaje.textContent =`El id es ${provincias.value}`
            })
        } catch (error) {
            console.log(error);
        }

    }
    const borrarModulos = () => {
        //seleccionar todas las opciones de módulos, excepto la primera
        const opciones = document.querySelector("#modulos").querySelectorAll("option:not(:first-child)");
        opciones.forEach(elemento => elemento.remove());
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
})();
AJAXFetch.init();