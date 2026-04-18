let score1 = "33abc"

console.log(typeof score1);
console.log(typeof (score1));

let valueInNumber1 = Number(score1);
console.log(typeof(valueInNumber1));
console.log(valueInNumber1);

let score2 = null

console.log(typeof score2);
console.log(typeof (score2));

let valueInNumber2 = Number(score2);
console.log(typeof(valueInNumber2));
console.log(valueInNumber2);


let score = undefined

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score);
console.log(typeof(valueInNumber));
console.log(valueInNumber);


// "33" => 33 and vice versa
// "33abc" => NaN(Not a Number) [Type is number] 
// true => 1 and vice versa , false => 0 and vice versa


// "" to boolean => false
// "----" to boolean => true