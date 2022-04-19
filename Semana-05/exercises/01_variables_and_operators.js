// 1. Variables y Operadores
console.log('01-Variables and operators');

/* a. Crear dos variables numéricas y utilizar el operador suma para guardar
   el valor de la suma de ambos números en una 3er variable. */

console.log('Exercise A');

var num1 = 5;
var num2 = 8;

var result = num1 + num2;

console.log(`The result is: ${result}`);

/* b. Crear dos variables de tipo String y concatenarlas guardando
   el resultado en una 3er variable. */

console.log('Exercise B');

var string1 = 'My name is ';
var string2 = 'Javier';
var result2 = string1 + string2;

console.log(`Strings linked together: ${result2}`);

/* c. Crear dos variables de tipo String y sumar el largo de cada variable
   (cantidad de letras del string) guardando el resultado de la suma
   en una 3er variable (utilizar length). */

console.log('Exercise C');

var stringLenght1 = 'My last name is ';
var stringLenght2 = 'Biselli';

var stringLenghtTotal = stringLenght1.length + stringLenght2.length;

console.log(`The string lenght is: ${stringLenghtTotal}`);