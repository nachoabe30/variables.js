/*
Arrays: Son una colección de elementos que se pueden almacenar en una sola variable.
Los elementos de un array pueden ser de cualquier tipo de dato, incluyendo otros arrays.

*como declarar un array*
(mayormente constantes) (nombres plurales)
*/

//array vacio
const peliculas = [] 

//array con elementos (valor y coma, valor y coma)
const canciones = ["Batidora", 2010, true, "Musica ligera", "Mujer amante"] 

//Se pueden cambiar (modificar), agregar y eliminar elementos de un array

//mostrar un array
console.log(peliculas);
console.log(canciones);
document.writeln(canciones);

document.writeln(`<p>Mostrar un solo elemento del array: ${canciones[3]}</p>`)

//mostrar un elemnto del array con un indice
const indice = 0
document.writeln(`<p>Mostrar un solo elemento del array: ${canciones[indice]}</p>`)

//mostrar un array siempre con bucles
document.writeln("<h2>Mostar el array de canciones</h2");

document.writeln("<ul class='list-group'>");
for (let i = 0; i < canciones.length; i++) {
    document.writeln(`<li>${canciones[i]}</li>`);
}
document.writeln("</ul>");


//agregar elementos al array
//metodos de agregar elementos al array

document.writeln("<h2 class='mt-3>' Agregar un elemento al final del array</h2>")
canciones.push('Like a rolling stone')

document.writeln("<h2 class='mt-3>' Agregar un elemento al final del array cantidad de elementos: </h2>"+canciones.length)
canciones.splice(4,0,'Feel good inc')

//borrar elementos del array
// borrar elementos del array
//borrar primer elemento del array
canciones.shift();
canciones.shift();
canciones.shift();
canciones.shift();
document.writeln(`<h2 class='mt-3'>Borrar un elemento del inicio del array - cantidad de elementos ${canciones.length}</h2>`);

document.writeln("<ul class='list-group'>");
for (let i = 0; i < canciones.length; i++) {
    document.writeln(`<li class="list-group-item">${canciones[i]}</li>`);
}

document.writeln("</ul>");