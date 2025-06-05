//Comentario de una linea
/*Comentario de muchas lineas*/

//crear una variable (let- const- var) La dos primeras mas utilizadas
//Existen reglas de declaracion de variables (no acentos ni ñ)
//No es necesario poner el ; 

let numero1;

// = (Esta cajita que esta a mi derecha le guardo el valor del numero)
// Let lo tutilizamos para declarar un valor en la variable, pero este se puede modificar
// El valor const no se cambia en valor; ya que es una constante
let anio = 2025;
const comision = 'C13';

//Mostrar el valor de las variables 
//Metodo: es una accion que puedo hacer con la consola

//NULL (absolutamente nada) 
//Undefined (no definido o especificado)

console.log('Hola Mundo')
console.log(numero1, anio)

//modificar el valor de una variable let
//Nombramos la variable y le asignamos un valor
anio = 2024

//Lo podemos presentar en el html (ajava no lee html pero si se puede mandar como texto en java)
//('<p>Contenido de la varriable año</p>: ' + anio)
document.writeln("<h1>practica JS comision: "+ comision + " <h1>")
document.writeln("<p>Contenido de la varriable año: "+anio+" </p>")

//Es mejor practicfa no usar mayormente let, sino que sean fijas const


