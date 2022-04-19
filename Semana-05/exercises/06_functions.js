// 6. Funciones
console.log('06-Functions');

/* a. Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función
   y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador. */

console.log('Exercise A');

function suma(num1, num2) {
    return num1 + num2;
}

var resultSuma = suma(7, 5);

console.log(`The result is: ${resultSuma}`);

/* b. A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un
   número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado. */

console.log('Exercise B');

function sumaValidada(num1, num2) {
    if (isNaN(num1) == true || isNaN(num2) == true) {
        alert('Error: invalid parameters');
        return NaN;
    }
    else {
        return num1 + num2;
    }
}

var resultSuma2;

// invalid
console.log(resultSuma2 = sumaValidada('^', 'a'));

// invalid
console.log(resultSuma2 = sumaValidada(2, 'a'));

// invalid
console.log(resultSuma2 = sumaValidada('#', 6));

// valid
console.log(resultSuma2 = sumaValidada(8, 6));

/* c. Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero. */

console.log('Exercise C');

function validateInteger(num) {
    if (num == Math.floor(num)) {
        return true;
    }
    else {
        return false;
    }
}

// true
console.log(validateInteger(3));

// false
console.log(validateInteger(3.5));

/* d. A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros.
   En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado). */

console.log('Exercise D');

function sumaValidada2(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        alert('Error: invalid parameters');
        return NaN;
    }
    else if (validateInteger(num1) == false) {
        alert('Error: first number is not integer');
        return `Number converted to integer: ${Math.round(num1)}`;
    }
    else if (validateInteger(num2) == false) {
        alert('Error: second number is not integer');
        return `Number converted to integer: ${Math.round(num2)}`;
    }
    else {
        return num1 + num2;
    }
}

// Invalid parameters
console.log(sumaValidada2('$', 3));

// Invalid parameters
console.log(sumaValidada2(3.5, 'javi'));

// Invalid parameters
console.log(sumaValidada2('@', '25'));

// First number not integer
console.log(sumaValidada2(5.9, 77.2343));

// Second number not integer
console.log(sumaValidada2(9, 11.8));

// Valid
console.log(sumaValidada2(5, 23));

/* e. Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma
   probando que todo siga funcionando igual. */

console.log('Exercise E');

function validateIntergerSeparated(num1, num2) {
    if (validateInteger(num1) == false || validateInteger(num2) == false) {
        alert('Not integer');
        return console.log(`Numbers converted to integer: ${Math.round(num1)}, ${Math.round(num2)}`);
    }
    else {
        return num1 + num2;
    }
}

function validateNumber (num1, num2) {
    if (isNaN(num1) == true || isNaN(num2) == true) {
        alert('Error: invalid parameters');
        return true;
    }
    else {
        return false;
    }
}

function suma2(num1, num2) {
    if (validateNumber(num1, num2)) {
        return NaN;
    }
    else {
        validateIntergerSeparated(num1, num2)
        return `Result: ${Math.round(num1) + Math.round(num2)}`;
    }
}

// Invalid parameters
console.log(suma2('j', 9));

// Invalid parameters
console.log(suma2(7.6, 's'));

// Invalid parameters
console.log(suma2('%', '260'));

// Not integer
console.log(suma2(99.6, 12.9929));

// Not integer
console.log(suma2(9, 19.3));

// Valid
console.log(suma2(9, 4));