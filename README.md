# Semana 5 - Galería Interactiva con JavaScript

Proyecto desarrollado para la asignatura **Desarrollo de Aplicaciones Web**, Semana 5.  
El objetivo es practicar los **fundamentos de JavaScript**, la **manipulación del DOM** y el manejo de **eventos**, creando una galería de imágenes dinámica.[file:1]

## Descripción del proyecto

La aplicación permite:
- Agregar imágenes a una galería a partir de una URL ingresada por el usuario.
- Seleccionar una imagen de la galería haciendo clic sobre ella.
- Eliminar la imagen seleccionada mediante un botón.

Todo se realiza sin recargar la página, manipulando directamente el DOM con JavaScript.[file:1]

## Tecnologías utilizadas

- HTML5 para la estructura de la página.
- CSS3 para el diseño, uso de **grid** en la galería y estilos responsivos.
- JavaScript para:
  - Crear y agregar elementos `<img>` al DOM.
  - Manejar eventos de clic y teclado.
  - Modificar y eliminar elementos del DOM en tiempo real.[file:1]

## Funcionalidades de JavaScript aplicadas

En `script.js` se utilizan:

- Acceso al DOM con `document.getElementById`.
- Creación de elementos con `document.createElement`.
- Inserción en la página con `appendChild`.
- Manejo de clases con `classList.add` y `classList.remove`.
- Eliminación de elementos con `remove`.
- Manejo de eventos:
  - `addEventListener('click', ...)` para botones e imágenes.
  - `addEventListener('keydown', ...)` para capturar Enter en el input.[file:1]

Estas funcionalidades corresponden a los *Fundamentos de JavaScript: manipulación del DOM y eventos*.[file:1]

## Cómo ejecutar el proyecto

1. Abrir el archivo `index.html` en un navegador web.
2. Escribir una URL de imagen válida en el campo de texto.
3. Hacer clic en **"Agregar imagen"** o presionar Enter.
4. Hacer clic sobre una imagen para seleccionarla.
5. Usar el botón **"Eliminar imagen seleccionada"** para eliminarla de la galería.
