"use strict";

const LocalStorage = () => {
  //declaración variables, funciones y eventos
  let clave, valor;
  const passw = "Clave&12_23";
  const init = () => {
    document.addEventListener("DOMContentLoaded", () => {
      //establecer objetos
      clave = document.getElementById("clave");
      valor = document.getElementById("valor");

      //eventos
      document.getElementById("crear").addEventListener("click", addCookie);
      document.getElementById("buscar").addEventListener("click", findCookie);
      document.getElementById("listar").addEventListener("click", listCookie);
      document.getElementById("eliminar").addEventListener("click", delCookie);
    });
  };

  const addCookie = () => {
    //encriptar
    const valorEncriptado = CryptoJS.AES.encrypt(valor.value, passw).toString();
    localStorage.setItem(clave.value, valorEncriptado);
    //limpiar campos
    clave.value = "";
    valor.value = "";
  };
  const delCookie = () => {
    if (localStorage.getItem(clave.value) != null) {
      localStorage.removeItem(clave.value);
      valor.value = "cookie borrada";
    } else {
      valor.value = "cookie no existe";
    }
  };
  const findCookie = () => {
    const dato = localStorage.getItem(clave.value);
    if (valor.value == "" || dato == null) {
      valor.value = "cookie no existe";
    } else {
      valor.value = desencriptar(dato);
    }
  };
  const listCookie = () => {
    let listar = "<h2>Listado de cookies</h2>";
    document.getElementById("capa").innerHTML = "";
    for (let index = 0; index < localStorage.length; index++) {
      listar +=
        localStorage.key(index) +
        " = " +
        desencriptar(localStorage.getItem(localStorage.key(index))) +
        "<br>";
    }
    document.getElementById("capa").innerHTML = listar;
  };
  const desencriptar = (dato) => {
    return CryptoJS.AES.decrypt(dato, passw).toString(CryptoJS.enc.Utf8);
  };

  return {
    init,
  };
};

LocalStorage.init();
