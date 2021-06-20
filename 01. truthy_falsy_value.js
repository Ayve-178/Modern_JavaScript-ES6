//truthy falsy

//Truthy or Falsy value is actually a value which will be cast in boolean when we will evaluate it in a boolean context.

//Example : 
// var myVar = true;

// if(myVar) {             //if(myVar === true)
//     console.log("I am truthy");
// } else {
//     console.log("I am falsy");
// }

//Output
//I am truthy

// --------------------------------

// var myVar = "";

// if(myVar) {             //if(myVar === true)
//     console.log("I am truthy");
// } else {
//     console.log("I am falsy");
// }

//Output
//I am falsy

//  -----------------------------------

var myVar = "test";

if(myVar) {             //if(myVar === true)
    console.log("I am truthy");
} else {
    console.log("I am falsy");
}

//Output
//I am truthy

//6 conditions
//false, zero, blank, null, undefined or not a number will return falsy.

