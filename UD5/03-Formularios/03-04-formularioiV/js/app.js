"use strict"
const FormularioModule =(()=>{
    let form, cancelar, provincia, exito, loader, radios,btnEnviar
    const init=()=>{
        document.addEventListener("DOMContentLoaded", ()=>{
            establecerObjetos();
            establecerEventos();
        })
    }
    const establecerObjetos=()=>{
        form=document.querySelector("#frmFirst");
        cancelar=document.querySelector("#cancelar");
        provincia=document.querySelector("#provincia");
        exito= document.querySelector(".exito");
        loader= document.querySelector(".loader");
        radios=document.querySelectorAll(".radio");
        btnEnviar=document.querySelector("#enviar")
    }
    const establecerEventos=()=>{
        form.addEventListener("submit", validarFormulario)
        cancelar.addEventListener("click", resetFormulario);
        //establecer evento 'input' a cada objeto type=input
        //const inputs=document.querySelectorAll("input");
        document.querySelectorAll(".classInput").forEach(objeto=>{
            objeto.addEventListener("input", comprobar)
        });
        provincia.addEventListener("change", comprobar)
        radios.forEach(radio=>{
            radio.addEventListener("change", (e)=>{
                validarRadios(e);
                habilitarSubmit()
        });
          
        })
        

    }
    const validarFormulario=()=>{
        console.log('Validar formulario');
    }
    const resetFormulario=()=>{
        console.log('Limpiar formulario');
    }
    const comprobar=(e)=>{
        console.log('comprobar Input');
         const objeto=e.target; //establecer el objeto que produce el evento
        //establecer el span donde se mostrará o limpiará el error
        const error=document.querySelector(`#error${objeto.id}`);
       
        //evaluar si hay error
        switch (true) {
            case objeto.validity.valid: //si cumple todas las condiciones
                error.textContent="";
                break;
            case objeto.validity.valueMissing: //Está vacío
                error.textContent="El campo es requerido";
                break;
            case objeto.validity.rangeUnderflow: //Si no cumple la condición min
                error.textContent=`Debe ser mayor o igual que ${objeto.min}`;
                break;
            case objeto.validity.rangeOverflow: //Si no cumple la condición max
                error.textContent=`Debe ser mayor o igual que ${objeto.max}`;
                break;
            case objeto.validity.tooShort: //Si no cumple la condición minlength
                error.textContent=`Demasiado corto, mínimo ${objeto.minlength} caracteres`;
                break;
             case objeto.validity.tooShort: //Si no cumple la condición minlength
                error.textContent=`Demasiado corto, mínimo ${objeto.minLength} caracteres`;
                break;
            case objeto.validity.tooLong: //Si no cumple la condición maxLength
                error.textContent=`Demasiado largo, máximo ${objeto.maxLength} caracteres`;
                break;
            case objeto.validity.patternMismatch: //Si no cumple la condición de expresión regular
                error.textContent=`El formato no coincide con el patrón esperado`;
                break;
            default:
                error.textContent= "Valor no válido"
                break;
        }
        habilitarSubmit()
    }

    const validarRadios=(e)=>{
        //verificar si dentro del grupo de radios hay alguno que está chequeado
        const seleccionado =[...radios].some(radio=>radio.checked);
        const errorTipo=document.querySelector("#errortipo");
        errorTipo.textContent=seleccionado ? "": "Seleccione una opción";
        return seleccionado;
    }
    const habilitarSubmit =()=>{
        console.log(form.checkValidity());
        const valido= form.checkValidity() && validarRadios()
        //habilita o deshabilita el botón
         btnEnviar.disabled= !valido
    }
    

 return{
    init
 }
})();

FormularioModule.init();
