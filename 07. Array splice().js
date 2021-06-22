//Array.prototype.splice()

//When we want to insert some elements in a particular position in an array or want to retrive some elements from a particular position in an array, we will use array.splice(startingIndex, numbersOfValuesToRemove, elementsWeWantToAdd).
var numbers = [1, 2, 3, 4, 5];

var result = numbers.splice(1, 2, 10, 15, 19, 23);

//It also returns a new array. And it changes the main array. In result we will get the removed elements.


console.log(numbers); // [ 1, 10, 15, 19, 23,  4,  5 ]
console.log(result); // [ 2, 3 ]

var result1 = numbers.splice(-1, 2, 7, 8);
//If the numbers of elements after the particular position is less than tha number of elements we want to remove, it will remove the number of elements it finds.

console.log(numbers); // [ 1, 10, 15, 19, 23,  4,  7, 8 ]
console.log(result1);  // [ 5 ]
