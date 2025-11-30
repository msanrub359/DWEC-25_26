"use strict";

const LocalStorage = (() => {
  //declaración variables, funciones y eventos
  let clave, valor, mostrar;
  const passw = "Clave&12_23";

  const init = () => {
    document.addEventListener("DOMContentLoaded", () => {
      //establecer objetos
      clave = document.querySelector("#clave");
      valor = document.querySelector("#valor");
      mostrar = document.querySelector("#capa");

      //eventos
      document.querySelector("#crear").addEventListener("click", addCookie);
      document.querySelector("#buscar").addEventListener("click", findCookie);
      document.querySelector("#listar").addEventListener("click", listCookie);
      document.querySelector("#eliminar").addEventListener("click", delCookie);
    });
  };
  /**
  * Añade un nuevo elemento al localStorage (encriptado)
  */
  const addCookie = () => {
    //encriptar
    const valorEncriptado = CryptoJS.AES.encrypt(valor.value, passw).toString();
    localStorage.setItem(clave.value.toLocaleLowerCase(), valorEncriptado);
    //limpiar campos
    clave.value = "";
    valor.value = "";
  };
/**
   * Elimina un elemento del localStorage
   */
  const delCookie = () => {
    if (localStorage.getItem(clave.value.toLocaleLowerCase()) != null) {
      localStorage.removeItem(clave.value.toLocaleLowerCase());
      mostrar.textContent = "cookie borrada";
    } else {
      mostrar.textContent = "cookie no existe";
    }
  };

  /**
   * Busca y desencripta un elemento del localStorage
   */
  const findCookie = () => {
    const dato = localStorage.getItem(clave.value.toLocaleLowerCase());
    if (clave.value == "" || dato == null) {
     mostrar.textContent = "cookie no existe";
    } else {
      valor.value =  desencriptar(dato);
      mostrar.textContent = "";
    }
  };
  /**
   * Lista todos los elementos del localStorage
   */
  const listCookie = () => {
    let listar = "<h2>Listado de cookies</h2><ul>";
    
    for (let index = 0; index <localStorage.length; index++) {
       //listar +=`<li><strong></strong>${localStorage.key(index)}:  ${localStorage.getItem(localStorage.key(index))}</li>`
       listar +=`<li><strong></strong>${localStorage.key(index)}:  ${desencriptar(localStorage.getItem(localStorage.key(index)))}</li>`
       
    }
    listar+="</ul>"
    mostrar.innerHTML = listar;
  };

  /**
   * 
   * @param {string} dato encriptado
   * @returns {string} dato desencriptado
   */
  const desencriptar = (dato) => {
    return CryptoJS.AES.decrypt(dato, passw).toString(CryptoJS.enc.Utf8);
  };

  return {
    init,
  };
})();

LocalStorage.init();