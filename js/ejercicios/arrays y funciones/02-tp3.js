/*
Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, 
cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.

Input:
[‘Nueva York, Estados Unidos’, ‘Barcelona, España’, ‘Tokio, Japón’, ‘Londres, Reino Unido’, ‘Roma, Italia’, ‘Pekín, China’, 
‘Río de Janeiro, Brasil’, ‘Ámsterdam, Países Bajos’, ‘Sídney, Australia’, ‘El Cairo, Egipto’]
*/

const ciudades = ["Nueva York, Estados Unidos", "Barcelona, España", "Tokio, Japón", "Londres, Reino Unido", "Roma, Italia", "Pekín, China",
"Río de Janeiro, Brasil", "Ámsterdam, Países Bajos", "Sidney, Australia", "El Cairo, Egipto"];
let ciudad;

do{
    ciudad = prompt("Ingrese el nombre de una ciudad (pulsar cancelar para terminar: ");
    if(ciudad != null && ciudad.trim() !== "") {
        ciudades.push(ciudad.trim());
    }

}while(ciudad != null && ciudad.trim() !== "");

document.writeln("<h2 class='mt-3'>Ciudades ingresadas</h2>");
document.writeln("<ul>");
for (let i = 0; i < ciudades.length; i++) {
    document.writeln(`<li>'>${ciudades[i]}</li>`);
}
document.writeln("</ul>");

document.writeln(`<p>Longitud del arreglo: ${ciudades.length}</p>`);
document.writeln(`<p>Primer elemento: ${ciudades[0]}</p>`);
document.writeln(`<p>Tercer elemento: ${ciudades[2]}</p>`);
document.writeln(`<p>Último elemento: ${ciudades[ciudades.length - 1]}</p>`);
ciudades.push("París");

document.writeln(`<p>Último elemento después de agregar París: ${ciudades[ciudades.length - 1]}</p>`);

document.writeln(`<p>Elemento en la segunda posición: ${ciudades[1]}</p>`);
ciudades[1] = "Barcelona";
document.writeln(`<p>Elemento en la segunda posición después de reemplazar: ${ciudades[1]}</p>`);
document.writeln("<h2 class='mt-3'>Ciudades después de modificaciones</h2>");
document.writeln("<ul>");
for (let i = 0; i < ciudades.length; i++) {
    document.writeln(`<li>${ciudades[i]}</li>`);
}
document.writeln("</ul>");


