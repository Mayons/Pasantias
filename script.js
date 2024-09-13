// script.js

window.onload = function() {
    alert("¡Bienvenido a Mi Proyecto Web!");
};
// Cargar los comentarios almacenados al cargar la página
window.addEventListener('load', function() {
    const comentariosGuardados = JSON.parse(localStorage.getItem('comentarios')) || [];
    comentariosGuardados.forEach(comentario => {
        agregarComentarioALista(comentario.estudiante, comentario.comentario, comentario.fecha, comentario.hora);
    });
});

// Manejar el envío del formulario de bitácora
document.getElementById('bitacora-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Obtener los valores del formulario
    const estudiante = document.getElementById('estudiante').value;
    const comentario = document.getElementById('comentario').value;

    // Obtener la fecha y hora actual
    const fechaActual = new Date();
    const fecha = fechaActual.toLocaleDateString();  // Formato de fecha
    const hora = fechaActual.toLocaleTimeString();   // Formato de hora

    // Crear el objeto de comentario
    const nuevoComentario = { estudiante, comentario, fecha, hora };

    // Guardar en Local Storage
    let comentariosGuardados = JSON.parse(localStorage.getItem('comentarios')) || [];
    comentariosGuardados.push(nuevoComentario);
    localStorage.setItem('comentarios', JSON.stringify(comentariosGuardados));

    // Agregar el comentario a la lista
    agregarComentarioALista(estudiante, comentario, fecha, hora);

    // Limpiar el formulario
    document.getElementById('bitacora-form').reset();
});

// Función para agregar un comentario a la lista en el DOM
//function agregarComentarioALista(estudiante, comentario, fecha, hora) {
//    const comentarioElemento = document.createElement('li');
//   comentarioElemento.textContent = `${estudiante}: ${comentario} (Registrado el ${fecha} a las ${hora})`;
//    document.getElementById('comentarios-list').appendChild(comentarioElemento);
//}
window.addEventListener('load', function() {
    const comentariosGuardados = JSON.parse(localStorage.getItem('comentarios')) || [];
    comentariosGuardados.forEach(comentario => {
        agregarComentarioALista(comentario.estudiante, comentario.comentario, comentario.fecha, comentario.hora);
    });
});

// Manejar el envío del formulario de bitácora
document.getElementById('bitacora-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Obtener los valores del formulario
    const estudiante = document.getElementById('estudiante').value;
    const comentario = document.getElementById('comentario').value;

    // Obtener la fecha y hora actual
    const fechaActual = new Date();
    const fecha = fechaActual.toLocaleDateString();  // Formato de fecha
    const hora = fechaActual.toLocaleTimeString();   // Formato de hora

    // Crear el objeto de comentario
    const nuevoComentario = { estudiante, comentario, fecha, hora };

    // Guardar en Local Storage
    let comentariosGuardados = JSON.parse(localStorage.getItem('comentarios')) || [];
    comentariosGuardados.push(nuevoComentario);
    localStorage.setItem('comentarios', JSON.stringify(comentariosGuardados));

    // Agregar el comentario a la lista
    agregarComentarioALista(estudiante, comentario, fecha, hora);

    // Limpiar el formulario
    document.getElementById('bitacora-form').reset();
});

// Función para agregar un comentario a la lista en el DOM
function agregarComentarioALista(estudiante, comentario, fecha, hora) {
    const comentarioElemento = document.createElement('li');
    comentarioElemento.textContent = `${estudiante}: ${comentario} (Registrado el ${fecha} a las ${hora})`;
    document.getElementById('comentarios-list').appendChild(comentarioElemento);
}