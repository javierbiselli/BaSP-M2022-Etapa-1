// 5. For
console.log('05-For');

/* a. Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for
   de JavaScript para mostrar una alerta utilizando cada una de las palabras. */

console.log('Exercise A');

var names = ['javier', 'franco', 'lucas', 'matias', 'jesica'];
console.log(`Array: ${names}`);

for (let i = 0; i < names.length; i++) {
    alert(names[i]);
}

/* b. Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar
   una alerta por cada palabra modificada. */

console.log('Exercise B');

var upperCase = [];
var lowerCase = [];

for (let i = 0; i < names.length; i++) {
    upperCase[i] = names[i].substring(0,1).toUpperCase();
    lowerCase[i] = names[i].substring(1,).toLowerCase();
    upperCase[i] = upperCase[i] + lowerCase[i];
    alert(upperCase[i]);
}

console.log(`New array with upper case: ${upperCase}`);

/* c. Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a)
   recorrerlo con un bucle for para ir guardando cada palabra dentro de la variable sentence.
   Al final mostrar una única alerta con la cadena completa.*/

console.log('Exercise C');

var sentence = '';

for (let i = 0; i < names.length; i++) {
    sentence = sentence + ' ' + names[i];
    if (names.toString().length <= sentence.length) {
        alert(`Sentence: ${sentence}`);
    }
}

console.log(`Complete sentence ${sentence}`);

/* d. Crear una array vacío y con un bucle for de 10 repeticiones. Llenar el array con el número de la repetición,
   es decir que al final de la ejecución del bucle for debería haber 10 elementos dentro del array,
   desde el número 0 hasta al número 9. Mostrar por la consola del navegador el array final (utilizar console.log). */

console.log('Exercise D');

var emptyArray = [];

for (let i = 0; i < 10; i++) {
    emptyArray.push(i);
}

console.log(`Array from 0 to 9 with for: ${emptyArray}`);