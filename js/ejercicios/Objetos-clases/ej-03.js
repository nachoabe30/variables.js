/*
Escribe una clase que permita crear distintos objetos “rectángulos”, 
con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, 
calcular el perímetro y el área
*/

class Rectangulo {
    #alto;
    #ancho;

    constructor(alto, ancho) {
        this.#alto = alto;
        this.#ancho = ancho;
    }

    // Getters
    get getAlto() {
        return this.#alto;
    }

    get getAncho() {
        return this.#ancho;
    }

    // Setters
    set setAlto(nuevoAlto) {
        if (nuevoAlto > 0) {
            this.#alto = nuevoAlto;
        } else {
            console.log("El alto debe ser mayor a 0.");
        }
    }

    set setAncho(nuevoAncho) {
        if (nuevoAncho > 0) {
            this.#ancho = nuevoAncho;
        } else {
            console.log("El ancho debe ser mayor a 0.");
        }
    }

    // Método para calcular área
    calcularArea() {
        return this.#alto * this.#ancho;
    }

    // Método para calcular perímetro
    calcularPerimetro() {
        return 2 * (this.#alto + this.#ancho);
    }

    // Mostrar datos
    mostrarDatos() {
        console.log(`Alto: ${this.#alto}`);
        console.log(`Ancho: ${this.#ancho}`);
        console.log(`Área: ${this.calcularArea()}`);
        console.log(`Perímetro: ${this.calcularPerimetro()}`);
    }
}

