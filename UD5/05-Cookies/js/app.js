"use strict";
const Cookies = () => {
  let clave, valor;
  const init = () => {
    document.addEventListener("DOMContentLoaded", () => {
      //establecer los eventos
      document.getElementById("crear").addEventListener("click", crearCookie);
      document.getElementById("buscar").addEventListener("click", buscarCookie);
      document.getElementById("listar").addEventListener("click", listarCookie);
      document.getElementById("eliminar").addEventListener("click", delCookie);
      //establcer los objetos input de clave y valor
      clave = document.getElementById("clave");
      valor = document.getElementById("valor");
    });
  };

  const crearCookie = () => {
    //creando una cookie de sesión
    // document.cookie="clave='hola'";
    // document.cookie="clave=adiós";
    //document.cookie=`${clave.value}=${valor.value}`;
    //crear una cookie local
    // const fechaActual=new Date();
    // fechaActual.setTime(fechaActual.getTime()+304444);
    //El atributo Secure solo permite que la cookie se envíe en protocolo seguro https
    //El atrirbuto SameSite="Strict" la cookie solo se envía en solicitudes del mismo sitio
    // console.log(fechaActual.toUTCString())
    // document.cookie=`${clave.value}=${valor.value};expires=${fechaActual.toUTCString()};Secure;SameSite="Strict"`;

    //max-age en segundos
    document.cookie = `${clave.value}=${valor.value};max-age=40;Secure;SameSite="Strict"`;
    limpiar();
  };
  const limpiar = () => {
    //seleccionar todos los input del body
    const inputText = document.getElementsByTagName("input");
    //recorrer los input

    for (const element of inputText) {
      element.value = "";
    }
  };
  const listarCookie = () => {
    let mostrar = "<h2>Listado de cookies</h2>";
    //document.cookie lee las cookies del sitio
    console.log(document.cookie);
    if (document.cookie !== "") {
      const aCookies = document.cookie.split("; ");
      aCookies.forEach((elemento) => {
        mostrar += `${elemento}<br>`;
      });
    } else {
      mostrar += "No hay cookies";
    }
    document.getElementById("capa").innerHTML = mostrar;
  };
  const buscarCookie = () => {
    let mostrar = "La cookie no existe";
    if (clave.value.trim().length !== 0) {
      //Si la clave no está vacía
      if (document.cookie !== "") {
        //Si hay cookies
        const aCookies = document.cookie.split("; "); //crear un array con las cookies
        let i = 0,
          aDatos;
        do {
          aDatos = aCookies[i].split("="); //separo la clave y el valor
          if (aDatos[0] === clave.value) {
            mostrar = aDatos[1];
          }
          i++;
        } while (i < aCookies.length && aDatos[0] !== clave.value);
      }
      valor.value = mostrar;
    }
    return mostrar;
  };
  const delCookie = () => {
    if (buscarCookie() !== "La cookie no existe") {
      document.cookie = `${clave.value}=;max-age=-1`;
      valor.value = "Cookie borrada";
    } else {
      valor.value = "Cookie no encontrada";
    }
  };

  return {
    init,
  };
};

Cookies.init();
