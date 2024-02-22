const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let modifiedNumbers = [];

// modifiedNumbers = myNumbers.map( (num) => {return num + 10} )
// console.log(modifiedNumbers)
//--------------------------------------------------------------
//      Using forEach( )

// myNumbers.forEach( (item) => {
//     modifiedNumbers.push(item + 10)
// } )
// console.log(modifiedNumbers)
//--------------------------------------------------------------
//      Chaining

modifiedNumbers = myNumbers.map((item) => item * 10).map((item) => item + 1).filter( (item) => item>=50 );
console.log(modifiedNumbers);
