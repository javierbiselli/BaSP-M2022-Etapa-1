// 2. Strings
console.log('02-Strings');

/* a. Crear una variable de tipo string con al menos 10 caracteres y convertir
   todo el texto en mayúscula (utilizar toUpperCase). */

console.log('Exercise A');

var upperCaseString = 'radium rocket';
upperCaseString = upperCaseString.toUpperCase();

console.log(`Upper case string: ${upperCaseString}`);

/* b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo
   string con los primeros 5 caracteres guardando el resultado en
   una nueva variable (utilizar substring). */

console.log('Exercise B');

var wholeString = 'javascript';
var subString = wholeString.substring(0,5);

console.log(`The substring is: ${subString}`);

/* c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo
   string con los últimos 3 caracteres guardando el resultado en
   una nueva variable (utilizar substring). */

console.log('Exercise C');

var newWholeString = 'Javier Biselli';
var newSubString = newWholeString.substring(11,14);

console.log(`The substring is: ${newSubString}`);

/* d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo
   string con la primera letra en mayúscula y las demás en minúscula. Guardar el
   resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +). */

console.log('Exercise D');

var newString = 'javierbiselli';
var newStringModified = newString.substring(0,1).toUpperCase();
newString = newString.substring(1,13);
newStringModified = newStringModified + newString;

console.log(`The result is (without toLowerCase): ${newStringModified}`);

var newString2 = 'javierbiselli';
var newStringModified2 = newString2.toUpperCase();
newString2 = newStringModified2.substring(0,1);
newStringModified2 = newStringModified2.substring(1,13).toLowerCase();
newStringModified2 = newString2 + newStringModified2;

console.log(`The result is (with toLowerCase) ${newStringModified2}`);

/* e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco.
   Encontrar la posición del primer espacio en blanco y guardarla en una
   variable (utilizar indexOf). */

console.log('Exercise E');

var stringBlank = 'javier biselli';
var blankSpace = stringBlank.indexOf(' ');

console.log(`Index of blank space: "${blankSpace}"`);

/* f. Crear una variable de tipo string con al menos 2 palabras largas
   (10 caracteres y algún espacio entre medio). Utilizar los métodos de los
   ejercicios anteriores para generar un nuevo string que tenga la primera letra
   de ambas palabras en mayúscula y las demás letras en minúscula (utilizar
   indexOf, substring, toUpperCase, toLowerCase y el operador +). */

console.log('Exercise F');

var stringLong = 'javascript developing';
var stringLongUpper = stringLong.toUpperCase();

var stringLongModified = stringLongUpper[stringLongUpper.indexOf('J')] + stringLong.substring(1,10).toLowerCase()
+ ` ` + stringLongUpper[stringLongUpper.indexOf('D')] + stringLong.substring(12,21).toLowerCase();

console.log(`The result is: ${stringLongModified}`);