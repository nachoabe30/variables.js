/*
Escribir el código de una función a la que se pasa como parámetro un número entero 
y devuelve como resultado una cadena de texto que indica si el número es par o impar. 
Mostrar por pantalla el resultado devuelto por la función.
*/



function esParOImpar(numero) {
    if (typeof numero !== 'number' || !Number.isInteger(numero)) {
        return "El valor ingresado no es un número entero.";
    }
    return numero % 2 === 0 ? "El número es par." : "El número es impar.";
}

// Uso de la función
const numero = parseInt(prompt("Ingrese un número entero:"));
const resultado = esParOImpar(numero);
document.writeln("<h2>Resultado de la verificación de paridad</h2>");
document.writeln(`<p>${resultado}</p>`);

// Mostrar el resultado en la consola
console.log(resultado);

