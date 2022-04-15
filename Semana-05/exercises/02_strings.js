console.log(`02-Strings`);

// Exercise A
console.log(`Exercise A`);

var upperCaseString = `radium rocket`;
upperCaseString = upperCaseString.toUpperCase();

console.log(`Upper case string: ${upperCaseString}`);

// Exercise B
console.log(`Exercise B`);

var wholeString = `javascript`;
var subString = wholeString.substring(0,5);

console.log(`The substring is: ${subString}`);

// Exercise C
console.log(`Exercise C`);

var newWholeString = `Javier Biselli`;
var newSubString = newWholeString.substring(11,14);

console.log(`The substring is: ${newSubString}`);

// Exercise D
console.log(`Exercise D`);

var newString = `javierbiselli`;
var newStringModified = newString.substring(0,1).toUpperCase();
newString = newString.substring(1,13);
newStringModified = newStringModified + newString;

console.log(`The result is (without toLowerCase): ${newStringModified}`);

var newString2 = `javierbiselli`;
var newStringModified2 = newString2.toUpperCase();
newString2 = newStringModified2.substring(0,1);
newStringModified2 = newStringModified2.substring(1,13).toLowerCase();
newStringModified2 = newString2 + newStringModified2;

console.log(`The result is (with toLowerCase) ${newStringModified2}`);

// Exercise E
console.log(`Exercise E`);

var stringBlank = `javier biselli`;
var blankSpace = stringBlank.indexOf(` `);

console.log(`Index of blank space: "${blankSpace}"`);

// Exercise F
console.log(`Exercise F`);

var stringLong = `javascript developing`;
var stringLongUpper = stringLong.toUpperCase();

var stringLongModified = stringLongUpper[stringLongUpper.indexOf(`J`)] + stringLong.substring(1,10).toLowerCase()
+ ` ` + stringLongUpper[stringLongUpper.indexOf(`D`)] + stringLong.substring(12,21).toLowerCase();

console.log(`The result is: ${stringLongModified}`);