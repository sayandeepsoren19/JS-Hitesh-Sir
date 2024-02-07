// $$$$$$$$$$$$$$$$$$$$    WAYS TO DECLARE VARIABLE   $$$$$$$$$$$$$$$$$$$$$$$
const a = 1;
let b = 2;
var c = 3;
d = 4;
console.table([a,b,c,d]);
console.table([typeof a,typeof b,typeof c,typeof d]);

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$  SCOPE   $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
console.log("---------------------------------");
//'let' use block scope
let x = 5;
console.log(x);
{
    let x = 50;
    console.log(x);
}
console.log(x);
console.log("---------------------------------");
//'const' also use block scope
let y = 6;
console.log(y);
{
    let y = 60;
    console.log(y);
}
console.log(y);
console.log("---------------------------------");
//BUT BUT BUUUUT , 'var' doesn't use block scope
var z = 7;
console.log(z);
{
    var z = 70;
    console.log(z);
}
console.log(z);
console.log("---------------------------------");

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$    HOISTING     $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
yo = 5;
yoo = 6;
console.log(yo+yoo);

var yo; //here, 'var' is supporting HOISTING
var yoo;//here, 'var' is supporting HOISTING

// let yo;//HOISTING with 'let' --> Not Supported
// let yoo;//HOISTING with 'let' --> Not Supported





