"use strict";
const LocalStorageObjeto = (() => {
  let aTareas;
  const init = () => {
    document.addEventListener("DOMContentLoaded", () => {
      //establecer eventos
      document.querySelector("#crear").addEventListener("click", crearTarea);
      document.querySelector("#listar").addEventListener("click", listarTarea);
      cargarTareas();
    });
  };
  
 /**
  * Carga las tareas en el array
  */
  const cargarTareas = () => {
    //método parse parsea de cadena a objeto
    aTareas = JSON.parse(localStorage.getItem("misTareas")) || []; //si no hay cookie crea un array vacío
    console.log(aTareas);
  };
  /**
   * Crear las tareas
   */
  const crearTarea = () => {
    // creando un objeto con los datos de la tarea
    const tarea = {
      descrip: document.querySelector("#descripcionTarea").value,
      fecha: document.querySelector("#fecha").value,
    };
    aTareas.push(tarea); //añadir tarea al array
    /**
     * JSON(JavaScript Object Notation). Es un formato de texto ligero y de fácil lectura para representar datos estructurados
     * método stringify convierte un objeto en una cadena
     */
    localStorage.setItem("misTareas", JSON.stringify(aTareas));
    limpiar();
  };

  const listarTarea = () => {
    const cadena = aTareas.map((tarea) => {
        return `Tarea = ${tarea.descrip} | fecha = ${tarea.fecha}<br>`;
      }).join(""); //convierte el array en string
    document.querySelector("#capa").innerHTML = cadena;
  };

  /**
   * Limpiar los input del formulario
   */
  const limpiar = () => {
    const inputs = document.querySelectorAll("input");
    inputs.forEach(input=>input.value="");
  };

  return {
    init,
  };
})();

LocalStorageObjeto.init();
