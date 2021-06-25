//rest operator

//When we will use '...' inside function parameters then, that will be called rest operator.

// function myFunc(a, b) {
//     console.log(a, b);
// }

// myFunc(5, 6);          // 5 6

//But when we don't know how many parameters user will send to the function. To get all the parameters we have to use rest operator.

//Before rest operator.

// function myFunc() {
//     console.log(arguments);
// }

// myFunc(5, 6, 7, 8, 9);          // [Arguments] { '0': 5, '1': 6, '2': 7, '3': 8, '4': 9 }
//We got an object.

//Using rest operators

// function myFunc(...params) {
//     console.log(params);
// }

// myFunc(5, 6, 7, 8, 9);              // [ 5, 6, 7, 8, 9 ]
//Here we got an array.  


function myFunc(a, ...params) {
    console.log(a);
    console.log(params);
}

myFunc(4, 5, 6, 7, 8, 9);              // 4
                                       //[ 5, 6, 7, 8, 9 ]

//Here inside 'a' we will get 4. And in params we will get an array.
//And rest parameter must be last formal parameters.
// function myFunc(...params, a) {...} -> this will give an error.
//And parameters collection using rest operation, we can do it only once! We can't write two rest operators for a single function.
