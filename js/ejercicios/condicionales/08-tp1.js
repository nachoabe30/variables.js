/*Escribe un programa que pida un número y diga si es divisible por 2¨*/

const numeroDivisible = parseInt(prompt("Ingrese un numero: "));
let resultadoNodivisible =0;

if(numeroDivisible %2 == 0){
    document.writeln("El numero ingresado es divisible por 2");
}else{
    document.writeln("El numero ingresado no es divisible por 2");
}