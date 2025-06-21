/*
Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *
*/

const nombres = []; 
const edades = [];  

for (let i = 0; i < 3; i++) {
    const nombreIngresado = prompt("Ingresa un nombre: ");
    const edadIngresada = parseInt(prompt("Ingresa una edad: "));

    // Guardar los valores de arrays usando .push()
    nombres.push(nombreIngresado);
    edades.push(edadIngresada);
}

// Ahora realizamos las comparaciones con los arrays correctamente llenos
if (edades[0] > edades[1] && edades[0] > edades[2]) {
    document.writeln(`El mayor es ${nombres[0]} con ${edades[0]} años.`);
} else if (edades[1] > edades[0] && edades[1] > edades[2]) {
    document.writeln(`El mayor es ${nombres[1]} con ${edades[1]} años.`);
} else if (edades[2] > edades[0] && edades[2] > edades[1]) {
    document.writeln(`El mayor es ${nombres[2]} con ${edades[2]} años.`);
}