//&&(AND)
var hadShower = true;
var hasBackpack = false;

console.log(hadShower && hasBackpack);

hasBackpack = true;

console.log(hadShower && hasBackpack);

//||(OR)
var hasApple = true;
var hasOrange = false;
console.log(hasApple||hasOrange);

//!(NOT)
var isWeekend = true;
var needToShowerToday = !isWeekend;

console.log(needToShowerToday);

//combining logical operators
isWeekend = false;
hadShower = true;
hasApple = false;
hasOrange = true;
var shouldGoToSchool = !isWeekend && hadShower && (hasApple || hasOrange);
console.log(shouldGoToSchool);

//comparing numbers with booleans
var height = 65;
var heightRestriction = 60;

console.log(height > heightRestriction);
console.log(height >= heightRestriction);

heightRestriction = 48;

console.log(height < heightRestriction);

height = 48;

console.log(height <= heightRestriction);



//equal to
var mySecretNumber = 5;
var chicoGuess = 3;

console.log(mySecretNumber === chicoGuess);

var harpoGuess = 7;
console.log(mySecretNumber === harpoGuess);

var grouchoGuess = 5;
console.log(mySecretNumber === grouchoGuess);



//double equals
var stringNumber = "5";
var actualNumber = 5;

console.log(stringNumber === actualNumber);
console.log(stringNumber == actualNumber);

