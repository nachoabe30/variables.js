/*Dificultad:  

10- Realiza un script que pida número de filas y columnas y 
escriba una tabla. 
Dentro de cada una de las celdas deberá escribirse 
un número consecutivo en orden descendente. 
Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.*/

//pedir al usuario las filas y columnas
const filas = parseInt(prompt("Ingresa un numero de filas: "));
const columnas = parseInt(prompt("Ingresa un numero de columnas:"));

//Las variables mayormente se hacen arriba si son generales
let totalCelda = filas * columnas;


//muestra el resultado por consola
console.log(filas, columnas)


//dibujar a tabla ya que javascript no entiende html 
//Tambien se puede utilizar boostrap (algunas clases)
document.writeln(`<table class='table table-striped'>
    <tbody>`);

    for(let indiceFilas = 0; indiceFilas <filas; indiceFilas ++){ 
        document.writeln(`<tr>`);
        for(let indiceColumnas = 0; indiceColumnas < columnas; indiceColumnas++){
            document.writeln(`<td class= 'p-2'>${totalCelda--}</td>`);
        }
        document.writeln(`</tr>`);
    }
document.writeln(`</tbody></table>`);


//dibujar el valor de la tabla
