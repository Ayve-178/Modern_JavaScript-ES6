function log(anything) {
    return console.log(anything);
}

// sets -> reference datatype
// sets are similar to arrays but not arrays. sets actually is used to store unique data.

//let myArray = []; //literal syntax
//let myArray = new Array(); //constructor syntax

//But for set we can't use literal syntax.
let mySet = new Set();
// mySet.add(5);
// mySet.add('Bangladesh');
// mySet.delete('Bangladesh');
// log(mySet.has('Bangladesh'));    //false

//We can do method chaining using set methods.
mySet.add(5).add(6).add('Bangladesh').delete(5);

log(mySet);            // Set(2) { 6, 'Bangladesh' }

log(mySet.size);         //2

mySet.clear();
log(mySet);              // Set(0) {}

/*------------------------------------------------------------*/

//set from array
let myArr = [1, 2, 3, 4, 5];
//we want to convert this array to set.
let myNewSet = new Set(myArr);
log(myNewSet);               // Set(5) { 1, 2, 3, 4, 5 }

let newSet = new Set('Bangladesh');           // Set(9) { 'B', 'a', 'n', 'g', 'l', 'd', 'e', 's', 'h' }
log(newSet);

//We can pass any iterable in set.
//We can't pass any object. Because object is not iterable.
//Sets are iterable. So we can iterate sets.

for(let value of newSet) {
    log(value);
}

//Array from Set
//log([...myNewSet]);     // [ 1, 2, 3, 4, 5 ]
//myNewSet was a set.
//Another way
log(Array.from(myNewSet));       // [ 1, 2, 3, 4, 5 ]

//Set usage
//To store unique elements

log(myNewSet);         // Set(5) { 1, 2, 3, 4, 5 }
myNewSet.add(4);
log(myNewSet);         // Set(5) { 1, 2, 3, 4, 5 }

// myNewSet.add({
//     a: 5,
//     b: 2
// });
// myNewSet.add({
//     a: 5,
//     b: 2
// });

log(myNewSet);       //Set(7) { 1, 2, 3, 4, 5, { a: 5, b: 2 }, { a: 5, b: 2 } }

//Object is reference type. And to JS this two objects are not same. Because their references are different.

let object = {
    a: 5,
    b: 2
}

myNewSet.add(object);
myNewSet.add(object);

log(myNewSet);             // Set(6) { 1, 2, 3, 4, 5, { a: 5, b: 2 } }

let newArr = [1, 2, 3, 4, 5, 5, 5, 6, 5];

log([...new Set(newArr)]);       // [ 1, 2, 3, 4, 5, 6 ]
//returns all the unique elements.

//Union of two sets

let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 2]);

let union = new Set([...a, ...b]);
log(union);              // Set(4) { 1, 2, 3, 4 }

let intersection = new Set([...a].filter(x => b.has(x)));
log(intersection);           // Set(2) { 2, 3 }

let difference = new Set([...a].filter(x => !b.has(x)));
log(difference);            // Set(1) { 1 }
