/*Objetos: puede ser tangible o intangible: Se tiene que describir 
caracteristicas llamadas propiedades.
Las acciones que podemos hacer con el objeto los llamamos metodos.

Ej: 
AUTO{
marca
modelo
color
precio
año
motor
}

Metodos{
acellerar
retroceder
frenar 
TocarBocina
}
*/

//Notacion Literal (solo el uso de 1 o 2 objetos)


//notacion literal

const pelicula ={

    // propiedades clave: valor
    titulo: 'Episodio 3 la venganza de los siths',
    duracion: '2:20',
    anio: 2005,
    puntaje: 9.5,
    categoria: 'Ciencia ficción',
    actores: ['Ewan Mcgregor', 'Hayden Christensen'],

    //metodos
    //El metodo this hay que ponerlo dentro del objeto, le pedimos un dato dentro del objeto
    reproducir: function (this){
        document.writeln(`<p>Comenzo la peli ▶️ <b>${this.titulo}</b> </p>`)
    },

    //No se pueden poner this en este tipo de metodo
    detener: () =>{
        document.writeln(`<p>La peli se detuvo ⏯️ </p>`)
    }
}

// this hace referencia al objeto global, en este caso al objeto window
console.log(this); 
// mostrar el objeto
console.log(pelicula)
document.writeln(`<h2 class='mt-3'>Objeto Pelicula</h2>`);
document.writeln(`<p>Titulo: ${pelicula.titulo}</p>`);
document.writeln(`<p>Duración: ${pelicula.duracion}</p>`);
document.writeln(`<p>Año: ${pelicula.anio}</p>`);
document.writeln(`<p>Puntaje: ${pelicula.puntaje}</p>`);
document.writeln(`<p>Categoría: ${pelicula.categoria}</p>`);

//agregar propiedades nuevas
pelicula.imdb = 7.6;
document.writeln(`<p>IMDB: ${pelicula.imdb}</p>`);

//mosidifcar un objeto
pelicula.imdb = 8;
document.writeln(`<p>IMDB actualizado: ${pelicula.imdb}</p>`);

//borrar una propiedad (no es normal)
delete pelicula.puntaje;
document.writeln(`<p>Puntaje: ${pelicula.imdb}</p>`);

//Usar los metodos del objeto 
//Mosificar el metodo reproducir para que muestra el titulo de la pelicula
pelicula.reproducir();
pelicula.detener();