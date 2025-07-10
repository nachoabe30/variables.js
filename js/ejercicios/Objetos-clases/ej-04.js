/*
 Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.
*/

class Producto {
    constructor(codigo, nombre, precio) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
    }

    // Método para mostrar los datos
    imprimeDatos() {
        console.log(`Código: ${this.codigo}`);
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Precio: $${this.precio}`);
        console.log('---------------------');
    }
}

// Crear instancias
const producto1 = new Producto("A101", "Camisa", 4500);
const producto2 = new Producto("B202", "Pantalón", 7500);
const producto3 = new Producto("C303", "Zapatillas", 12500);

// Guardar en un array
const listaProductos = [producto1, producto2, producto3];

// Mostrar datos de todos los productos
for (let producto of listaProductos) {
    producto.imprimeDatos();
}
