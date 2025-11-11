
"use strict";

const SessionStorage = (() => {
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
  * Añade un nuevo elemento al SessionStorage (encriptado)
  */
  const addCookie = () => {
    //encriptar
    const valorEncriptado = CryptoJS.AES.encrypt(valor.value, passw).toString();
    sessionStorage.setItem(clave.value.toLocaleLowerCase(), valorEncriptado);
    //limpiar campos
    clave.value = "";
    valor.value = "";
  };
/**
   * Elimina un elemento del SessionStorage
   */
  const delCookie = () => {
    if (sessionStorage.getItem(clave.value.toLocaleLowerCase()) != null) {
      sessionStorage.removeItem(clave.value.toLocaleLowerCase());
      mostrar.textContent = "cookie borrada";
    } else {
      mostrar.textContent = "cookie no existe";
    }
  };

  /**
   * Busca y desencripta un elemento del SessionStorage
   */
  const findCookie = () => {
    const dato = sessionStorage.getItem(clave.value.toLocaleLowerCase());
    if (valor.value == "" || dato == null) {
     mostrar.textContent = "cookie no existe";
    } else {
      valor.value = desencriptar(dato);
    }
  };
  /**
   * Lista todos los elementos del SessionStorage
   */
  const listCookie = () => {
    let listar = "<h2>Listado de cookies</h2><ul>";
    
    for (let index = 0; index < sessionStorage.length; index++) {
      listar +=`<li><strong></strong>${sessionStorage.key(index)}:  ${desencriptar(sessionStorage.getItem(sessionStorage.key(index)))}</li>`
       
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

SessionStorage.init();
