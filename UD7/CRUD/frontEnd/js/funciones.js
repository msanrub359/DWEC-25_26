
// Estado global de la aplicación
let modalInstance = null;
let tableInstance = null; // ← Añadir

// Guarda la instancia del modal para poder reutilizarla desde otros lugares
export const setModal = (modal) => {
    modalInstance = modal;
};

// Muestra el modal si la instancia existe
export const showModal = () => {
    if (modalInstance) modalInstance.show();
};

// Oculta el modal si la instancia existe
export const hideModal = () => {
    if (modalInstance) modalInstance.hide();
};

// ========== FUNCIONES PARA LA TABLA ==========

// Guarda la instancia de la tabla
export const setTable = (table) => {
    tableInstance = table;
};


// Refresca los datos de la tabla desde el servidor
export const refreshTable = () => {
    if (tableInstance) tableInstance.setData();
};
/**
     * @funtion mostrarMensajes
     * @description Muestra mensajes de estado en la interfaz
     * @param {string} mensajeTexto contiene el mensaje a visualizar
     * @param {string} clase clase de Bootstrap para el mensaje
     * @returns 
     */
export const mostrarMensajes = (mensajeTexto, clase) => {
    const mensaje = document.querySelector("#mensajeEstado")
    return new Promise((resolve, reject) => {
        mensaje.textContent = mensajeTexto;
        mensaje.classList.add(clase);
        mensaje.classList.remove("d-none");
        setTimeout(() => {
            mensaje.classList.add("d-none");
            mensaje.classList.remove(clase);
            resolve(true);
        }, 2000);
    })
}

export const mensajeSweetAlert = (mensajeTexto, icono) => {
    Swal.fire({
        position: "top-end",
        icon: icono,
        title: mensajeTexto,
        showConfirmButton: false,
        timer: 1500
    });
}
