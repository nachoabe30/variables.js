/*
Realiza un script que genere un número aleatorio entre 1 y 99
*/

//funcion de numero aleatorio y representacion en pantalla
const numeroAleatorio = Math.floor(Math.random() * 99) + 1;
document.writeln(`El numero aleatorio es: ${numeroAleatorio}`);
