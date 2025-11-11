"use strict";
const Cookies = (() => {
  let clave, valor, capa
  const init = () => {
    document.addEventListener("DOMContentLoaded", () => {

      //establcer los elementos de DOM
      clave = document.querySelector("#clave");
      valor = document.querySelector("#valor");
      capa = document.querySelector("#capa");

      //establecer los eventos
      document.querySelector("#crear").addEventListener("click", crearCookie);
      document.querySelector("#buscar").addEventListener("click", buscarCookie);
      document.querySelector("#listar").addEventListener("click", listarCookie);
      document.querySelector("#eliminar").addEventListener("click", delCookie);

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

    // Crear cookie con codificación adecuada
    // max-age: duración en segundos (60 = 1 minuto)
    // Secure: solo por HTTPS (comentado para desarrollo local)
    // SameSite: protege contra ataques CSRF (Cross-Site Request Forgery); Evitar que un atacante mediante un usuario autenticado ejecute
    //           acciones no deseadas en una aplicación en la que se ha iniciado una sesión.
    // path: disponible en todo el dominio

    //encodeURIComponent() en JavaScript se usa para codificar un valor de texto de modo que pueda
    //  ser transmitido de forma segura dentro de una URL o guardado en una cookie, sin que caracteres especiales
    //  causen errores o se interpreten incorrectamente
    const cookieString = `${encodeURIComponent(clave.value).toLocaleLowerCase()}=${encodeURIComponent(valor.value)};max-age=3600;SameSite=Strict;path=/`;

    // Para desarrollo local sin HTTPS, omitir Secure
    // En producción con HTTPS, añadir: ;Secure
    document.cookie = cookieString;
    
     limpiar();
  };

  /**
   * @description  Limpiar solo los inputs de texto dentro del formulario
   */
  const limpiar = () => {

    const inputText = document.querySelectorAll("input[type='text'");
    //recorrer los input
    inputText.forEach(input => input.value = "")
  };

  /**
   * @description mostrar las cookies
   */
  const listarCookie = () => {
    let mostrar = "<h2>Listado de cookies</h2>";
    console.log(document.cookie);
    const aCookies = document.cookie ? document.cookie.split("; ") : [];

  
    if (aCookies.length === 0) {
      mostrar += "<p>No hay cookies guardadas.</p>";
    } else {
      mostrar += "<ul>";
      aCookies.forEach(cookie => {
        const [ clave, valor ] = cookie.split("="); //separar la clave y el valor
        mostrar += `<li><strong>${decodeURIComponent(clave)}</strong>: ${decodeURIComponent(valor)}</li>`;
      })
      mostrar += "</ul>";


    }
    capa.innerHTML = mostrar;
  };
  /**
   * @description Buscar la cookie por la clave
   * @returns {boolean}
   */
  const buscarCookie = () => {
    
   
    if (clave.value.trim().length === 0){
      capa.textContent= 'Introduce una clave para buscar';
      return false
    } 
    const aCookies = document.cookie ? document.cookie.split("; ") : [];
    if (aCookies.length == 0) {
      capa.textContent= 'No hay cookies';
      return false
    }
    //buscar
    const cookieFind =aCookies.find(cookie =>{
      const [claveCookie] = cookie.split("=");
      return decodeURIComponent(claveCookie) === clave.value.toLocaleLowerCase();
    })
        
  if (cookieFind){ //Si la clave está en la cookie
     const [,cookieValor] = cookieFind.split("="); //extraemos el valor
     valor.value=decodeURIComponent(cookieValor);
    return true
  }else{
    capa.textContent="La cookie no existe"
  } return false
   
  };


  const delCookie = () => {
    if (buscarCookie()) {
      document.cookie = `${encodeURIComponent(clave.value).toLocaleLowerCase()}=;max-age=-1;path=/`;
      valor.value = "Cookie borrada";
    } 
  };

  return {
    init,
  };
})();

Cookies.init();
