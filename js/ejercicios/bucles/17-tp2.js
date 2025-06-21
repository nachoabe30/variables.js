/*
Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.

Ejemplo:



Input: Hola mundo

Output: la vocal ‘o’ está en la posición 1



*/

const textoIngresado = prompt("Ingresa un texto: ");
if(textoIngresado){
    const vocales = "aeiouAEIOU";
    let posicion = -1; // Inicializamos en -1 para indicar que no se encontró ninguna vocal
    for(let i = 0; i < textoIngresado.length; i++){
        if(vocales.includes(textoIngresado[i])){
            posicion = i; // Guardamos la posición de la primera vocal encontrada
            break; // Salimos del bucle una vez encontrada la primera vocal
        }
    }
    
    if(posicion !== -1){
        document.writeln(`La primera vocal está en la posición: ${posicion}`);
    } else {
        document.writeln("No se encontraron vocales en el texto.");
    }
}