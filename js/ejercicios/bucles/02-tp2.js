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
const numero = parseInt(prompt("Ingrese la cantidad de notas a calificar: "));

for(let i=0; i<numero; i++){
    let notaCalificar = parseInt(prompt(`Ingrese la nota a ser calificada:`));
        if(notaCalificar >=0 && notaCalificar<=2){
            alert("Nota muy eficiente");
        }else if(notaCalificar>=3 && notaCalificar<=4){
            alert("Nota insuficiente");
        }else if(notaCalificar>=5 && notaCalificar<=6){
            alert("Nota suficiente");
        }else if(notaCalificar == 7){
            alert("Nota buena");
        }else if(notaCalificar>=8 && notaCalificar<=9){
            alert("Nota notable");
        }else if(notaCalificar == 10){
            alert("Nota sobresaliente");
        }else if(notaCalificar >= 11){
            alert("Número erróneo");
        }
}       

