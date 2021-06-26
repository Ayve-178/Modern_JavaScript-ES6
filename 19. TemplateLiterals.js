// template literals
//When we write something inside backtick(`), that means writing something using literal.

var a = 5, b = 6;

//Older way
//console.log('I am ' + a + ' and I am ' + b);    // I am 5 and I am 6

//template literal
console.log(`I am ${a} and I am ${b}`);           // I am 5 and I am 6
//${..} -> interpolation

console.log(`Sum = ${a + b}`);                // Sum = 11

//template literal supports multiline text and proper indentation.
console.log(`Hello there!
            I am Ayve`);

//Output
// Hello there!
//          I am Ayve
