/*
Ejercicio 2: Crea un array de objetos, donde cada objeto represente a un estudiante con propiedades nombre y nota.
Luego, escribe una función que reciba este array y calcule la nota media de los estudiantes. 
Usa prompt para ingresar los datos de los estudiantes.
*/

const estudiantes = [];

const cantidad = parseInt(prompt("¿Cuántos estudiantes vas a ingresar?"));

// Pedir datos de cada estudiante
for (let i = 0; i < cantidad; i++) {
    const nombre = prompt(`Ingrese el nombre del estudiante:`);
    const nota = parseFloat(prompt(`Ingrese la nota de ${nombre}:`));
    
    estudiantes.push({ nombre: nombre, nota: nota });
}

// Función para el cálculo del promedio
function calcularPromedio(estudiantes) {
    let suma = 0;
    for (let i = 0; i < estudiantes.length; i++) {
        suma += estudiantes[i].nota;
    }
    return suma / estudiantes.length;
}

// Mostrar los datos
document.writeln("<h2>Lista de estudiantes</h2>");
document.writeln("<ul>");
for (let i = 0; i < estudiantes.length; i++) {
    document.writeln(`<li>
        Nombre del Estudiante: ${estudiantes[i].nombre} - Nota: ${estudiantes[i].nota}
    </li>`);
}
document.writeln("</ul>");

// Mostrar el promedio general
document.writeln(`<h3>Promedio general de notas: ${calcularPromedio(estudiantes)}</h3>`);


