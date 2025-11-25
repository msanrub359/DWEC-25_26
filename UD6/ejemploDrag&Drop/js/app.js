"use strict";
const DragAndDropDemo = (() => {
    let items, zonas, draggedElement = null;
    const init = () => {
        document.addEventListener("DOMContentLoaded", () => {
            items = document.querySelectorAll('.item');
            zonas = document.querySelectorAll('.zona');

            // establecer el atributo draggable a true
            items.forEach(item => {
                item.setAttribute('draggable', 'true');
            });

            // añadir los event eventos
            items.forEach(item => {
                item.addEventListener('dragstart', startDrag);
                item.addEventListener('dragend', endDrag);

            });
            // añadir eventos a las zonas de drag and drop
            zonas.forEach(zone => {
                zone.addEventListener('dragover', overDrag);
                zone.addEventListener('dragenter', enterDrag);
                zone.addEventListener('dragleave', leaveDrag);
                zone.addEventListener('drop', drop);
            });
            // añadir evento al botón de reinicio
            const resetBoton = document.querySelector('.reset-btn');
            resetBoton.addEventListener('click', resetDemo);
        })
    }


    /**
     * 
     * @param {Event} e evento que realiza cuando comienza drag
     */
    const startDrag = (e) => {
        console.log('Comienza el drag');
        draggedElement = e.target; // elemento que se está arrastrando
        draggedElement.classList.add('dragging'); // añadir clase para estilo
        e.dataTransfer.setData('text/plain', draggedElement.getAttribute('data-id')); // datos transferidos

    }
    /**
     * 
     * @param {Event} e evento que realiza cuando finaliza el drag
     */
    const endDrag = (e) => {
        console.log('Fin drag');
        draggedElement.classList.remove('dragging'); // eliminar clase de estilo    
        


    }
    /**
     * @description Evento que se realiza cuando un elemento arrastrado entra en una zona de drop
     * @param {Event} e evento que realiza cuando un elemento está sobre una zona de drop
     */
    const enterDrag = (e) => {
        console.log('enter Drag');
    }
    /**
     * @description Evento que se realiza cuando un elemento arrastrado está sobre una zona de drop
     * @param {Event} e evento que realiza cuando un elemento está sobre una zona de drop
     * @returns {boolean} false para permitir el drop
     */
    const overDrag = (e) => {
        console.log('over Drag');

        e.preventDefault(); // necesario para permitir el drop

        e.target.classList.add('drag-over'); // añadir clase para estilo

        return false;
    }
    /**
     * @description Evento que se realiza cuando un elemento arrastrado sale de una zona de drop
     * @param {Event} e evento que realiza cuando un elemento sale de una zona de drop
     */
    const leaveDrag = (e) => {
        console.log('leave Drag');
        e.target.classList.remove('drag-over'); // eliminar clase de estilo
    }
    /**
     * @description Evento que se realiza cuando un elemento arrastrado se suelta en una zona de drop
     * @param {Event} e evento que realiza cuando se suelta el elemento arrastrado en una zona de drop
     */
    const drop = (e) => {
        console.log('drop');

        const container = e.currentTarget.querySelector('.items-container'); // contenedor de destino
        const borrarMensaje = container.querySelector('.empty-message'); // mensaje de vacío

        if (borrarMensaje) {
            borrarMensaje.remove();
        }

        // Obtiene los datos enviados en dragstart
        //const html = e.dataTransfer.getData('text/html');
        const id = e.dataTransfer.getData('text/plain');
        const elemento = document.querySelector(`.item[data-id='${id}']`);

        // Agrega el elemento arrastrado al contenedor de destino
        if (draggedElement.getAttribute('data-copy') === 'true') {
            // Crear un nuevo elemento para la copia
            const nuevoElemento = elemento.cloneNode(true);// clonar el elemento arrastrado
            nuevoElemento.draggable = false; // quitar draggable en el nuevo elemento
            nuevoElemento.removeAttribute('data-copy') // quitar el atributo de copia
            nuevoElemento.querySelector('.copy-label').remove(); // quitar la etiqueta de copia
            container.append(nuevoElemento); // añadir el nuevo elemento al contenedor
           elemento.draggable = false; // quitar draggable en el elemento original
        } else {
            container.append(draggedElement);
        }
         elemento.classList.remove('dragging');// eliminar clase de estilo del elmento arrastrado
         e.target.classList.remove('drag-over'); // eliminar clase de estilo del contenedor dondse se suelta

    }
    const resetDemo = () => {

        const sourceContainer = document.getElementById('source-items');
        const targetContainer = document.getElementById('target-items');

        const allItems = document.querySelectorAll('.item');
        allItems.forEach(item => {
            if (item.getAttribute('data-id') ==4  && !item.getAttribute('data-copy')) { 
                item.remove();
                
            } else {
                sourceContainer.appendChild(item);
                item.draggable = true // restaurar draggable
            }

        });

        // Vaciar la zona de destino
        targetContainer.innerHTML = '';
        const div = document.createElement("div");
        div.classList.add("empty-message");
        div.textContent = "Arrastra elementos aquí";
        targetContainer.append(div);
    }
    return {
        init
    }
})();

DragAndDropDemo.init()




