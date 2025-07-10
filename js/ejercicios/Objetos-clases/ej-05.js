class Persona {
    constructor(nombre, edad, sexo, peso, altura, anioNacimiento) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo; // 'H' o 'M'
        this.peso = peso;
        this.altura = altura;
        this.anioNacimiento = anioNacimiento;
        this.dni = this.generaDNI(); // Se genera automáticamente al crear la persona
    }

    // Método para mostrar a qué generación pertenece
    mostrarGeneracion() {
        const año = this.anioNacimiento;
        let generacion = "";
        let rasgo = "";

        if (año >= 1994 && año <= 2010) {
            generacion = "Generación Z";
            rasgo = "Irreverencia";
        } else if (año >= 1981 && año <= 1993) {
            generacion = "Generación Y (millennials)";
            rasgo = "Frustración";
        } else if (año >= 1969 && año <= 1980) {
            generacion = "Generación X";
            rasgo = "Obsesión por el éxito";
        } else if (año >= 1949 && año <= 1968) {
            generacion = "Baby Boom";
            rasgo = "Ambición";
        } else if (año >= 1930 && año <= 1948) {
            generacion = "Silent Generation";
            rasgo = "Austeridad";
        } else {
            generacion = "Generación desconocida";
            rasgo = "No determinado";
        }

        console.log(`${this.nombre} pertenece a la ${generacion}. Rasgo característico: ${rasgo}`);
    }

    // Método para verificar si es mayor de edad
    esMayorDeEdad() {
        if (this.edad >= 18) {
            console.log(`${this.nombre} es mayor de edad.`);
        } else {
            console.log(`${this.nombre} es menor de edad.`);
        }
    }

    // Mostrar todos los datos de la persona
    mostrarDatos() {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Edad: ${this.edad}`);
        console.log(`DNI: ${this.dni}`);
        console.log(`Sexo: ${this.sexo}`);
        console.log(`Peso: ${this.peso} kg`);
        console.log(`Altura: ${this.altura} m`);
        console.log(`Año de nacimiento: ${this.anioNacimiento}`);
    }

    // Generar un número aleatorio de 8 cifras como DNI
    generaDNI() {
        return Math.floor(10000000 + Math.random() * 90000000);
    }
}
