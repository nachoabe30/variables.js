/*
Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, 
la creación de la tabla debe ser realizada con una función y 
mostrar solo los resultados del 1 al 10 del número elegido por el usuario.
*/



function mostrarTablaMultiplicar(numero) {
    // Mostrar un mensaje si el número no es válido
if (isNaN(numero)) {
    document.writeln("<p>El valor ingresado no es un número válido.</p>");
    console.log("El valor ingresado no es un número válido.");
}

    if (typeof numero !== 'number' || isNaN(numero)) {
        return "El valor ingresado no es un número válido.";
    }
    let resultado = `<h2>Tabla de multiplicar del ${numero}</h2><ul>`;
    for (let i = 1; i <= 10; i++) {
        resultado += `<li>${numero} x ${i} = ${numero * i}</li>`;
    }
    resultado += "</ul>";
    return resultado;
}

// Solicitar al usuario un número para mostrar su tabla de multiplicar
const numero = parseInt(prompt("Ingrese un número para mostrar su tabla de multiplicar:"));
const tablaMultiplicar = mostrarTablaMultiplicar(numero);
document.writeln(tablaMultiplicar);
// Mostrar el resultado en la consola
console.log(tablaMultiplicar);
