/*
Crea un objeto alumno con propiedades nombre, curso y calificaciones (un array de números). Escribe una función que reciba un objeto alumno y un número, y que añada la calificación al array de calificaciones del alumno. Calcula la calificación más alta del alumno y clasifica al alumno según su calificación más alta (A para 9-10, B para 7-8, C para 5-6, D para 0-4).
*/


const alumno = {
    nombre: prompt("Ingrese el nombre del alumno:"),
    curso: prompt("Ingrese el curso del alumno:"),
    calificaciones: []
};


function agregarCalificacion(alumno, nota) {
    alumno.calificaciones.push(nota);
}


const cantidad = parseInt(prompt("¿Cuántas calificaciones desea ingresar?"));

for (let i = 0; i < cantidad; i++) {
    const nota = parseFloat(prompt(`Ingrese la calificación ${i + 1}:`));
    agregarCalificacion(alumno, nota);
}


function obtenerNotaMaxima(alumno) {
    return Math.max(...alumno.calificaciones);
}


function clasificarNota(nota) {
    if (nota >= 9 && nota <= 10) return 'A';
    else if (nota >= 7) return 'B';
    else if (nota >= 5) return 'C';
    else return 'D';
}


const notaMaxima = obtenerNotaMaxima(alumno);
const clasificacion = clasificarNota(notaMaxima);

document.writeln(`<h2>Datos del alumno</h2>`);
document.writeln(`<p><strong>Nombre:</strong> ${alumno.nombre}</p>`);
document.writeln(`<p><strong>Curso:</strong> ${alumno.curso}</p>`);
document.writeln(`<p><strong>Calificaciones:</strong> ${alumno.calificaciones.join(", ")}</p>`);
document.writeln(`<p><strong>Nota más alta:</strong> ${notaMaxima}</p>`);
document.writeln(`<p><strong>Clasificación:</strong> ${clasificacion}</p>`);
