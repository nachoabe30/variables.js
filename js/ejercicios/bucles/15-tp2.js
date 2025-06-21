/*
Realiza un script que cuente el número de vocales que tiene un texto.
*/

const textoIngresado = prompt("Ingrese un texto: ")
if(textoIngresado){
    let contadorVocales = 0;
    const vocales = "aeiouAEIOU"
    for(let i=0; i<textoIngresado.length; i++){
        if(vocales.includes(textoIngresado[i])){
            contadorVocales++;
        }
    }
    document.writeln(`El numero de vocales en el texto es: ${contadorVocales}`);
}else{
    document.writeln("No se ingreso ningun texto");
}