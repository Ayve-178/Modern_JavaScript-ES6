//Array.prototype.slice()
var numbers = [1, 2, 3, 4, 5];

var result = numbers.slice(1, 3);
var result1 = numbers.slice(-3, -1);
var result2 = numbers.slice(-1, -3);
var result3 = numbers.slice(-2, 4);
var result4 = numbers.slice();


console.log(result); // [ 2, 3 ]
console.log(result1); // [ 3, 4 ]
console.log(result2); // []
console.log(result3);  //[ 4 ]
console.log(result4);  // [ 1, 2, 3, 4, 5 ]

//It also returns a new array. But it doesn't change the main array.
