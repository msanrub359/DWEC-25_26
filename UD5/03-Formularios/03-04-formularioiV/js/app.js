"use strict";
const FormularioModule = (() => {
    let form, cancelar, provincia, exito, loader, radios, btnEnviar;
    const init = () => {
        document.addEventListener("DOMContentLoaded", () => {
            establecerObjetos();
            establecerEventos();
        });
    };
    const establecerObjetos = () => {
        form = document.querySelector("#frmFirst");
        cancelar = document.querySelector("#cancelar");
        provincia = document.querySelector("#provincia");
        exito = document.querySelector(".exito");
        loader = document.querySelector(".loader");
        radios = document.querySelectorAll(".radio");
        btnEnviar = document.querySelector("#enviar");
    };
    const establecerEventos = () => {
        form.addEventListener("submit", validarFormulario);
        cancelar.addEventListener("click", resetFormulario);
        //establecer evento 'input' a cada objeto type=input
        //const inputs=document.querySelectorAll("input");
        document.querySelectorAll(".classInput").forEach((objeto) => {
            objeto.addEventListener("input", comprobar);
        });
        provincia.addEventListener("change", comprobar);
        radios.forEach((radio) => {
            radio.addEventListener("change", (e) => {
                validarRadios(e);
                habilitarSubmit();
            });
        });
    };
    /**
     * @description generar token antes de enviar datos
     * @return {string}
     */
    const validarCaptcha = () => {
        //crear promesa
        return new Promise((resolve, reject) => {
            //verificar que el script  de reCaptcha está cargado
            if (typeof grecaptcha === "undefined") {
                reject("El reCaptcha no está cargado correctamente");
            }
            grecaptcha.ready(function () {
                grecaptcha
                    .execute("6LfzsvwrAAAAALPNjd_GE_4kIsBkKOpVVRh3Fp3c", {
                        action: "submit",
                    })
                    .then(function (token) {
                        console.log(`Token generado ${token}`);
                        resolve(token);
                    })
                    .catch((error) => {
                        console.log(`Error ejecutando el reCaptcha ${error}`);
                        reject(`No se pudo validar el reCaptcha`);
                    });
            });
        });
    };

    const validarFormulario = async (e) => {
        e.preventDefault(); // Evita envío del formulario

        const spinner = document.querySelector("#spinner");
        const exito = document.querySelector("#exito");
        const captcha = document.querySelector("#captcha");
      
        try {
            captcha.value = await validarCaptcha();
            console.log(`token en validarFormulario ${captcha.value}`);
            confirmarEnvio(spinner, exito,e.target);
            
        } catch (error) {
            exito.textContent = error
        } finally {
            // Ocultar spinner y limpiar formulario después de 3s
            setTimeout(() => {
                spinner.style.display = "none";
                exito.textContent = "";
                resetFormulario();
            }, 3000);
        }


    };
    const confirmarEnvio = (spinner, exito, objeto) => {
const modal= new tingle.modal({
    footer:true,
    stickyfooter:false,
    closeMethods:['overlay', 'button', 'escape'],
    closeLabel: 'Cerrar'
    
})
const mostrar='prueba'
//establecer el contenido modal
modal.setcontent(mostrar);
modal.addFooterBtn("Aceptar" )
       
    //     Swal.fire({
    //         title: "Formulario IV",
    //         html: "¿Desea <strong>enviar</strong> los datos del formulario?",
    //         showCancelButton: true,
    //         confirmButtonColor: "#3085d6",
    //         cancelButtonColor: "#d33",
    //         confirmButtonText: "Enviar",
    //         cancelButtonText: "No enviar"
        
    //     }).then((result) => {
    //         if (result.isConfirmed) {
    //             // Recoger datos con FormData y mostrar por consola
    //         const datos = new FormData(objeto);
    //         //JSON.stringify, convierte el objto JSON a cadena
    //         console.log(`Datos enviados: ${JSON.stringify(Object.fromEntries(datos))}`);
    //         spinner.style.display = "block"; //poner visible el spinner
    //         exito.textContent = "Datos enviados";
    //         }
    //     });
    }
    const resetFormulario = () => {
        form.reset(); //limpiar el formulario
    };
    const comprobar = (e) => {
        console.log("comprobar Input");
        const objeto = e.target; //establecer el objeto que produce el evento
        //establecer el span donde se mostrará o limpiará el error
        const error = document.querySelector(`#error${objeto.id}`);

        //evaluar si hay error
        switch (true) {
            case objeto.validity.valid: //si cumple todas las condiciones
                error.textContent = "";
                break;
            case objeto.validity.valueMissing: //Está vacío
                error.textContent = "El campo es requerido";
                break;
            case objeto.validity.rangeUnderflow: //Si no cumple la condición min
                error.textContent = `Debe ser mayor o igual que ${objeto.min}`;
                break;
            case objeto.validity.rangeOverflow: //Si no cumple la condición max
                error.textContent = `Debe ser mayor o igual que ${objeto.max}`;
                break;
            case objeto.validity.tooShort: //Si no cumple la condición minlength
                error.textContent = `Demasiado corto, mínimo ${objeto.minlength} caracteres`;
                break;
            case objeto.validity.tooShort: //Si no cumple la condición minlength
                error.textContent = `Demasiado corto, mínimo ${objeto.minLength} caracteres`;
                break;
            case objeto.validity.tooLong: //Si no cumple la condición maxLength
                error.textContent = `Demasiado largo, máximo ${objeto.maxLength} caracteres`;
                break;
            case objeto.validity.patternMismatch: //Si no cumple la condición de expresión regular
                error.textContent = `El formato no coincide con el patrón esperado`;
                break;
            default:
                error.textContent = "Valor no válido";
                break;
        }
        habilitarSubmit();
    };

    const validarRadios = (e) => {
        //verificar si dentro del grupo de radios hay alguno que está chequeado
        const seleccionado = [...radios].some((radio) => radio.checked);
        const errorTipo = document.querySelector("#errortipo");
        errorTipo.textContent = seleccionado ? "" : "Seleccione una opción";
        return seleccionado;
    };
    const habilitarSubmit = () => {
        console.log(form.checkValidity());
        const valido = form.checkValidity() && validarRadios();
        //habilita o deshabilita el botón
        btnEnviar.disabled = !valido;
    };

    return {
        init,
    };
})();

FormularioModule.init();
