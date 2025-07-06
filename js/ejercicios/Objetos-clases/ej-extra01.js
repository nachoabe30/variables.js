/*
Crea un objeto persona que contenga las propiedades nombre, edad y hobbies (un array de strings). 
Luego, escribe una función que reciba un objeto persona y un nuevo hobby y añada este hobby a la lista de hobbies de la persona. 
Finalmente, imprime los hobbies de la persona usando un bucle. Usa prompt para ingresar los datos de la persona y el nuevo hobby.
*/


const persona = {
    nombre: prompt("Ingrese el nombre de la persona: "),
    edad: prompt("Ingrese la edad de la persona: "),
    hobbies: []
};

let nuevoHobbie;
do {
    nuevoHobbie = prompt("Ingrese un nuevo hobbie (o escriba 'salir' para terminar):");
    if (nuevoHobbie && nuevoHobbie.toLowerCase() !== 'salir') {
        persona.hobbies.push(nuevoHobbie);
    }
} while (nuevoHobbie && nuevoHobbie.toLowerCase() !== 'salir');

document.writeln(`Nombre: ${persona.nombre}`)
document.writeln(`Edad: ${persona.edad}`);
document.writeln("<ol>")
for (i=0; i<persona.hobbies.length; i++){
    document.writeln(`<li>${persona.hobbies[i]}</li>`);
}
document.writeln("</ol>")










