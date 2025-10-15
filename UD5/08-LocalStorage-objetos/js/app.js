"use strict";
const LocalStorageObjeto = () => {
  let aTareas;
  const init = () => {
    document.addEventListener("DOMContentLoaded", () => {
      //establecer eventos
      document.getElementById("crear").addEventListener("click", crearTarea);
      document.getElementById("listar").addEventListener("click", listarTarea);
      cargarTareas();
    });
  };
  d;
  const cargarTareas = () => {
    //método parse parsea de cadena a objeto
    aTareas = JSON.parse(localStorage.getItem("misTareas")) || []; //si no hay cookie crea un array vacío
    console.log(aTareas);
  };
  const crearTarea = () => {
    // creando un objeto con los datos de la tarea
    const tarea = {
      des: document.getElementById("descripcionTarea").value,
      fecha: document.getElementById("fecha").value,
    };
    aTareas.push(tarea); //añado tarea al array
    /**
     * JSON(JavaScript Object Notation). Es un formato de texto ligero y de fácil lectura para representar datos estructurados
     * método stringify convierte un objeto en una cadena
     */
    localStorage.setItem("misTareas", JSON.stringify(aTareas));
    limpiar();
  };
  const listarTarea = () => {
    const cadena = aTareas
      .map((tarea) => {
        return `Tarea = ${tarea.des} fecha = ${tarea.fecha}<br>`;
      })
      .join(""); //convierte el array en string
    document.getElementById("capa").innerHTML = cadena;
  };
  const limpiar = () => {
    const inputs = document.getElementsByTagName("input");
    for (const element of inputs) {
      element.value = "";
    }
  };

  return {
    init,
  };
};

LocalStorageObjeto.init();
