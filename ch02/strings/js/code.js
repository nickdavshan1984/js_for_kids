//joining strings
var greeting = "Hello";
var myName = "Nick";

console.log(greeting + myName);

greeting = "Hello ";

console.log(greeting + myName);



//finding the lenght of a string
console.log("Supercalifragilisticexpialidocious".length);

var java = "Java";
console.log(java.length);

var script = "Script";
console.log(script.length);

var javascript = java + script;
console.log(javascript.length);



//getting a single character from a string
console.log(myName[0]);
console.log(myName[1]);
console.log(myName[2]);



//codeword
var codeword1 = "are";
var codeword2 = "tubas";
var codeword3 = "unsafe";
var codeword4 = "?!";
 
console.log(codeword1[1] + codeword2[1] + codeword3[1] + codeword4[1]);



//cutting up strings
var longString = "My long string is long";

console.log(longString.slice(3, 14));
console.log(longString.slice(3));

//changing strings to all capital or all lowercase letters
var sillyString = "heLlo THERE, hOW ARE yOu doINg?";
var lowerString = sillyString.toLowerCase();
var firstCharacter = lowerString[0];
var firstCharacterUpper = firstCharacter.toUpperCase();
var restOfString = lowerString.slice(1);

console.log(firstCharacterUpper + restOfString);




