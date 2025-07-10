/*
Crea una clase llamada "Animal" que tenga las propiedades 
"nombre" y "edad", y el método "emitirSonido". 
Luego, crea dos clases hijas llamadas "Perro" y "Gato" 
que hereden de "Animal" y tengan su propio método "emitirSonido".
Finalmente, crea dos objetos, uno de la clase "Perro" y otro de la clase
"Gato", y llama a sus métodos "emitirSonido" para verificar que cada animal emite el sonido adecuado. 
*/

// Clase base
class Animal {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    emitirSonido() {
        console.log(`${this.nombre} hace un sonido.`);
    }
}

// Clase hija: Perro
class Perro extends Animal {
    emitirSonido() {
        console.log(`${this.nombre} dice: ¡Guau! 🐶`);
    }
}

// Clase hija: Gato
class Gato extends Animal {
    emitirSonido() {
        console.log(`${this.nombre} dice: ¡Miau! 🐱`);
    }
}


const miPerro = new Perro("Max", 4);
const miGato = new Gato("Luna", 2);

miPerro.emitirSonido(); // Max dice: ¡Guau! 🐶
miGato.emitirSonido();  // Luna dice: ¡Miau! 🐱
