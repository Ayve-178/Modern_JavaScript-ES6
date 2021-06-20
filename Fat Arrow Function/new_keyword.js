//new keyword in fat arrow function

//In vanilla JS every function itself is a constructor function.
function Person(name) {
    this.name = name;
}

//It creates a new person.
var sakib = new Person('Sakib');

//But if we convert it into an arrow function.

// var Person = (name) => {
//     this.name = name;
// }

// var sakib = new Person('Sakib');

//This will give us an error. Because here Person is not a constructor. 
//[Arrow function is not a constructor function. Arrow function is an anonymous function. 
//Thats why it doesn't work for some built-in functions in JS such as, new, this etc..] 
