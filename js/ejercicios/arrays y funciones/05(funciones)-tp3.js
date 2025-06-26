/*
Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. 
A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, 
sólo por minúsculas o por una mezcla de ambas.
*/




function analizarCadena(cadena) {
    if (typeof cadena !== 'string') {
        return "El valor ingresado no es una cadena de texto.";
    }
    const esMayuscula = cadena === cadena.toUpperCase();
    const esMinuscula = cadena === cadena.toLowerCase();
    
    if (esMayuscula) {
        return "La cadena está formada sólo por mayúsculas.";
    } else if (esMinuscula) {
        return "La cadena está formada sólo por minúsculas.";
    } else {
        return "La cadena está formada por una mezcla de mayúsculas y minúsculas.";
    }
}

// uso de funcion
const resultado = analizarCadena("Hola Mundo");
document.writeln("<h2>Información sobre la cadena de texto</h2>");
document.writeln(`<p>${resultado}</p>`);
// Mostrar el resultado en la consola
console.log(resultado);




