let score = "33";

console.log(typeof score);

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

//if we convert string to number and string have other character with number then it will converted into NaN
score = "33abc";
valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

//what happen if we convert null to number //it will converted into 0
score = null;
valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

//result 
// "33" => 33
// "33abc" => NaN
// true => 1 //False => 0

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(typeof booleanIsLoggedIn);
console.log(booleanIsLoggedIn);


// "" => false
// "abc" => true