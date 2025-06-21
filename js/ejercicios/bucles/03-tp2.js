/*Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. 
Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp*/

let text = ""
do{
    const palabra = prompt("Ingrese lo que desea concatenar");
    console.log(text.lenght);
    if(text.lenght === 0){
        text = palabra
    }
    else{
        text += "-" + palabra;
    }
    console.log(text.length)
    console.log(text)

}while(confirm("Presione aceptar para agregar otro texto"))

    document.writeln(text)