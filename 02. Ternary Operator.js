//ternary operator

var age = 18;

// var type;

// if(age>=18) {
//     console.log('adult');
// } else {
//     console.log('child');
// }

//We can write it in a line.
var type = (age>=18) ? console.log('adult') : console.log('child');

var type1 = (age>=18) ? "adult" 
                        : (age<10)
                            ? "child" 
                            : "young";


var isLoggedIn = true;

//We want that if isLoggedIn is true then the access will be true, false otherwise.

//var access = isLoggedIn ? true : false;
//shorter form
var access = isLoggedIn;

console.log(access);

//if a>=5 then acc will be true. False otherwise.

var a = 5;

var acc = a>=5;

console.log(acc);

