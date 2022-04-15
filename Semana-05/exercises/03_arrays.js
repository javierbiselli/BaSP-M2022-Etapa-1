console.log(`03-Arrays`);

// Exercise A
console.log(`Exercise A`);

var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

console.log(`Months 5 and 11: ${months[4]}, ${months[10]}`);

// Exercise B
console.log(`Exercise B`);

months.sort();

console.log(`Array ordered: ${months}`);

// Exercise C
console.log(`Exercise C`);

months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

months.unshift(`first`);
months.push(`last`);

console.log(`Unshift and push: ${months}`);

// Exercise D
console.log(`Exercise D`);

months.shift();
months.pop();

console.log(`Shift and pop: ${months}`);

// Exercise E
console.log(`Exercise E`);

months.reverse();

console.log(`Reverse: ${months}`);

// Exercise F
console.log(`Exercise F`);

months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

newArrayToString = months.join('-');

console.log(`Join: ${newArrayToString}`);

// Exercise G
console.log(`Exercise G`);

monthsCopy = months.slice(4,11);

console.log(`Slice from may to november ${monthsCopy}`);