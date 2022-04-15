console.log(`05-For`);

// Exercise A
console.log(`Exercise A`);

var names = [`javier`, `franco`, `lucas`, `matias`, `jesica`];
console.log(`Array: ${names}`);

for (let i = 0; i < names.length; i++) {
    alert(names[i]);
}

// Exercise B
console.log(`Exercise B`);

var upperCase = [];
var lowerCase = [];

for (let i = 0; i < names.length; i++) {
    upperCase[i] = names[i].substring(0,1).toUpperCase();
    lowerCase[i] = names[i].substring(1,).toLowerCase();
    upperCase[i] = upperCase[i] + lowerCase[i];
    alert(upperCase[i]);
}

console.log(`New array with upper case: ${upperCase}`);

// Exercise C
console.log(`Exercise C`);

var sentence = '';

for (let i = 0; i < names.length; i++) {
    sentence = sentence + ' ' + names[i];
    if (names.toString().length <= sentence.length) {
        alert(`Sentence: ${sentence}`);
    }
}

console.log(`Complete sentence ${sentence}`);

// Exercise D
console.log(`Exercise D`);

var emptyArray = [];

for (let i = 0; i < 10; i++) {
    emptyArray.push(i);
}

console.log(`Array from 0 to 9 with for: ${emptyArray}`);