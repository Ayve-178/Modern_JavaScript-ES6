//function default parameter value

// function myFunc(x) {
//     return x;
// }

// console.log(myFunc(3));         //3
// console.log(myFunc());          //undefined

//But we want if we don't send any parameter it will show a default value.

function myFunc(x = 10) {
    return x;
}

console.log(myFunc(3));         //3
console.log(myFunc());          //10
console.log(myFunc(undefined)); //10
console.log(myFunc(null));      //null

