// 3. Arrays
console.log('03-Arrays');

/* a. Dado el siguiente array:
   ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
   mostrar por consola los meses 5 y 11 (utilizar console.log). */

console.log('Exercise A');

var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

console.log(`Months 5 and 11: ${months[4]}, ${months[10]}`);

/* b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort). */

console.log('Exercise B');

months.sort();

console.log(`Array ordered: ${months}`);

/* c. Agregar un elemento al principio y al final del array (utilizar unshift y push). */

console.log('Exercise C');

months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

months.unshift('first');
months.push('last');

console.log(`Unshift and push: ${months}`);

/* d. Quitar un elemento del principio y del final del array (utilizar shift y pop). */

console.log('Exercise D');

months.shift();
months.pop();

console.log(`Shift and pop: ${months}`);

/* e. Invertir el orden del array (utilizar reverse). */

console.log('Exercise E');

months.reverse();

console.log(`Reverse: ${months}`);

/* f. Unir todos los elementos del array en un único string donde cada mes
   este separado por un guión - (utilizar join). */

console.log('Exercise F');

months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

newArrayToString = months.join('-');

console.log(`Join: ${newArrayToString}`);

/* g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice). */

console.log('Exercise G');

monthsCopy = months.slice(4,11);

console.log(`Slice from may to november ${monthsCopy}`);