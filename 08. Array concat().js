//Array.prototype.concat()

var numbers1 = [1, 2, 3, 4, 5];
var numbers2 = [6, 7 , 8, 9, 10];

var result = numbers1.concat(numbers2);

console.log(numbers1);      // [ 1, 2, 3, 4, 5 ]
console.log(numbers2);      // [ 6, 7, 8, 9, 10 ]
console.log(result);        // [ 1, 2, 3, 4,  5, 6, 7, 8, 9, 10 ]

//It doesn't change the main arrays.

//But what if we have more arrays to concat?

var a = [1, 2, 3];
var b = [4, 5, 6];
var c = [7, 8, 9];
var d = [10, 11, 12];

var res = a.concat(b, c, d);

console.log(res);       // [ 1,  2, 3, 4,  5, 6,  7, 8, 9, 10, 11, 12 ]
