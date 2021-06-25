//spread operator

var numbers = [1, 2, 3];

//var newNumbers = [numbers[0], numbers[1], numbers[2], 4, 5, 6];
//But using spread operator we can do it easily like the following:

var newNumbers = [...numbers, 4, 5, 6];

console.log(newNumbers);         // [ 1, 2, 3, 4, 5, 6 ]


var a = numbers;   //When we write this, inside 'a' a reference of 'numbers' is sent. So when we will change numbers, 'a' will automatically change. This is called a mutable way.

numbers.push(4);
console.log(a);                  //[ 1, 2, 3, 4 ]

//But now we want to copy the array in an immutable way so that the copied array can be independent.

var b = [...numbers];         //exact copy of numbers and 'b' is an independent array.

numbers.push(5);

console.log(numbers);             // [ 1, 2, 3, 4, 5 ]
console.log(b);                   // [ 1, 2, 3, 4 ]

//using spread operator we can concat arrays.
var nums1 = [10, 20, 30];
var nums2 = [40, 50, 60];

var nums = [...nums1, ...nums2];
console.log(nums);                // [ 10, 20, 30, 40, 50, 60 ]

//Object spreading
var myObj1 = {
    x: 1,
    y: 2
};

var myObj2 = {
    a: 1,
    b: 2
};

console.log({
    ...myObj1,
    ...myObj2
});                         // { x: 1, y: 2, a: 1, b: 2 }
