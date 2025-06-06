//Estructura condicional simple

const edad = parseInt( prompt('ingresa tu edad: '));
console.log(edad)

// && AND
// || OR

if(edad>0 && edad<=110){


if (edad >= 18){
    alert('sos mayor de edad');
}
else{
    alert('sos menor de edad');
}
}
else{
    alert('Valor erroeno');
}
