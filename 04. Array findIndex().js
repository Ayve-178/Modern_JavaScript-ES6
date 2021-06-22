//Array.prototype.findIndex()
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// var result = numbers.findIndex((currentValue, index, arr) => {
//     return currentValue % 2;
// });

// console.log(result); //0

//because 1 % 2 = 1, 1 means true. So it returns true for 1 and give us the index 0. But we didn't want that. We want the first index of the value which is divisible by 2. So for this we have to do the following: 

var result = numbers.findIndex((currentValue, index, arr) => {
    return !(currentValue % 2);
});

console.log(result); //1

var result1 = numbers.findIndex((currentValue, index, arr) => {
    return currentValue > 6;
});

console.log(result1); //6

var result2 = numbers.findIndex((currentValue, index, arr) => {
    return currentValue > 20;
});

console.log(result2); //-1   If such value is not in the array. It will return -1.
