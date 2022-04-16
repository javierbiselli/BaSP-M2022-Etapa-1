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

function sumaValidada2(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        alert(`Error: invalid parameters`);
        return NaN;
    }
    else if (num1 == Math.floor(num1) && num2 == Math.floor(num2)) {
        return num1 + num2;
    }
    else {
        alert(`Error: not integer`);
        return [Math.round(num1), Math.round(num2)];
    }
}

console.log(sumaValidada2(`sdgfdg`, 3));

// Exercise E
console.log(`Exercise E`);

function validateIntergerSeparated(num1, num2) {
    if (num1 != Math.floor(num1) || num2 != Math.floor(num2)) {
        alert(`Error: not integer`);
        return [Math.round(num1), Math.round(num2)];
    }
    else {
        return sumaValidada2(num1, num2)
    }
}

console.log(validateIntergerSeparated(`a`, 3))
