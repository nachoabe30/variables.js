/*Escribe un programa que pida una frase y escriba las vocales que aparecen*///Escribe un programa que pida una frase y escriba las vocales que aparecen

const frase = prompt("Ibgrese frase de 4 caracteres ").toLowerCase(); //transforma todo en minucula a la frase ingresada

console.log(frase);

//hola mundo
//con lenght me va a decir cuantos caracteres tiene la frase que escribimos
console.log(frase.length);
//con substring me va a decir que caracteres va a mostrar (star number, final number)
console.log(frase.substring(0, 3));
//com charat me va a decir solamente un solo caracter en la posicion que le idniquemos
console.log(frase.charAt(0));
console.log(frase.charAt(5));

//Esti transforma a un texto en mayuscula y minuscula
console.log(frase.toUpperCase());
console.log(frase.toLowerCase());




if (
  frase.charAt(0) == "a" ||
  frase.charAt(0) == "e" ||
  frase.charAt(0) == "i" ||
  frase.charAt(0) == "o" ||
  frase.charAt(0) == "u"
) {
  document.writeln(frase.charAt(0));
}
if (
  frase.charAt(1) == "a" ||
  frase.charAt(1) == "e" ||
  frase.charAt(1) == "i" ||
  frase.charAt(1) == "o" ||
  frase.charAt(1) == "u"
) {
  document.writeln(frase.charAt(1));
}
if (
  frase.charAt(2) == "a" ||
  frase.charAt(2) == "e" ||
  frase.charAt(2) == "i" ||
  frase.charAt(2) == "o" ||
  frase.charAt(2) == "u"
) {
  document.writeln(frase.charAt(2));
}
if (
  frase.charAt(3) == "a" ||
  frase.charAt(3) == "e" ||
  frase.charAt(3) == "i" ||
  frase.charAt(3) == "o" ||
  frase.charAt(3) == "u"
) {
  document.writeln(frase.charAt(3));
}