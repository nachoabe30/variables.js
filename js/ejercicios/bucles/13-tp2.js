/*Realiza un script que pida un texto y lo muestre en mayúsculas.
*/

//Pedir al usuario un texto y mostrarlo en mayuculas .toUpperCase()
const textoIngresado = prompt("Ingresa un texto: ");
if(textoIngresado){
    const textoMayusculas = textoIngresado.toUpperCase();
    document.writeln(`El texto en mayusculas es: ${textoMayusculas}`);
}