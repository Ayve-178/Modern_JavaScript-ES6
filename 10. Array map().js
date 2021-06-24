//Array.prototype.map()

var numbers = [1, 2, 3, 4, 5, 6];
//map actually maps every elements of the array. It can change the elements of the array and returns a similar array. 

var result = numbers.map((num) => {
    return 2 * num;
});

console.log(result);  // [ 2, 4, 6, 8, 10, 12 ]
console.log(numbers);   // [ 1, 2, 3, 4, 5, 6 ]

//It doesn't change the main array.
