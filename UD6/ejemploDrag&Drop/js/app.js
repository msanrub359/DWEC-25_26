"use strict";
const DragAndDropDemo = (() => {
    let items, zonas, draggedElement = null;
    const init = () => {
        document.addEventListener("DOMContentLoaded", () => {
            
        })
            
    }


    /**
     * 
     * @param {Event} e evento que realiza cuando comienza drag
     */
    const startDrag = (e) => {
       

    }
    /**
     * 
     * @param {Event} e evento que realiza cuando finaliza el drag
     */
    const endDrag = (e) => {
         
        


    }
    /**
     * @description Evento que se realiza cuando un elemento arrastrado entra en una zona de drop
     * @param {Event} e evento que realiza cuando un elemento está sobre una zona de drop
     */
    const enterDrag = (e) => {
     
    }
    /**
     * @description Evento que se realiza cuando un elemento arrastrado está sobre una zona de drop
     * @param {Event} e evento que realiza cuando un elemento está sobre una zona de drop
     * @returns {boolean} false para permitir el drop
     */
    const overDrag = (e) => {
        console.log('over Drag');

    }
    /**
     * @description Evento que se realiza cuando un elemento arrastrado sale de una zona de drop
     * @param {Event} e evento que realiza cuando un elemento sale de una zona de drop
     */
    const leaveDrag = (e) => {
        console.log('leave Drag');
      
    }
    /**
     * @description Evento que se realiza cuando un elemento arrastrado se suelta en una zona de drop
     * @param {Event} e evento que realiza cuando se suelta el elemento arrastrado en una zona de drop
     */
    const drop = (e) => {
        console.log('drop');

        
       
            

    }
    const resetDemo = () => {

       
       
    }
    return {
        init
    }
})();

DragAndDropDemo.init()





