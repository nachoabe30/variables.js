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

          //confirm devuelve un valor booleano diciendo si u n0


let saldo = 10000;
let opcion; // Declare opcion here

do {
    opcion = prompt("Seleccione una opcion:\n1- Consultar el saldo\n2- Ingresar dinero\n3- Extraer dinero"); // Get user input for option

    switch (opcion) {
        case "saldo":
        case "1":
            alert("Su saldo es $ " + saldo);
            break;

        case "2":
            const deposito = Number(prompt("Ingrese la cantidad de dinero que desee depositar:"));
            // Corrected validation: deposito must be positive and within a reasonable limit
            if (deposito > 0 && deposito <= 200000) {
                saldo = saldo + deposito;
                alert(`Depositaste $ ${deposito}, tu saldo es: $${saldo}`);
            } else {
                alert("Ingresaste un monto inválido. El monto debe ser positivo y no exceder $200,000.");
            }
            break;

        case "3":
            const montoExtraer = Number(prompt("Ingresa el monto a extraer:"));
            // Basic validation for withdrawal
            if (montoExtraer > 0 && montoExtraer <= saldo) { // Ensure positive withdrawal and sufficient funds
                saldo = saldo - montoExtraer;
                alert(`El monto extraído es: $${montoExtraer}, tu saldo actual es: $${saldo}`);
            } else if (montoExtraer <= 0) {
                alert("El monto a extraer debe ser positivo.");
            } else {
                alert("No tienes suficiente dinero para realizar esta extracción.");
            }
            break;

        default:
            alert("Ingresaste una opción inválida.");
    }
} while (confirm("¿Quieres realizar otra operación?")); // Correct placement of while condition
