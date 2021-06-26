// imports/exports

// import { a, pi } from './external.js'; //named import

// console.log(pi, a);           //3.14 2.9

//If we want to import all the things.
// import * as test from './external.js';            //named import
// //* as test is known as alias.
// console.log(test);                // [Module: null prototype] { a: 2.9, pi: 3.14 }
// console.log(test.a);            //2.9

// import { a as varA, pi as varPi } from './external.js'; //named import
// console.log(varA, varPi);           //2.9 3.14 

//Default import and export
// import external from './external.js';
// console.log(external);             //2.9

//But if we want  pi also! 

// import external, { pi } from './external.js';
// console.log(external,pi);             //2.9 3.14

// import external, { myFunc, pi } from './external.js';
// console.log(external,pi);             //2.9 3.14

// myFunc();               // I am myFunc()

//Now we want to import the function by default

import external, { pi } from './external.js';
console.log(pi);             //3.14

external();      //I am myFunc()



