//Estrcuturas de repeticion

//Tipos de bucles: while, for, do-while

/*While - Mientras se cumpla tal condicion

while(condicion logica){
Todas las lineas de codigo que quiero repetir varias veces
agregar alguna linea que haga que la condicion logica se deje de cumplir en algun momento
}*/

let renglon = 1;
while(renglon <= 50){
    document.writeln(`<p>Renglon ${renglon}</p>`);
    renglon ++; // renglon = renglon +1

}

//do-while
/* 
do{
todas las lineas de codigo que quiero
alguna linea
}while(condicion logica){
}
*/

let fila = 1;
do{
document.writeln(`<p>fila ${fila}</p>`);
fila ++;
}while(fila <= 50);


//for

/*
for(iniciar variable; condicion logica; incremento){
        Todas las lineas de codigo que quiero que se repitan
}
*/

for(let indice=10; indice >0; indice --){
    document.writeln(`<p>Cuenta regresiva N ${indice}</p>`);
}



