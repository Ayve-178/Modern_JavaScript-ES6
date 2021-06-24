//for loop, for in, for of

// for(let i=0;i<=5;i++) {
//     console.log(i);
// }

//var is function scope, which works even outside the function. But let is block function. I doesn't work outside the block.

//for in
//for in basically iterate through an object.

// const myObj = {
//     name: 'JavaScript',
//     estd: '1995',
//     founder: 'Brendon Eich'
// };

// for(property in myObj) {
//     console.log(property);
// }

// Output:
// name
// estd
// founder

//for of
//for of works for every iterable objects in JS like array, string etc.

const myArray = [1, 2, 3, 4, 5];
for(element of myArray) {
    console.log(element);
}

const myString = 'I love JavaScript';
for(element of myString) {
    console.log(element);
}
//for 'for in' we get indeces and for 'for of' we get values.


