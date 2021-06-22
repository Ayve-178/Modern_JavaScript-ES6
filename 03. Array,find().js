//Array.prototype.find()
// var numbers = [1, 2, 3, 4, 5, 6, 10];

// var result = numbers.find(function(currentValue) {
//     return currentValue > 4;
// });

// console.log(result);       //5

//Array.find() doesn't change the main array!
//Here inside the function we basically get three values. And as a second parameter it take 'this'.
//numbers.find(function(currentValue, currentIndex, mainArray){...}, this);

class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    test() {
        console.log("Hello");
    }
    // exampleFunction() {
    //     let array = [1, 2, 3];
    //     array.find(function() {
    //         this.test();           //'this' in this line is not the this we write inside the constructor.
    //     }, this);                 //Here we explicitely send the 'this' of previous line. If we don't send 'this' here, 'this' of previous line will become window and will give an error.
    // }

    exampleFunction() {
        let array = [1, 2, 3];
        array.find(() => {
            this.test();           
        });                 //But if we convert it into an arrow function, it won't give any error.
    }
}

let student = new Student("Ayve", 12);

student.exampleFunction();
