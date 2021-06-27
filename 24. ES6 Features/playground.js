//ES11 new features

//window.setTimeout(() => console.log('Hello'), 100); //Runs in browser. Gives error in node js. 
//global.setTimeout(() => console.log('Hello'), 100); //Runs in node js. Gives error in browser.

//In ES6
globalThis.setTimeout(() => console.log('Hello'), 100);

//window === globalThis // true in browser
//global === globalThis  // true in node js

//------------------------------------------------------------------------------------------------------

//BigInt

let largestNumber = Number.MAX_SAFE_INTEGER;
console.log(largestNumber);                // 9007199254740991

largestNumber += 1;
console.log(largestNumber);                // 9007199254740992

largestNumber += 1;
console.log(largestNumber);               // 9007199254740992 (won't increase) This is the max limit of JS number.

//So, for this in ES11, there is a new type named 'Big Integer'.

largestNumber = BigInt(largestNumber) + 1n;   //1n means -> we have converted int 1 to big int 1.
console.log(largestNumber);                   // 9007199254740993n

//Equality
//10n === BigInt(10)      // true
//10n == 10           // true
//10n === 10          // false

//---------------------------------------------------------------------------------------------

//Optional Chaining

const language = {
    name: 'JavaScript',
    founder: 'Brendon Eich',
    library: {
        React: {
            company: 'Facebook'
        }
    }
};

//let company = language.library.React.company;
//console.log(company);               // Facebook

//But here if any of these property is absent, the program will crash. So, this is not the right way.
//We have to check every property, if is this present in the object or not.

//let company = language && language.library && language.library.React && language.library.React.company;  //This is the right way. But it becomes a very complicated statement.
//console.log(company);       // Facebook

//We can do the same thing in ES11 like the following.

let company = language?.library?.React?.company;
console.log(company);            // Facebook

//Arrays

let colors = ['Black', 'Red', 'Green', 'Blue'];
console.log(colors?.[1]);        // Red
//If the element is absent in the array, It won't give us any error.
colors = null;
console.log(colors?.[1]);      // undefined

//-----------------------------------------------------------------------------------------------------

//Nullish Coalescing Operator (??)
let lang;
lang = null;
console.log(lang ?? 'JavaScript');          //JavaScript
//If the left side of ?? is null or undefined, It will return the right side element.
console.log(lang || 'JavaScript');          //JavaScript
//It does exactly the same.
//If the left side of || is falsy value, It will return the right side element.
//But there are some difference between these two.

lang = NaN;

console.log(lang ?? 'JavaScript');          //NaN
console.log(lang || 'JavaScript');          //JavaScript

lang = 0;

console.log(lang ?? 'JavaScript');          //0
console.log(lang || 'JavaScript');          //JavaScript

//console.log(name.firstname || name.lastname ?? 'Anonymous');   //error   --> example

//console.log((name.firstName || name.lastName) ?? 'Anonymous');  //Anonymous     --> example

//----------------------------------------------------------------------------------------------------------

//Dynamic Import
(async function(){
    const {add} = await import('./utils.js');
    const {remove} = await import('./utils.js');
    add();
    remove();
})();

//This import function returns a promise. That's why we can wait till it resolves, using await. And after resolving we can get it like this named way.
//---------------------------------------------------------------------------------------------------------

//promise.allSettled()

//-----------------------------------------------------------------------------------------------------------

//String.prototype.matchAll()




