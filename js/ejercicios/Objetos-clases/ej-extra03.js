/*
Ejercicio 3: Crea un objeto libro que tenga propiedades título, autor, año y género.
 Luego, escribe una función que reciba un array de libros y un género y devuelva un array con los libros de ese género usando filter
*/
// Array vacío donde se guardarán los libros
const libros = [];

// Preguntar cuántos libros va a ingresar el usuario
const cantidad = parseInt(prompt("¿Cuántos libros desea ingresar?"));

// Cargar datos de cada libro
for (let i = 0; i < cantidad; i++) {
    const nombre = prompt(`Ingrese el nombre del libro ${i + 1}:`);
    const autor = prompt(`Ingrese el autor del libro ${i + 1}:`);
    const anio = parseInt(prompt(`Ingrese el año del libro ${i + 1}:`));
    const genero = prompt(`Ingrese el género del libro ${i + 1}:`);

    libros.push({
        nombre: nombre,
        autor: autor,
        anio: anio,
        genero: genero
    });
}

// Función para filtrar libros por género
function filtrarLibrosPorGenero(listaLibros, generoBuscado) {
    return listaLibros.filter(libro => 
        libro.genero.toLowerCase() === generoBuscado.toLowerCase()
    );
}

// Pedir al usuario el género a buscar
const generoIngresado = prompt("Ingrese el género que desea buscar:");

// Obtener los libros filtrados
const librosFiltrados = filtrarLibrosPorGenero(libros, generoIngresado);

// Mostrar resultados en pantalla
document.writeln(`<h2>Libros del género "${generoIngresado}":</h2>`);

if (librosFiltrados.length > 0) {
    document.writeln("<ul>");
    for (let i = 0; i < librosFiltrados.length; i++) {
        const libro = librosFiltrados[i];
        document.writeln(`<li>${libro.nombre} - ${libro.autor} (${libro.anio})</li>`);
    }
    document.writeln("</ul>");
} else {
    document.writeln("<p>No se encontraron libros de ese género.</p>");
}

