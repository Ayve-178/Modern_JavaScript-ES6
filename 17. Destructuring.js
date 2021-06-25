//destructuring

//Object Destructuring

const user = {
    id: 123,
    name: 'Shakib',
    age: 32,
    education: {
        degree: "Masters",
    },
};

// We want t extract name from this object and assign it in another variable so that, we can use it anywhere we want.

//Older way
//var name = user['name'];
//console.log(name);          //Shakib

//Destructuring way

// const {name} = user;
// console.log(name);     //Shakib       //Here we got name in a variable named 'name'.

//But if we want it in different variable.
const {name:title} = user;
console.log(title);   //Shakib

//Now we want degree
const {education: {degree : x}} = user;
console.log(x);           //Masters

//But what if the nested object is missing?
// const {hometown: {city : y}} = user;
// console.log(y);             //error

//How to solve this type of usecase?? We can set default value.

const {hometown: {city : y} = {} } = user;
console.log(y);                     //undefined

/*--------------------------------------------------------------------------------------*/

//Array Destructuring

var numbers = [1, 2, 3, 4, 5, 6];

var [a, b] = numbers;        //a = 1, b = 2
console.log(a, b);           //1 2

//Now, suppose, we want to assign 2 in c and 6 in d.

var [, c, , , , d] = numbers;        //c=2, d = 6
console.log(c, d);                   //2 6

//For nested array.

var nums = [1, 2, [3, 100, 500], 4, 6];
var [, , [, p, q]] = nums;      //p=100, q = 500
console.log(p,q);            //100 500

/*--------------------------------------------------------------------------------*/

//Value Swapping using destructuring.

var m = 2, n = 5;

//older way
// var temp = m;
// m = n;
// n = temp;
// console.log(m, n);           //5 2

//destructuring way
[n, m] = [m, n];
console.log(m, n);             //5 2
