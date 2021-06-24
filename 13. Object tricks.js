//important object methods

var myObj = {
    name: 'JavaScript',
    estd: '1995',
    founder: 'Brendon Eich',
    ranking: 1,
};

var keys = Object.keys(myObj);
var values = Object.values(myObj);
var entries = Object.entries(myObj);

console.log(keys);             // [ 'name', 'estd', 'founder', 'ranking' ]
console.log(values);           // [ 'JavaScript', '1995', 'Brendon Eich', 1 ]
console.log(entries);          // [
                                    //     [ 'name', 'JavaScript' ],
                                    //     [ 'estd', '1995' ],
                                    //     [ 'founder', 'Brendon Eich' ],
                                    //     [ 'ranking', 1 ]
                                // ]

//Object Shorthand

var x = 4;
var y = 5;
var z = x*y;

var myObj1 = {
    name: 'Ayve',
    id: '170212',
    occupation: 'student',
    x,
    y,
    z
};

var keys1 = Object.keys(myObj1);            
var values1 = Object.values(myObj1);        
var entries1 = Object.entries(myObj1);   

console.log(keys1);                       // [ 'name', 'id', 'occupation', 'x', 'y', 'z' ]      
console.log(values1);                     // [ 'Ayve', '170212', 'student', 4, 5, 20 ]
console.log(entries1);                    // [
                                            //     [ 'name', 'Ayve' ],
                                            //     [ 'id', '170212' ],
                                            //     [ 'occupation', 'student' ],
                                            //     [ 'x', 4 ],
                                            //     [ 'y', 5 ],
                                            //     [ 'z', 20 ]
                                            // ]


