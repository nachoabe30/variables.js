/*Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.¨*/
const numero1 = parseInt(prompt("Introduce el primer numero: "));
const numero2 = parseInt(prompt("Introduce el segundo numero: "));
const numero3 = parseInt(prompt("Introduce el tercer numero: "));

if (numero1 > numero2 && numero1 > numero3) {
    document.writeln(`El numero ${numero1} es el mayor`);
} else if (numero2 > numero1 && numero2 > numero3) { 
    document.writeln(`El numero ${numero2} es el mayor`); 
} else {
    document.writeln(`El numero ${numero3} es el mayor`);
}