console.log(`06-Functions`);

// Exercise A
console.log(`Exercise A`);

function suma(num1, num2) {
    return num1 + num2;
}

var resultSuma = suma(7, 5);

console.log(`The result is: ${resultSuma}`);

// Exercise B
console.log(`Exercise B`);

function sumaValidada(num1, num2) {
    if (isNaN(num1) == true || isNaN(num2) == true) {
        alert(`Error: invalid parameters`);
        return NaN;
    }
    else {
        return num1 + num2;
    }
}

var resultSuma2;

// invalid
console.log(resultSuma2 = sumaValidada(`^`, `a`));

// invalid
console.log(resultSuma2 = sumaValidada(2, `a`));

// invalid
console.log(resultSuma2 = sumaValidada(`#`, 6));

// valid
console.log(resultSuma2 = sumaValidada(8, 6));

// Exercise C
console.log(`Exercise C`);

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

// Exercise D
console.log(`Exercise D`);

function sumaValidada(num1, num2) {
    if (isNaN(num1) == true || isNaN(num2) == true) {
        alert(`Error: invalid parameters`);
        return NaN;
    }
    else {
        return num1 + num2;
    }
}