/*
Realiza un script que pida números hasta que se pulse “cancelar”. 
Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. 
Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.
*/

let sumaTotal=0;
do{
    let numero=parseInt(prompt("Introduce un numero:"));
    if(isNaN(numero)){
        alert("Este no es un numero");
    }
    else{
        sumaTotal = sumaTotal + numero;
    }

}while(confirm("Desea continuar ingresando los nuermos?"));
alert(`La suma total de los numeros es ${sumaTotal}`);