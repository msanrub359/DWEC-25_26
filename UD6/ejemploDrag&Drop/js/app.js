"use strict";
const DragAndDropDemo = (() => {

    /**
     * @function init 
     * @description función inicial
     */
    const init = () => {
        document.addEventListener("DOMContentLoaded", () => {
            const items = document.querySelectorAll(".item"); //seleccionar todos los item
            const zonas = document.querySelectorAll(".zona")
            const botonReset = document.querySelector(".reset-btn");
            //establecer a cada item la propiedad draggable
            items.forEach(item => item.setAttribute("draggable", true));

            //añadir eventos de drag
            items.forEach(item => {
                item.addEventListener("dragstart", startDrag);
                item.addEventListener("dragend", endDrag);
                // item.addEventListener("drag", drag)
            })

            //añadir eventos a la zona de soltar 
            zonas.forEach(zona => {
                zona.addEventListener("dragover", overDrag);
                zona.addEventListener("dragleave", leaveDrag);
                zona.addEventListener("dragenter", enterDrag);
                zona.addEventListener("drop", drop);


            })

            botonReset.addEventListener("click", resetDemo);
        })

    }


    /**
     * @function startDrag
     * @description listener cuando comienza el arrastre del elemento
     * @param {Event} e evento que realiza cuando comienza drag
     */
    const startDrag = (e) => {
        //    console.log('startDrag');
        const draggElement = e.target;
        console.log(draggElement);
        e.dataTransfer.setData("text/plain", draggElement.getAttribute("data-id")); //guardando el id del objeto
        e.target.classList.add("dragging"); //añadimos la clase dragging al objeto arrastrado


    }
    /**
     * @function endDrag
     * @description listener cuando finaliza el arrastre de un elemento
     * @param {Event} e evento que realiza cuando finaliza el drag
     */
    const endDrag = (e) => {
        //  console.log('endDrag');
        e.target.classList.remove("dragging");


    }
    // const drag =()=>{
    //     console.log('drag');
    // }
    /**
     * @function enterDrag
     * @description Evento que se realiza cuando un elemento arrastrado entra en una zona de drop
     * @param {Event} e evento que realiza cuando un elemento está sobre una zona de drop
     */
    const enterDrag = (e) => {
        console.log('enter');
        e.target.classList.add("drag-over")
    }
    /**
     * @function overDrag
     * @description Evento que se realiza cuando un elemento arrastrado está sobre una zona de drop
     * @param {Event} e evento que realiza cuando un elemento está sobre una zona de drop
     * @returns {boolean} false para permitir el drop
     */
    const overDrag = (e) => {
        console.log('over Drag');
        e.preventDefault();

    }
    /**
     * @function leaveDrag
     * @description Evento que se realiza cuando un elemento arrastrado sale de una zona de drop
     * @param {Event} e evento que realiza cuando un elemento sale de una zona de drop
     */
    const leaveDrag = (e) => {
        console.log('leave Drag');
        e.target.classList.remove("drag-over")
    }
    /**
     * @function drop
     * @description Evento que se realiza cuando un elemento arrastrado se suelta en una zona de drop
     * @param {Event} e evento que realiza cuando se suelta el elemento arrastrado en una zona de drop
     */
    const drop = (e) => {
        console.log('drop');
        const zona = e.target.querySelector('.items-container'); //el contenedor  soltado
        const id = e.dataTransfer.getData("text/plain"); //extraemos el contenido de dataTransfer
        console.log(id);

        const elemento = document.querySelector(`.item[data-id='${id}']`);
        console.log(elemento);
        if (elemento.getAttribute("data-copy") == "true") {
            elemento.setAttribute("draggable", false); //quitar el atribute draggable
            const nuevoElemento = elemento.cloneNode(true); //clona el elemento arrastrado
            nuevoElemento.setAttribute("data-copy", "false"); //cambiar el atributo data-copy a false
            nuevoElemento.querySelector(".copy-label").textContent = ""; //quitar la etiqueta de copia
            addElemento(zona, nuevoElemento)



        } else {
            addElemento(zona, elemento)



        }
     
        e.target.classList.remove('drag-over'); //quitar clase



    }
    /**
     * @function addElemento
     * @description se añadirá el elemento al contenedor
     * @param {Element} zona contiene el contenedor donde el elemento arrastrado será soltado
     * @param {Element} elemento contiene el elemento arrastrado
     */
    const addElemento = (zona, elemento) => {
        if (zona) {
            const borrarMensaje = document.querySelector(".empty-message"); //seleccionar mensaje
            if (!borrarMensaje.classList.contains("hidden")) {
                borrarMensaje.classList.add("hidden"); //eliminar mensaje en el contenedor source-items
            }
            zona.append(elemento); //añadir elmento

        } 
        elemento.classList.remove("dragging");
       

    }


    /**
     * @function resetDemo
     * @description mover los elementos al contenedor original
     */
    const resetDemo = () => {

        const sourceContainer = document.querySelector('#source-items');
        const targetContainer = document.querySelector('#target-items');

        const allItems = document.querySelectorAll('.item');
        allItems.forEach(item => {
            if (item.getAttribute('data-id') == 4 && item.getAttribute('data-copy') == 'false') {
                item.remove();

            } else {
                sourceContainer.appendChild(item);
                item.draggable = true // restaurar draggable
            }

        });

        const mensaje = document.querySelector(".empty-message"); //seleccionar mensaje
        if (mensaje.classList.contains("hidden")) {
            mensaje.classList.remove("hidden"); //mostrar mensaje
        }



    }
    return {
        init
    }
})();

DragAndDropDemo.init()


