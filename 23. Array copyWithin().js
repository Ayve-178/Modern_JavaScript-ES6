// Array copyWithin()
//copyWithin(target, start, end)
//It will copy elements between start and end, and paste them in the target position.

var arr = ['JavaScript', 'PHP', 'Python', 'Ruby', 'C++', 'RUST'];
console.log(arr);            // [ 'JavaScript', 'PHP', 'Python', 'Ruby', 'C++', 'RUST' ]

arr.copyWithin(3, 1, 2);
console.log(arr);            // [ 'JavaScript', 'PHP', 'Python', 'PHP', 'C++', 'RUST' ]

//------------------------------------------------------------------------------------------------------------

//Positions can be negative too.
arr = ['JavaScript', 'PHP', 'Python', 'Ruby', 'C++', 'RUST'];
console.log(arr);            // [ 'JavaScript', 'PHP', 'Python', 'Ruby', 'C++', 'RUST' ]

arr.copyWithin(-3, -5, -4);
console.log(arr);            // [ 'JavaScript', 'PHP', 'Python', 'PHP', 'C++', 'RUST' ]

/*--------------------------------------------------------------------------*/

//Characterstics
//target is required. start and end are optional.
//start defaults to 0.
//end defaults to array.length
//never changed array.length
//overwrites original array
//returns modified array

/*--------------------------------------------------------------------------*/

arr = ['JavaScript', 'PHP', 'Python', 'Ruby', 'C++', 'RUST'];
console.log(arr);            // [ 'JavaScript', 'PHP', 'Python', 'Ruby', 'C++', 'RUST' ]

arr.copyWithin(3, 2);
console.log(arr);            // [ 'JavaScript', 'PHP', 'Python', 'Python', 'Ruby', 'C++' ]

//If target>start, -> array elements will be cut off.

//------------------------------------------------------------------------------------------------------------

arr = ['JavaScript', 'PHP', 'Python', 'Ruby', 'C++', 'RUST'];
console.log(arr);            // [ 'JavaScript', 'PHP', 'Python', 'Ruby', 'C++', 'RUST' ]

arr.copyWithin(6, 1, 2);
console.log(arr);           // [ 'JavaScript', 'PHP', 'Python', 'Ruby', 'C++', 'RUST' ]

//If target>=array length, -> array won't change.

//------------------------------------------------------------------------------------------------------------


arr = ['JavaScript', 'PHP', 'Python', 'Ruby', 'C++', 'RUST'];
console.log(arr);            // [ 'JavaScript', 'PHP', 'Python', 'Ruby', 'C++', 'RUST' ]

arr.copyWithin(3);
console.log(arr);             // [ 'JavaScript', 'PHP', 'Python', 'JavaScript', 'PHP', 'Python' ]

//------------------------------------------------------------------------------------------------------------

arr = ['JavaScript', 'PHP', 'Python', 'Ruby', 'C++', 'RUST'];
console.log(arr);            // [ 'JavaScript', 'PHP', 'Python', 'Ruby', 'C++', 'RUST' ]

arr.copyWithin(3);
console.log(arr);             // [ 'JavaScript', 'PHP', 'Python', 'JavaScript', 'PHP', 'Python' ]

//------------------------------------------------------------------------------------------------------------

arr = ['JavaScript', 'PHP', 'Python', 'Ruby', 'C++', 'RUST'];
console.log(arr);            // [ 'JavaScript', 'PHP', 'Python', 'Ruby', 'C++', 'RUST' ]

arr.copyWithin(-3, -1, -2);
console.log(arr);             // [ 'JavaScript', 'PHP', 'Python', 'Ruby', 'C++', 'RUST' ]

//start must be less than end. Otherwise the array will be unchaged.

//------------------------------------------------------------------------------------------------------------

arr = ['JavaScript', 'PHP', 'Python', 'Ruby', 'C++', 'RUST'];
console.log(arr);            // [ 'JavaScript', 'PHP', 'Python', 'Ruby', 'C++', 'RUST' ]

arr.copyWithin(-3, -2, -1);
console.log(arr);             // [ 'JavaScript', 'PHP', 'Python', 'C++', 'C++', 'RUST' ]

//------------------------------------------------------------------------------------------------------------

