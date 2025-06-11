/*

Cree un programa al estilo de un cajero automatico con las siguientes opciones:

1- consultar el saldo

2- ingresar dinero

3- extraer dinero*/

//switch case
/* switch (opcion){
    case "1":
        Todas las lineas de codigo que quiero hacer si la opcion del usuario es 1
        break;
    case "2":
    .
    .
    .
    .
    case n:
    
    default:
        alert("opcion no valida");
} */

        const opcion = prompt(
  "Seleccione una opcion: 1- consultar el saldo, 2-Ingresar dinero, 3-Extraer dinero"
);

let saldo = 10000;

switch(opcion){

    //se puede poner otra opcion con el caso 1 ej: 
    case "saldo":
    case "1":
        alert("Su saldo es $ "+saldo);
        break;
    case "2":
        const deposito = Number(prompt("Ingrese la cantidad de dinero que desee"))
        if(deposito<0 && deposito>200000){
            console.log(deposito);
        saldo = saldo + deposito;
        //Alt gr + comillas baticks ``, se puede hacer de esta forma el llamado de las variables
        document.writeln(`Depositaste $ ${deposito}, tu saldo es: $${saldo}`) 
        }
        else{
            alert("Ingresasaste un monto invalido")
        }
    break;

    case "3":
        const montoExtraer = Number(prompt("Ingresa el monto a extrer"));
        if(montoExtraer<=saldo){
            saldo = saldo - montoExtraer;
            document.writeln(`El monto a extraer es: $${montoExtraer}, tu saldo actual es: $${saldo}`)
        }
        else{
            alert("No tienes esa cantidad de dinero");
        }

        break;
    default:
        alert("Ingresaste una opcion invalida");



}