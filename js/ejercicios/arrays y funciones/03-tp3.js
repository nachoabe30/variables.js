/*
Escribir un script que simule el lanzamiento de dos dados. 
Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. 
Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.
*/

const lanzamientos = 50;
const resultados = new Array(11).fill(0); // Array para contar las sumas
for (let i = 0; i < lanzamientos; i++) {
    const dado1 = Math.floor(Math.random() * 6) + 1; // Dado 1
    const dado2 = Math.floor(Math.random() * 6) + 1; // Dado 2
    const suma = dado1 + dado2; // Suma de los dos dados
    resultados[suma - 2]++; // Incrementar el contador para la suma obtenida
    console.log(`Lanzamiento ${i + 1}: Suma ${suma}`);
}
document.writeln("<h2 class='mt-3'>Resultados de los lanzamientos de los dados</h2>");
document.writeln("<ul>");
for (let i = 0; i < resultados.length; i++) {
    const suma = i + 2; // La suma varía de 2 a 12
    document.writeln(`<li>Suma ${suma}: ${resultados[i]} apariciones</li>`);
}
document.writeln("</ul>");

//Total de lanzamientos que se hicieron
document.writeln(`<p>Total de lanzamientos: ${lanzamientos}</p>`);



