"use strict"
const ManejoDOM = (() => {

  const init = () => {
   // document.addEventListener("DOMContentLoaded", () => {
    $(()=>{
      $('#btn-add-classlist').on('click', addClassList);
      $('#btn-add-classname').on('click', addClassName);
      $('#btn-del-classlist').on('click', delClassList);
      $('#btn-del-classname').on('click', delClassName);
      $('#btn-add-item').on('click', addCaracteristic);
      $('#btn-addPos-item').on('click', addPosCaracteristic);
      $('#btn-remove-item').on('click', delCaracteristic);
      $('#btn-update-item').on('click', updateCaracteristic);
      $('#btn-show-tree').on('click', showDOM);
      $('#btn-traversing').on('click', traversingDOM);

    }); 
    //   document.querySelector('#btn-add-classlist').addEventListener('click', addClassList);
    //   document.querySelector('#btn-add-classname').addEventListener('click', addClassName);
    //   document.querySelector('#btn-del-classlist').addEventListener('click', delClassList);
    //   document.querySelector('#btn-del-classname').addEventListener('click', delClassName);
    //   document.querySelector('#btn-add-item').addEventListener('click', addCaracteristic);
    //   document.querySelector('#btn-addPos-item').addEventListener('click', addPosCaracteristic);
    //   document.querySelector('#btn-remove-item').addEventListener('click', delCaracteristic);
    //   document.querySelector('#btn-update-item').addEventListener('click', updateCaracteristic);
    //   document.querySelector('#btn-show-tree').addEventListener('click', showDOM);
    //   document.querySelector('#btn-traversing').addEventListener('click', traversingDOM);
    // })
  }
  /**
   * @description Añade varias clases al elemento usando className  
   */
  const addClassName = () => {
    // const article = document.querySelector('#article-1');
    // article.className = "highlight rounded shadow";
     $('#article-1').attr('class', 'highlight rounded shadow');
  }
  /**
   * @description Añade varias clases al elemento usando classList
   */
  const addClassList = () => {
    // const article = document.querySelector('#article-1');
    // article.classList.add('highlight', 'rounded', 'shadow');
    $('#article-1').addClass('highlight rounded shadow');

  }

  /**
   * @description Elimina la última clase del elemento usando className
   */
  const delClassName = () => {

    // const article = document.querySelector('#article-1');
    // const clases = article.className.split(' '); // convierte la cadena de clases en un array
    // clases.pop(); // elimina la última clase del array
    // article.className = clases.join(' '); // vuelve a unir el array en una cadena y la asigna a className 

    const article = $('#article-1');
    let clases = article.attr('class').split(' ');
    clases.pop();
    article.attr('class', clases.join(' '));

  }
  /**
   * @description Elimina la última clase del elemento usando classList
   */
  const delClassList = () => {
    // const article = document.querySelector('#article-1');
    // const clases = article.classList; // devuelve una colección de clases

    // article.classList.remove(clases.pop); // elimina la última clase

    const article = $('#article-1');
    let clases = article.attr('class').split(' ');
    article.removeClass(clases.pop);
   


  }
  /**
   * @description Añade un nuevo elemento a la lista de características
   */
  const addCaracteristic = () => {
    // const list = document.querySelector('#caracteristicas-list'); // seleccionar la lista
    // const nuevoItem = document.createElement('li'); // crear nuevo elemento li
    // const items = document.querySelectorAll('#caracteristicas-list li').length;
    // nuevoItem.textContent = `Característica ${items + 1}`; // establecer el texto del nuevo elemento
    // //list.appendChild(nuevoItem); // añadir el nuevo elemento al final de la lista
    // //list.append(nuevoItem, "hola"); 
    // //list.prepend(nuevoItem); //añade el nuevo elemento al principio de la lista
    // //list.before(nuevoItem); //añade el nuevo elemento antes de la lista
    // //list.after(nuevoItem); //añade el nuevo elemento después de la lista
    // list.insertAdjacentElement('beforeend', nuevoItem); //añade el nuevo elemento al final de la lista
    // list.insertAdjacentHTML('beforeend', `<li>Característica  ${items + 1}</li>`); //añade el nuevo elemento al principio de la lista

    const list = $('#caracteristicas-list');
    const itemsCount = list.children('li').length;
    list.append(`<li>Característica ${itemsCount + 1}</li>`);
  }
  /** 
   * @description Añade un nuevo elemento a la lista de características en una posición dada
   */
  const addPosCaracteristic = () => {
    // const list = document.querySelector('#caracteristicas-list'); // seleccionar la lista
    // const numCaracteristicas = document.querySelectorAll('#caracteristicas-list li').length + 1; //
    // const nuevoItem = document.createElement('li'); //
    // nuevoItem.textContent = `Característica ${numCaracteristicas}`; //
    // const position = prompt(`Introduzca posición entre 1 y ${numCaracteristicas - 1}`); // pedir posición
    // if (position >= numCaracteristicas) {
    //   list.appendChild(nuevoItem); // añad
    //   // ir al final si la posición es mayor o igual que el número de elementos
    // } else {

    //   const referenceItem = list.children[position - 1]; // elemento de referencia para la inserción
    //   list.insertBefore(nuevoItem, referenceItem); // insertar el nuevo elemento antes del elemento de referencia
    // }

    const list = $('#caracteristicas-list');
    const numCaracteristicas = list.children('li').length + 1;
    const position = prompt(`Introduzca posición entre 1 y ${numCaracteristicas - 1}`);

    const newItem = $(`<li>Característica ${numCaracteristicas}</li>`);

    if (position >= numCaracteristicas) {
      list.append(newItem);
    } else {
      list.children(`:nth-child(${position})`).before(newItem); // nth-child usa base 1
    }
  }
  /**
   * @description Elimina un elemento de la lista de características en una posición dada
   */
  const delCaracteristic = () => {
    // const list = document.querySelector('#caracteristicas-list'); // seleccionar la lista
    // const items = list.querySelectorAll('li'); // los li de la lista  ; // los li de la lista  
    // const numCaracteristicas = items.length; // número de elementos
    // const position = prompt(`Introduzca posición entre 1 y ${numCaracteristicas}`); // pedir posición
    // // if (numCaracteristicas > 0) {
    // //   list.removeChild(list.lastElementChild); // eliminar el último elemento de la lista 

    // // }

    // if (numCaracteristicas > 0 && position >= 1 && position <= numCaracteristicas) {
    //   // list.removeChild(items[position - 1]);
    //   items[position - 1].remove(); //se borra el elemento en la posición dada
    // }

    const list = $('#caracteristicas-list');
    const numCaracteristicas = list.children('li').length;
    const position = parseInt(prompt(`Introduzca posición entre 1 y ${numCaracteristicas}`));

    if (numCaracteristicas > 0 && position >= 1 && position <= numCaracteristicas) {
      list.children().eq(position - 1).remove(); //eq base 0
    }

  }
  /**
   * 
   */
  const updateCaracteristic = () => {
    // const list = document.querySelector('#caracteristicas-list'); // lista (padre)
    // const items = list.querySelectorAll('li');                    // todos los <li>
    // const numCaracteristicas = items.length;

    // const position = parseInt(prompt(`Introduzca posición entre 1 y ${numCaracteristicas}`));
    // const newText = prompt('Introduzca el nuevo texto para la característica');

    // if (numCaracteristicas > 0 && position >= 1 && position <= numCaracteristicas) {

    //   // 1. Crear el nuevo <li>
    //   const newItem = document.createElement('li');
    //   newItem.textContent = newText;

    //   // 2. Reemplazar: nuevo por viejo
    //   list.replaceChild(newItem, items[position - 1]);
      //items[position - 1].replaceWith(newItem); // otra forma de hacerlo

    const list = $('#caracteristicas-list');
    const numCaracteristicas = list.children('li').length;
    const position = parseInt(prompt(`Introduzca posición entre 1 y ${numCaracteristicas}`));
    const newText = prompt('Introduzca el nuevo texto para la característica');

    if (numCaracteristicas > 0 && position >= 1 && position <= numCaracteristicas) {
      const newItem = $(`<li>${newText}</li>`);
      list.children(`:nth-child(${position})`).replaceWith(newItem);
    }  
    
  }
/**
 * @description Recorre el árbol DOM mostrando en consola el nombre y tipo de cada nodo
 * @param {Element} elemento 
 */
  const mostrarArbolDOM = (elemento) => {
    if (elemento.nodeName !== "#text") {
      console.log(`Nodo: ${elemento.nodeName} tipo: ${elemento.nodeType}`); // Muestra el nombre del nodo actual
      elemento.childNodes.forEach((nodoHijo) => {// Recorre los nodos hijos del nodo actual
        mostrarArbolDOM(nodoHijo);  // Llama recursivamente a la función para cada nodo hijo
      })
    }
  }
  /**
   * @description Muestra el árbol DOM en la consola
   */
  const showDOM = () => {
    mostrarArbolDOM(document.documentElement);// 

  }

  const traversingDOM = () => {
    // const list = document.querySelector('#caracteristicas-list');
    // console.log('Hijos:', list.childNodes);
    // console.log('Hijos:', list.children);
    // console.log('Primer hijo:', list.firstElementChild);
    // console.log('Primer hijo:', list.firstChild);
    // console.log('Último hijo:', list.lastElementChild);
    // console.log('Último hijo:', list.lastChild);
    // console.log('Padre:', list.parentElement);
    // console.log('Padre:', list.parentNode);
    // console.log('Hermanos:', list.previousElementSibling, list.nextElementSibling);
    // console.log('Hermanos:', list.previousSibling, list.nextSibling);
    const $list = $('#caracteristicas-list');
   
    console.log('Hijos:', $list.children());
    console.log('Primer hijo:', $list.children().first());
    
    console.log('Último hijo:', $list.children().last());
   
    console.log('Padre:', $list.parent());
    console.log('Hermanos:', $list.prev(), $list.next());
  }   

  return {
    init
  }

})();

ManejoDOM.init()