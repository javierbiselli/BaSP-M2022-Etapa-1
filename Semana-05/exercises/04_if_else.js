console.log(`04-If-Else`);

console.log(`Exercise A`);

var randomNumber = Math.random();
console.log(`Random number: ${randomNumber}`);

if (randomNumber >= .5) {
    alert(`Greater than 0.5`);
}
else {
    alert(`Lower than 0.5`);
}

console.log(`Exercise B`);

var age = Math.floor(Math.random() * 101);
console.log(`Age: ${age}`);

if (age < 2) {
    alert(`Bebe`);
}

else if (age >= 2 && age < 13) {
    alert(`Niño`);
}

else if (age >= 13 && age < 20) {
    alert(`Adolescente`);
}

else if (age >= 20 && age < 31) {
    alert(`Joven`);
}

else if (age >= 31 && age < 61) {
    alert(`Adulto`);
}

else if (age >= 61 && age < 75) {
    alert(`Adulto mayor`);
}

else {
    alert(`Anciano`);
}
