/*
 Crea un objeto llamado auto que tenga algunas características 
 como el color, marca, modelo y si está encendido o apagado. 
 Crea los métodos necesarios para permitir encender y apagar el auto.

Output:



objeto.encender();
objeto.apadar()
auto encendido
El auto se apagó
*/

class Auto {
    #color;
    #marca;
    #modelo;
    #encendido;

    constructor(color, marca, modelo) {
        this.#color = color;
        this.#marca = marca;
        this.#modelo = modelo;
        this.#encendido = false; 
    }

    // Getters
    get getColor() {
        return this.#color;
    }

    get getMarca() {
        return this.#marca;
    }

    get getModelo() {
        return this.#modelo;
    }

    get getEncendido() {
        return this.#encendido;
    }

    // Setters
    set setColor(nuevoColor) {
        this.#color = nuevoColor;
    }

    set setMarca(nuevaMarca) {
        this.#marca = nuevaMarca;
    }

    set setModelo(nuevoModelo) {
        this.#modelo = nuevoModelo;
    }

    set setEncendido(estado) {
        this.#encendido = estado;
    }

    // Métodos
    encender() {
        if (!this.#encendido) {
            this.#encendido = true;
            console.log("El auto está encendido");
        } else {
            console.log("El auto ya estaba encendido");
        }
    }

    apagar() {
        if (this.#encendido) {
            this.#encendido = false;
            console.log("El auto se apagó");
        } else {
            console.log("El auto ya estaba apagado");
        }
    }

    mostrarDatos() {
        document.writeln(`<ul>
            <h2>Datos del auto</h2>
            <li>Color: ${this.#color}</li>
            <li>Marca: ${this.#marca}</li>
            <li>Modelo: ${this.#modelo}</li>
            <li>Estado: ${this.#encendido ? "Encendido" : "Apagado"}</li>
        </ul>`);
    }
}
