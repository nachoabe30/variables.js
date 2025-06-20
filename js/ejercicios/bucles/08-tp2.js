/*
Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

1
12
123
1234
12345
123456
……

*/

let numero = parseInt(prompt("Ingrese un numero entre 1 y 50"))

if(numero > 50  && numero < 1){
    console.log("El numero ingresado no es valido")
}else{
    for (let i=0; i<numero; i++){
        let cadena = ""
        for (let j=0; j<numero; j++){
            cadena += j+1
        }
    }
    document.writeln(cadena)
}