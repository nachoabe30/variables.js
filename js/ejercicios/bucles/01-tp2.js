/*Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, 
si la edad ingresada no es un número válido indicarlo en un mensaje.*/


const cantidadEdades = parseInt(prompt("Ingrese la cantidad de edades a consultar: "));

if(cantidadEdades <= 0){
    alert("La cantiad de edades ingresada no es valida");
}else{
    for(let i=0; i<cantidadEdades; i++){
        const edad = parseInt(prompt("Ingrese la edad: ")); 
        if(edad < 0 || edad > 120){
            alert("La edad ingresada no es valida");
        }else if(edad > 18){
            alert("Ya puede conducir");
        }else{
            alert("No puede conducir");
        }
    }
}
