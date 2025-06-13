/*Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
*/
const numeroDivisible = parseInt(prompt("Ingrese el numero a ser dividido: "));

if (numeroDivisible % 2 === 0) {
    alert("El numero es divisible por 2");
} else if (numeroDivisible % 3 === 0) { 
    alert("El numero es divisible por 3");
} else if (numeroDivisible % 5 === 0) { 
    alert("El numero es divisible por 5");
} else { 
    alert("El numero no es divisible por 2, 3 ni 5.");
}