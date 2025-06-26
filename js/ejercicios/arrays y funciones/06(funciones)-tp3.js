/*
Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo,
luego crear una función para calcular su perímetro y mostrarlo por pantalla.

La fórmula del perímetro  es p = 2*(a +b)

Ejemplo:




Input:
lado A = 24
lado B = 5

Output: 58

*/

function solicitarLadosRectangulo() {
    const ladoA = parseFloat(prompt("Ingrese el valor del lado A del rectángulo:"));
    const ladoB = parseFloat(prompt("Ingrese el valor del lado B del rectángulo:"));

    if (isNaN(ladoA) || isNaN(ladoB)) {
        alert("Por favor, ingrese valores numéricos válidos.");
        return;
    }
    const perimetro = calcularPerimetro(ladoA, ladoB);
    alert(`El perímetro del rectángulo es: ${perimetro}`);
}

function calcularPerimetro(ladoA, ladoB) {
    if (typeof ladoA !== 'number' || typeof ladoB !== 'number' || ladoA <= 0 || ladoB <= 0) {
        return "Los valores ingresados deben ser números positivos.";
    }
    return 2 * (ladoA + ladoB);
}

// Llamar a la función para solicitar los lados del rectángulo
solicitarLadosRectangulo();
document.writeln("<h2>Perímetro del Rectángulo</h2>");

