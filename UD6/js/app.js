"use strict"
const ManejoDOM = (() => {
    const init = () => {
        document.addEventListener("DOMContentLoaded", () => {
            document.querySelector("#btn-add-classlist").addEventListener("click", addClassList);
            document.querySelector("#btn-add-classname").addEventListener("click", addClassName);
            document.querySelector("#btn-del-classlist").addEventListener("click", delClassList);
            document.querySelector("#btn-del-classname").addEventListener("click", delClassName);
            document.querySelector("#btn-hideShow-classlist").addEventListener("click", showHideClassName);
            document.querySelector("#btn-add-item").addEventListener("click", addCaracteristica);
            document.querySelector("#btn-addPos-item").addEventListener("click", addPosCaracteristica);
            document.querySelector("#btn-remove-item").addEventListener("click", delPosCaracteristica);
            document.querySelector("#btn-update-item").addEventListener("click", updatePosCaracteristica);
            document.querySelector("#btn-traversing").addEventListener("click", traversing);
            document.querySelector("#btn-show-tree").addEventListener("click", showTree);

        })
    }
    /**
     * @description Añade varias clases al elemento con classList
     */
    const addClassList = () => {
        const article = document.querySelector("#article-1");
        article.classList.add("highlight", "rounded", "shadow");
        // article.classList.add('highlight').add("rounded").add("shadow")
    }
    /**
     * @description Añade varias clases al elemento con className
     */
    const addClassName = () => {
        const article = document.querySelector("#article-1");
        article.className = "highlight rounded shadow";
    }
    /**
     * @description Elimina la última clase del elemento usando classList
     */
    const delClassList = () => {
        const article = document.querySelector("#article-1");
        const clases = article.classList;
        if (clases.length != 0) {
            //article.classList.remove(clases[clases.length-1]);
            article.classList.remove([...clases].pop())
        }
    }
    /**
 * @description Elimina la última clase del elemento usando className
 */
    const delClassName = () => {
        const article = document.querySelector("#article-1");
        let clases = article.className.split(" "); //convierte la cadena de clases en un array
        if (clases.length != 0) {
            clases.pop(); //elimina la última clase
            article.className = clases.join(' '); //vuelve a unir el array en una cadena y se le asigna a className
        }

    }
    /**
     * @description Mostrar u ocultar el nodo article-1
     */
    const showHideClassName = () => {
        const article = document.querySelector("#article-1");
        article.classList.toggle("ocultar");
    }
/**
 * @description Añade elemento li a la lista
 */
    const addCaracteristica = () => {
        const list = document.querySelector("#caracteristicas-list"); //seleccionar la lista donde se va a insertar las características
        const nuevoItem = document.createElement("li");
        // const numItems=document.querySelectorAll("#caracteristicas-list >li").length +1
        const numItems = list.children.length + 1 //calcular los hijos que 
        // const texto= document.createTextNode("Característica");
        // //añadir el texto al nodo li
        // nuevoItem.appendChild(texto);
        // //añadir nuevo elemnto a la lista
        // list.appendChild(nuevoItem); //añadir el nodo li al nodo <ul>
        nuevoItem.textContent = `Característica ${numItems}`
        list.append(nuevoItem);
        //list.prepend(nuevoItem); //inserta el nodo al principio
        // list.before(nuevoItem); //inserta el nodo antes del nodo de referencia
        //list.after(nuevoItem); //inserta el nodo después del nodo de referencia
        // list.insertAdjacentElement("beforeend", nuevoItem); //inserta el nodo el final de la lista
        // list.insertAdjacentHTML("beforeend", `<li>Característica ${numItems}</li>`)

    }
    /**
     * @description Añade un elemento li a la lista en una posición determinada
     */
    const addPosCaracteristica =()=>{
         const list = document.querySelector("#caracteristicas-list"); //seleccionar la lista 
        // const numItems=document.querySelectorAll("#caracteristicas-list >li").length +1
        const numItems = list.children.length  //calcular los hijos que 
        const nuevoItem = document.createElement("li");
        nuevoItem.textContent = `Característica ${numItems+1}`;
        const posicion = prompt(`Introduzca posición del 1 al ${numItems}`);
        const nodoRef= list.children[posicion -1 ]; //elemento de referencia para la insercción
        if (posicion >numItems){
            list.append(nuevoItem);
        }else{
             list.insertBefore(nuevoItem, nodoRef)

        }
       
    }
    /**
     * @description Elimina un elemento li en la posición indicada
     */
    const delPosCaracteristica =()=>{
        
       const list = document.querySelector("#caracteristicas-list"); //seleccionar la lista donde e va a insertar las 
       const numItems = list.children.length  //calcular los hijos que 
       
       const posicion = prompt(`Introduzca posición del 1 al ${numItems}`);
       
       const nodeRef =posicion >numItems? list.children[numItems-1 ]: list.children[posicion-1 ] //
    //    nodeRef.remove()
        list.removeChild(nodeRef)

       
    }
    /**
     * @description Modifica un li en la posición indicada
     */
    const updatePosCaracteristica =()=>{
         const list = document.querySelector("#caracteristicas-list"); //seleccionar la lista donde e va a insertar las 
       const numItems = list.children.length  //calcular los hijos que 
       
        const posicion = prompt(`Introduzca posición del 1 al ${numItems}`);
        
        //crear el nuevo objeto
        const nodeRef =posicion >numItems? list.children[numItems-1 ]: list.children[posicion-1 ]
        const nuevoItem = document.createElement("li");
        nuevoItem.textContent = prompt("Introduzca texto a modificar");
        // list.replaceChild(nuevoItem, nodeRef);
       nodeRef.replaceWith(nuevoItem)

    }
    /**
     * @description Utilizar el traversing(por parentesco)para el acceso de nodos
     */
    const traversing=()=>{
        const list = document.querySelector("#caracteristicas-list"); //seleccionar la lista donde e va a insertar las 
        console.log(`Hijos-> childNodes`, list.childNodes); //acceso a los nodos hijos
        console.log(`Hijos-> children`, list.children); //acceso a los nodos hijos, solo elementos
        console.log(`Primer hijo-> firstChild`, list.firstChild); //acceso al primer nodo hijo
        console.log(`Primer hijo-> firstElementChild`, list.firstElementChild); //acceso al primer nodo hijo de tipo element
        console.log(`Ultimo hijo-> lastChild`, list.lastChild); //acceso al Ultimo nodo hijo
        console.log(`Ultimo hijo-> lastElementChild`, list.lastElementChild); //acceso al último hijo nodo de tipo element
        console.log(`Padre-> parentNode`, list.parentNode); //acceso al padre
        console.log(`Padre -> parentElementNode`, list.parentElement); //acceso al padre
        console.log(`Hermano siguiente-> nextSibling`, list.nextSibling); //acceso al nodo hermano siguiente
        console.log(`Hermano siguiente -> nextElementSibling`, list.nextElementSibling); //acceso al hermano nodo elemento siguiente
         console.log(`Hermano anterior-> previousSibling`, list.previousSibling); //acceso al nodo hermano anterior
        console.log(`Hermano anterior -> previousElementSibling`, list.previousElementSibling); //acceso al hermano nodo elemento anterior
    }
    const recursiveTree=(nodo)=>{
         console.log(`Nodo-> ${nodo.nodeName} Tipo-> ${nodo.nodeType} Valor ->${nodo.nodeValue}`);
         [...nodo.children].forEach(nodoHijo=>{
          recursiveTree(nodoHijo);
        })
    }
    /**
     * @description muestra el árbol DOM en la consola
     */
    const showTree=()=>{
       recursiveTree(document.documentElement)
    }
    return {
        init
    }

})();

ManejoDOM.init()