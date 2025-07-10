/*
Crea una clase llamada "Persona" que tenga las propiedades "nombre", 
"edad" y "profesión", y los métodos "saludar" y "despedirse". 
Luego, crea dos objetos de la clase "Persona" 
con diferentes valores para sus propiedades y 
llama a sus métodos "saludar" y "despedirse".

*/

class Persona {
    constructor(nombre, edad, profesion) {
        this.nombre = nombre;
        this.edad = edad;
        this.profesion = profesion;
    }

    saludar() {
        console.log(`Hola, soy ${this.nombre}, tengo ${this.edad} años y soy ${this.profesion}.`);
    }

    despedirse() {
        console.log(`${this.nombre} se despide. ¡Hasta luego!`);
    }
}


const persona1 = new Persona("Lucía", 28, "diseñadora gráfica");
const persona2 = new Persona("Carlos", 35, "ingeniero de software");

persona1.saludar();     // Hola, soy Lucía, tengo 28 años y soy diseñadora gráfica.
persona1.despedirse();  // Lucía se despide. ¡Hasta luego!

persona2.saludar();     // Hola, soy Carlos, tengo 35 años y soy ingeniero de software.
persona2.despedirse();  // Carlos se despide. ¡Hasta luego!
