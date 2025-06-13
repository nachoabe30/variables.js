/*Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible 
(hay que decir todos por los que es divisible)*/

const numeroDivisible = parseInt(prompt("Ingrese el numero a dividir: "));

if(numeroDivisible % 2 === 0){
    document.writeln(`El numero ${numeroDivisible} es divisible en 2<br>`);
}
if(numeroDivisible % 3 === 0){
    document.writeln(`El numero ${numeroDivisible} es divisible en 3<br>`);
}

if(numeroDivisible % 4 === 0){
    document.writeln(`El numero ${numeroDivisible} es divisible en 4<br>`);
}

if(numeroDivisible % 5 === 0){
    document.writeln(`El numero ${numeroDivisible} es divisible en 5`);
}


