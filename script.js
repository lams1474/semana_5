// Referencias al DOM
const inputUrl = document.getElementById('urlImagen');
const btnAgregar = document.getElementById('btnAgregar');
const btnEliminar = document.getElementById('btnEliminar');
const galeria = document.getElementById('galeria');
const mensaje = document.getElementById('mensaje');

// Aquí guardaremos la imagen seleccionada actualmente
let imagenSeleccionada = null;

// Función para limpiar mensaje
function limpiarMensaje() {
  mensaje.textContent = '';
}

// Agregar imagen
function agregarImagen() {
  const url = inputUrl.value.trim();

  limpiarMensaje();

  if (url === '') {
    mensaje.textContent = 'Ingresa una URL de imagen.';
    return;
  }

  // Crear la etiqueta <img>
  const img = document.createElement('img');
  img.src = url;
  img.alt = 'Imagen de la galería';

  // Evento click para seleccionar/deseleccionar
  img.addEventListener('click', () => {
    // Si ya había una seleccionada, quitar clase
    if (imagenSeleccionada) {
      imagenSeleccionada.classList.remove('seleccionada');
    }
    // Marcar esta como seleccionada
    img.classList.add('seleccionada');
    imagenSeleccionada = img;
  });

  // Insertar en la galería
  galeria.appendChild(img);

  // Limpiar input
  inputUrl.value = '';
}

// Eliminar imagen seleccionada
function eliminarImagenSeleccionada() {
  limpiarMensaje();

  if (!imagenSeleccionada) {
    mensaje.textContent = 'No hay ninguna imagen seleccionada.';
    return;
  }

  // Eliminar del DOM
  imagenSeleccionada.remove();
  imagenSeleccionada = null;
}

// Eventos de botones
btnAgregar.addEventListener('click', agregarImagen);
btnEliminar.addEventListener('click', eliminarImagenSeleccionada);

// Evento de teclado: Enter en el input agrega imagen
inputUrl.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    agregarImagen();
  }
});

// Evento input para limpiar mensajes al escribir
inputUrl.addEventListener('input', limpiarMensaje);
