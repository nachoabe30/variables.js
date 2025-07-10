/*
 crear una clase aeropuerto con las propiedades nombreAeropuerto y lista de aviones, esta clase deberá contener el método agregarAvion, el cual recibirá un objeto de tipo Avión, además de un método buscarAvion el cual recibirá el nombre de un avión y devolverá información en caso de encontrarlo, si no lo encontró indicar con un mensaje.
Por su parte los aviones tendrán las propiedades: nombre, capacidad, destino, lista de pasajeros. Los aviones tienen el método abordar el cual permite que un pasajero suba al avión solo si hay capacidad disponible en el mismo, caso contrario mostrar un mensaje que indique que el avión está lleno.

Crear un objeto de tipo aeropuerto llamado "Aeropuerto Internacional", crear 3 objetos aviones con diferentes destinos. Agregar los 3 aviones al aeropuerto, buscar un avión y usar el método abordar.

*/

class Avion {
    constructor(nombre, capacidad, destino) {
        this.nombre = nombre;
        this.capacidad = capacidad;
        this.destino = destino;
        this.pasajeros = [];
    }

    abordar(pasajero) {
        if (this.pasajeros.length < this.capacidad) {
            this.pasajeros.push(pasajero);
            console.log(`🧍 Pasajero ${pasajero} abordó el avión "${this.nombre}".`);
        } else {
            console.log(`❌ El avión "${this.nombre}" está lleno. No se puede abordar.`);
        }
    }

    mostrarInfo() {
        console.log(`✈️ Avión: ${this.nombre}`);
        console.log(`🧭 Destino: ${this.destino}`);
        console.log(`👥 Capacidad: ${this.capacidad}`);
        console.log(`📋 Pasajeros: ${this.pasajeros.join(", ") || "Ninguno aún"}`);
    }
}


class Aeropuerto {
    constructor(nombreAeropuerto) {
        this.nombreAeropuerto = nombreAeropuerto;
        this.aviones = [];
    }

    agregarAvion(avion) {
        this.aviones.push(avion);
        console.log(`🛬 Avión "${avion.nombre}" agregado al aeropuerto "${this.nombreAeropuerto}".`);
    }

    buscarAvion(nombreAvion) {
        const avionEncontrado = this.aviones.find(avion => avion.nombre.toLowerCase() === nombreAvion.toLowerCase());
        
        if (avionEncontrado) {
            console.log(`✅ Avión "${nombreAvion}" encontrado:`);
            avionEncontrado.mostrarInfo();
            return avionEncontrado;
        } else {
            console.log(`❌ Avión "${nombreAvion}" no encontrado en el aeropuerto.`);
            return null;
        }
    }
}


// Crear el aeropuerto
const aeropuerto = new Aeropuerto("Aeropuerto Internacional");

// Crear 3 aviones con distintos destinos
const avion1 = new Avion("Águila Uno", 2, "Madrid");
const avion2 = new Avion("Cóndor Azul", 3, "Buenos Aires");
const avion3 = new Avion("Fénix Rojo", 1, "Nueva York");

// Agregar aviones al aeropuerto
aeropuerto.agregarAvion(avion1);
aeropuerto.agregarAvion(avion2);
aeropuerto.agregarAvion(avion3);

// Buscar un avión y abordar pasajeros
const avionBuscado = aeropuerto.buscarAvion("Cóndor Azul");

if (avionBuscado) {
    avionBuscado.abordar("Juan");
    avionBuscado.abordar("María");
    avionBuscado.abordar("Luis");
    avionBuscado.abordar("Pedro");  // Este debería mostrar que el avión está lleno
}
