//ES6 fat arrow function

// function number() {
//     return 10;
// }

// function print() {
//     console.log(5);
// }

//arrow function
// let number = () => {
//     return 10;
// } 


//If the function has only one statement and it returns something.
let number = () => 10;           //This is the simplest form of an arrow function

//If the function has only one statement
let print = () => console.log(5);


// function num(n) {
//     return n;
// }

//let num = (n) => n;

//If there is only one parameter we can avoid the bracets.
let num = n => n;

let sum = (a,b) => a + b;

num(10);

sum(10, 15);

//The main reason of coming fat arrow function is to make 'this' keyword easier for the programmers.

//A normal javaScript object
// var javaScript = {
//     name: 'javaScript',
//     libraries: ['React', 'Angular', 'Vue'],
//     printLibraries: function() {
//         this.libraries.forEach(function(a) {
//             console.log(`${this.name} loves ${a}`);
//         })
//     }
// };

// javaScript.printLibraries();

//Output: 
// undefined loves React
// undefined loves Angular
// undefined loves Vue  
//Because the forEach is actually changing the outer this to something else. That is creating a confusion and we are getting undefined. Here the arrow function comes into the playground!

//Before the arrival of the arrow function
// var javaScript = {
//     name: 'javaScript',
//     libraries: ['React', 'Angular', 'Vue'],
//     printLibraries: function() {
//         var self = this;
//         this.libraries.forEach(function(a) {
//             console.log(`${self.name} loves ${a}`);
//         })
//     }
// };

// javaScript.printLibraries();

//Output
// javaScript loves React
// javaScript loves Angular
// javaScript loves Vue


var javaScript = {
    name: 'javaScript',
    libraries: ['React', 'Angular', 'Vue'],
    printLibraries: function() {
        this.libraries.forEach((a) => console.log(`${this.name} loves ${a}`))
    },
};

javaScript.printLibraries();

//Output
// javaScript loves React
// javaScript loves Angular
// javaScript loves Vue

//This works. Because arrow function is not concerned about this.
