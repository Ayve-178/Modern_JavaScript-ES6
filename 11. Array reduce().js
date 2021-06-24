//Array.prototype.reduce()

var numbers = [1, 2, 3, 4, 5, 6];

var sum = numbers.reduce((prevValue, currentValue) => {
    return prevValue + currentValue;
}, 0);    //Here 0 is the initial value. i.e., prevValue for the first element(1);

console.log(sum);  // 21
console.log(numbers);   // [ 1, 2, 3, 4, 5, 6 ]

//Array.reduce() takes two more elements. 
//Array.reduce((prevValue, currentValue, currentIndex, arr) => {...}, initialValue);

//It doesn't change the main array.
