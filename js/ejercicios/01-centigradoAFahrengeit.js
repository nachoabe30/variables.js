//crear un programa que calcule cuantos grados fahrenheit son X grados centigrados. Formula = (x °C × 9/5) + 32
//con prompy levanta una ventana emergente oara que el usuario pueda ingresar datos
document.writeln("<h1> Ejercicio 1</h1>");
const gradoCentigrado = parseInt(prompt ('ingresa los grados centigrados:'));
const gradoFahrenheit = (gradoCentigrado * 9/5) + 32;
//parseInt o parseFloat: transforma un string a un numero entero o un numero decimal


document.writeln('Los grados centigrados: ' + gradoCentigrado+ ' °C, equivalen a: ' +gradoFahrenheit+ '°F');

//Ventana emergente para mostrar un mensaje (ventana emergente mas, dando la respuesta)
alert('Los grados centigrados: ' + gradoCentigrado+ ' °C, equivalen a: ' +gradoFahrenheit+ '°F');