/*
Crear una clase Libro que contenga al menos las siguientes propiedades:
ISBN
Título
Autor
Número de páginas

Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:

“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”
Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.
*/

class Libro {
    constructor(ISBN, titulo, autor, numeroPaginas) {
        this._ISBN = ISBN;
        this._titulo = titulo;
        this._autor = autor;
        this._numeroPaginas = numeroPaginas;
    }

    // Getters
    get ISBN() {
        return this._ISBN;
    }

    get titulo() {
        return this._titulo;
    }

    get autor() {
        return this._autor;
    }

    get numeroPaginas() {
        return this._numeroPaginas;
    }

    // Setters
    set ISBN(nuevoISBN) {
        this._ISBN = nuevoISBN;
    }

    set titulo(nuevoTitulo) {
        this._titulo = nuevoTitulo;
    }

    set autor(nuevoAutor) {
        this._autor = nuevoAutor;
    }

    set numeroPaginas(nuevoNumeroPaginas) {
        this._numeroPaginas = nuevoNumeroPaginas;
    }

    // Método para mostrar la información del libro
    mostrarLibro() {
        console.log(`El libro "${this._titulo}" con ISBN ${this._ISBN}, creado por el autor ${this._autor}, tiene ${this._numeroPaginas} páginas.`);
    }
}
