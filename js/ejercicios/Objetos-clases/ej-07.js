/*
Nos piden realizar una agenda telefónica de contactos.

Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando sus nombres son iguales.

Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).

Los métodos de la agenda serán los siguientes:

aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar más contactos indicar por pantalla.
existeContacto(Contacto): indica si el contacto pasado existe o no.
listarContactos(): Lista toda la agenda
buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
agendaLlena(): indica si la agenda está llena.
huecosLibres(): indica cuántos contactos más podemos ingresar.

Crea un menú con opciones que serán seleccionadas por el usuario usando un prompt, las salidas de las operaciones seleccionadas por el usuario se pueden mostrar en pantalla y  por consola.
*/


class Contacto {
    constructor(nombre, telefono) {
        this.nombre = nombre;
        this.telefono = telefono;
    }
}



class Agenda {
    constructor(tamano = 10) {
        this.contactos = [];
        this.tamano = tamano;
    }

    aniadirContacto(contacto) {
        if (this.agendaLlena()) {
            alert("La agenda está llena. No se puede añadir más contactos.");
            return;
        }

        if (this.existeContacto(contacto)) {
            alert("Ese contacto ya existe.");
            return;
        }

        this.contactos.push(contacto);
        alert("Contacto añadido correctamente.");
    }

    existeContacto(contacto) {
        return this.contactos.some(c => c.nombre.toLowerCase() === contacto.nombre.toLowerCase());
    }

    listarContactos() {
        if (this.contactos.length === 0) {
            alert("La agenda está vacía.");
        } else {
            let listado = "📋 Lista de contactos:\n";
            this.contactos.forEach(c => {
                listado += `- ${c.nombre}: ${c.telefono}\n`;
            });
            alert(listado);
        }
    }

    buscarContacto(nombre) {
        const contacto = this.contactos.find(c => c.nombre.toLowerCase() === nombre.toLowerCase());
        if (contacto) {
            alert(`📞 Teléfono de ${contacto.nombre}: ${contacto.telefono}`);
        } else {
            alert("❌ Contacto no encontrado.");
        }
    }

    eliminarContacto(contacto) {
        const index = this.contactos.findIndex(c => c.nombre.toLowerCase() === contacto.nombre.toLowerCase());
        if (index !== -1) {
            this.contactos.splice(index, 1);
            alert("✅ Contacto eliminado.");
        } else {
            alert("❌ El contacto no existe en la agenda.");
        }
    }

    agendaLlena() {
        return this.contactos.length >= this.tamano;
    }

    huecosLibres() {
        return this.tamano - this.contactos.length;
    }
}


function menu() {
    const agenda = new Agenda(); // Puedes pasar tamaño como parámetro si querés

    let opcion;
    do {
        opcion = prompt(`📱 AGENDA TELEFÓNICA
1. Añadir contacto
2. Ver si existe un contacto
3. Listar contactos
4. Buscar contacto por nombre
5. Eliminar contacto
6. Ver si la agenda está llena
7. Ver huecos libres
0. Salir

Seleccioná una opción:`);

        switch (opcion) {
            case "1":
                const nombreNuevo = prompt("Ingrese el nombre del contacto:");
                const telNuevo = prompt("Ingrese el teléfono del contacto:");
                agenda.aniadirContacto(new Contacto(nombreNuevo, telNuevo));
                break;

            case "2":
                const nombreBuscar = prompt("Ingrese el nombre del contacto a verificar:");
                const existe = agenda.existeContacto(new Contacto(nombreBuscar, ""));
                alert(existe ? "✅ El contacto existe." : "❌ El contacto no existe.");
                break;

            case "3":
                agenda.listarContactos();
                break;

            case "4":
                const nombreBuscarTel = prompt("Ingrese el nombre del contacto a buscar:");
                agenda.buscarContacto(nombreBuscarTel);
                break;

            case "5":
                const nombreEliminar = prompt("Ingrese el nombre del contacto a eliminar:");
                agenda.eliminarContacto(new Contacto(nombreEliminar, ""));
                break;

            case "6":
                alert(agenda.agendaLlena() ? "📕 La agenda está llena." : "📗 Aún hay espacio.");
                break;

            case "7":
                alert(`📂 Huecos libres: ${agenda.huecosLibres()}`);
                break;

            case "0":
                alert("👋 Saliendo del programa...");
                break;

            default:
                alert("❌ Opción inválida.");
        }

    } while (opcion !== "0");
}

menu(); // Llamada para iniciar
