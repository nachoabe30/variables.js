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


//mostrar un array
console.log(peliculas);
console.log(canciones);
document.writeln(canciones);

document.writeln("<ul>")
for(let i=0; i<canciones.lenght; i++){
    document.writeln(`<li>${cacniones[i]}</li>`)
}
document.writeln("</ul>")