/*
Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 

Utiliza este objeto para mostrar la descripción,
ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.

*/

class cuenta{
    #titular;
    #saldo;

    constructor(titular, saldo){
        this.#titular = "Alex";
        this.#saldo = 0;
    }

    //getters
    get getTitular(){
        return this.#titular;
    }

    get getSaldo(){
        return this.#saldo;
    }

    //Setters
    set setTitular(titular){
        this.#titular = titular;
    }

    set setSaldo(saldo){
        this.#saldo = saldo;
    }


    //metodos
    ingresar(cantidad){
        if (cantidad > 0) {
            if (cantidad <= this.#saldo) {
                this.#saldo += cantidad;
                console.log(`Extrajiste $${cantidad}. Saldo restante: $${this.#saldo}`);
            } else {
                console.log("Fondos insuficientes.");
            }
        } else {
            console.log("La cantidad a extraer debe ser mayor a 0.");
        }
    }

    extraer(cantidad){
        if(cantidad <= this.#saldo){
            this.#saldo -= cantidad;
        }else{
            
        }

    }

    informar(){
        console.log(`Titular: ${this.#titular} - Saldo: ${this.#saldo}`)
    }
}