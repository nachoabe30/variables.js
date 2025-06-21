/*
Realiza un script que pida una cadena de texto y lo muestre poniendo 
el signo – entre cada carácter sin usar el método replace. 
Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.
*/

const textoIngresado = prompt("Ingresa una cadena de texto: ");
if(textoIngresado){
    let resultado = "";
    for(let i=0; i<textoIngresado.length; i++){
        resultado += textoIngresado[i];
        if(i < textoIngresado.length -1){
            resultado += "-";
        }
    }
    document.writeln(`El texto con guiones es: ${resultado}`);
    }else{
    document.writeln("No se ingresó ningún texto.");
    }