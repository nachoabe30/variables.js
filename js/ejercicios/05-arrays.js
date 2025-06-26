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

//mostrar un array por consola (No lo ve el usuario final)
console.log(peliculas);
console.log(canciones);

//Para que le mostremos al usuario final, en un solo string todo el array
document.writeln(canciones);

//Mostrar un solo elemento del array ${canciones[numero]}
document.writeln(`<p>Mostrar un solo elemento del array: ${canciones[3]}</p>`)
//Variable que contenga un numero entero y sea mostrado ese elemento del array
const indice = 0;
document.writeln(`<p>Mostrar un solo elemento del array: ${canciones[indice]}</p>`)

//
document.writeln("<h2 class= 'mt-3'>Mostrar un array de canciones</h2>");

//mostrar cada elemento del array (Siempre un bucle)
document.writeln("<ul class='list-group'>");
for (let i = 0; i < canciones.length; i++) {
    document.writeln(`<li class='list-group-item'>${canciones[i]}</li>`);
}
document.writeln("</ul>");

//agregar elementos al array
//Metodos de arrays

//Agregar un metodo al principio del array unshift (1 o mas elementos)
canciones.unshift(false, "Like a stone");
document.writeln("<h2 class= 'mt-3'>Agregar un elemento al inicio del array</h2>")
document.writeln("<ul class='list-group'>");
for (let i = 0; i < canciones.length; i++) {
    document.writeln(`<li class='list-group-item'>${canciones[i]}</li>`);
}
document.writeln("</ul>");

//Agregar al final un elemento en el array push (1 o mas elementos)
canciones.push("Like a Rolling Stone");
document.writeln("<h2 class= 'mt-3'>Agregar un elemento al final del array</h2>")
document.writeln("<ul class='list-group'>");
for (let i = 0; i < canciones.length; i++) {
    document.writeln(`<li class='list-group-item'>${canciones[i]}</li>`);
}
document.writeln("</ul>");

//Agregar en el medio del array splice (posicion, numero de elementos a eliminar, elemento a agregar)
canciones.splice(4,0,"Feel Good Inc");
document.writeln(`<h2 class= 'mt-3'>Agregar un elemento al final del array ${canciones.length}</h2>`)
document.writeln("<ul class='list-group'>");
for (let i = 0; i < canciones.length; i++) {
    document.writeln(`<li class='list-group-item'>${canciones[i]}</li>`);
}
document.writeln("</ul>");

//borrar elementos del array 
//borarr elementos del principio shift (1 elemento)
canciones.shift(); //sin poner nada, se eleimina el primer elemento
document.writeln(`<h2 class= 'mt-3'>Borrar un elemento del inicio del array ${canciones.length}</h2>`)
document.writeln("<ul class='list-group'>");
for (let i = 0; i < canciones.length; i++) {
    document.writeln(`<li class='list-group-item'>${canciones[i]}</li>`);
}
document.writeln("</ul>");

//borrar del final pop (1 elemento)
canciones.pop();
document.writeln(`<h2 class= 'mt-3'>Borrar un elemento del final del array ${canciones.length}</h2>`)
document.writeln("<ul class='list-group'>");
for (let i = 0; i < canciones.length; i++) {
    document.writeln(`<li class='list-group-item'>${canciones[i]}</li>`);
}
document.writeln("</ul>");

//Tambien se puede borrar con el splice
canciones.splice(2,3); //borrar desde la posicion 2, 3 elementos
//canciones.splice(2); //borrar todo desde la posicion 2
document.writeln(`<h2 class= 'mt-3'>Agregar un elemento seleccionado del array ${canciones.length}</h2>`)
document.writeln("<ul class='list-group'>");
for (let i = 0; i < canciones.length; i++) {
    document.writeln(`<li class='list-group-item'>${canciones[i]}</li>`);
}
document.writeln("</ul>");




