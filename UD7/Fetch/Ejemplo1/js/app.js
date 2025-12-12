"use strict"

const AJAXFetch=(()=>{
    let mensaje, spinner;
    const init=()=>{
        document.addEventListener("DOMContentLoaded", ()=>{
            //establecer los elementos mensaje, spinner
           mensaje=document.querySelector("#mensaje");
           spinner=document.querySelector("#spinner");
            //establecer los eventos a los botones
            document.querySelector("#get").addEventListener("click",mostrarGet );
            document.querySelector("#post").addEventListener("click",mostrarPost );
            //ocultar spinner
            spinner.classList.add("ocultar")
        })
    }
    const mostrarGet=async()=>{
        await mostrarSpinner();
        fetch ("./data/Ejemplo1.php?valor=GET&nombre=Ana")
        .then (response=>{
            if(!response.ok){
                throw new Error(`Error en la comunicacion ${response.status}`);
            };
            return response.text();
        }).then (data=>{
            mensaje.textContent =data
        }).catch (error=>{
            console.log(error);
        })

    }
    const mostrarPost=async()=>{
         await mostrarSpinner();
        fetch ("./data/Ejemplo1.php",{
            method: 'POST',
            headers:{
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body:"valor=POST&nombre=Luis"
        })
        .then (response=>{
            if(!response.ok){
                throw new Error(`Error en la comunicacion ${response.status}`);
            };
            return response.text();
        }).then (data=>{
            mensaje.textContent =data
        }).catch (error=>{
            console.log(error);
        })
        
    }
    const mostrarSpinner=()=>{
        mensaje.textContent=""; //limpiar
        return new Promise ((resolve, reject)=>{
             spinner.classList.remove("ocultar");
            setTimeout(()=>{
                 spinner.classList.add("ocultar");
                 resolve(true)
            }, 2000)
           
        })
    }
    return{
        init
    }
})();
AJAXFetch.init();