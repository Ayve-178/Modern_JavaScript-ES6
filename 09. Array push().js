//Array.prototype.push()

var numbers = [1, 2, 3, 4, 5];

numbers.push(6);
console.log(numbers);             // [ 1, 2, 3, 4, 5, 6 ]

numbers.push(7, 8, 9);
console.log(numbers);             // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

numbers.push([10, 11, 12]);
console.log(numbers);             // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, [ 10, 11, 12 ] ]

var result = numbers.push(15);
console.log(numbers);
console.log(result);      //confusion. will check later.

//It changes the main array.
