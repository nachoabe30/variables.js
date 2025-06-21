/*
Realiza un script que pida una cadena de texto y la devuelva al revés.
Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.
*/

const textoIngresado = prompt("Ingresa una cadena de texto: ");
if(textoIngresado){
    let resultado = "";
    for(let i=0; i<textoIngresado.length; i++){
        resultado = textoIngresado [i]+ resultado;
    }
    document.writeln(`El texto al reves es: ${resultado}`);
}else{
    document.writeln("No se ingresó ningún texto.");
}