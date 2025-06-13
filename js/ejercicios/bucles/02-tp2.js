/*Escribir un programa que solicite una nota (número) de 0  a 10. 
Luego mostrar la calificación en un alert según los siguientes rangos de nota:

0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: Notable
10: Sobresaliente

Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.
 */ 

let continuarCalificando = true; 

do {
    let notaCalificar; 
    while (true) {
        notaCalificar = parseInt(prompt("Ingrese la nota a calificar (entre 0 y 10):"));
        if (notaCalificar >= 0 && notaCalificar <= 10) {
            break;
        } else {
            alert("Número incorrecto. Por favor, ingrese un número válido entre 0 y 10.");
        }
    }

    if (notaCalificar >= 0 && notaCalificar <= 2) {
        alert(`La nota ${notaCalificar} es muy deficiente`);
    } else if (notaCalificar >= 3 && notaCalificar <= 4) {
        alert(`La nota ${notaCalificar}, es Insuficiente`);
    } else if (notaCalificar >= 5 && notaCalificar <= 6) {
        alert(`La nota ${notaCalificar}, es Suficiente `);
    } else if (notaCalificar == 7) {
        alert(`La nota ${notaCalificar}, Bien`);
    } else if (notaCalificar >= 8 && notaCalificar <= 9) {
        alert(`La nota ${notaCalificar}, es Notable`);
    } else if (notaCalificar == 10) {
        alert(`La nota ${notaCalificar}, Es sobresaliente`);
    }


    continuarCalificando = confirm("¿Desea calificar otra nota?");

} while (continuarCalificando); 

alert("¡Gracias por usar el calificador de notas!");