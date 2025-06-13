/*Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.*/
const numero1=parseInt(prompt("Introduce el primer numero: "));
const numero2=parseInt(prompt("Introduce el segundo numero: "));

if(numero1>numero2){
    document.writeln(`El numero ${numero1} es mayor que el numero ${numero2}`);
}else{
    document.writeln(`El numero ${numero2} es mayor que el numero ${numero1}`);
}