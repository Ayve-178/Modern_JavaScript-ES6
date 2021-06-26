// tagged template literals

var player1 = 'Shakib';
var player2 = 'Tamim';

//console.log(`We have ${player1} and ${player2} in our cricket team.`);

//Suppose we have 11 playernames and we want Mr. before every playername.

function modifier(strings, ...values) {
    //console.log(strings);                   // [ 'We have ', ' and ', ' in our cricket team.' ]
    //console.log(values);                    // [ 'Shakib', 'Tamim' ]

    const m = strings.reduce((prev, current) => {
        return prev + current + (values.length ? "Mr." + values.shift() : "")
    }, "");
    return m;
}

console.log(modifier`We have ${player1} and ${player2} in our cricket team.`); // We have Mr.Shakib and Mr.Tamim in our cricket team.

//This is known as tagged template literal and here modifier function will be called for every interpolation.
