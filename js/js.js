// Seleccionar el elemento con la clase .nombre
var nombre = document.querySelector('.nombre');

// Crear una lista de colores
var colores = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// Crear una función para cambiar el color del texto
function cambiarColor() {
    // Generar un índice aleatorio para seleccionar un color
    var colorIndex = Math.floor(Math.random() * colores.length);
    // Cambiar el color del texto
    nombre.style.color = colores[colorIndex];
}

// Cambiar el color del texto cada segundo
setInterval(cambiarColor, 1000);