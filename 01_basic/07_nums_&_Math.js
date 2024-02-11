// const score = 400;
// console.log(score);
// console.log(typeof score);
// console.log("-------------------------------------");

// //              

// const balance = new Number(100);
// console.log(balance);
// console.log(typeof balance);
// console.log("-------------------------------------");

// //              toString()

// console.log(balance.toString());
// console.log(balance.toString().length);
// console.log("-------------------------------------");

// //              toFixed()

// console.log(balance.toFixed(2));
// console.log(balance.toFixed(6));
// console.log("-------------------------------------");

// //              toPrecision()
// //returns a string, with a number written with a specified length:

// const otherNumber = 123.8966;
// // console.log(otherNumber.toPrecision(0));  //ERROR !!!!
// console.log(otherNumber.toPrecision(1));
// console.log(otherNumber.toPrecision(2));
// console.log(otherNumber.toPrecision(3));
// console.log(otherNumber.toPrecision(4));
// console.log(otherNumber.toPrecision(5));
// console.log(otherNumber.toPrecision(6));
// console.log(otherNumber.toPrecision(7));
// console.log(otherNumber.toPrecision(8));
// console.log("-------------------------------------");

// const hundreds = 1000000;
// console.log(hundreds.toLocaleString());
// console.log(hundreds.toLocaleString("en-IN")); //Indian Standard
// console.log(hundreds.toLocaleString("en-US")); //American Standard
// console.log(hundreds.toLocaleString('en-US'));
// console.log("-------------------------------------");

// //              Range of Numbers

// console.log(Number);
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MIN_SAFE_INTEGER);
// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);
// console.log("-------------------------------------");


// $$$$$$$$$$$$$$$$$$  MATHS   $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

console.log(Math);
console.log("-------------------------------------");

//              1. Math.pow( , )
//              2. Math.sqrt( , )

console.log(Math.pow(5,2));
console.log(Math.sqrt(49));
console.log("-------------------------------------");

//1. Math.min(x, y, z)
//2. Math.max(x, y, z)

console.log(Math.min(5,8,3));
console.log(Math.max(5,8,3));
console.log("-------------------------------------");

//              Math.abs(number)    --> returns the absolute value

console.log(Math.abs(4));
console.log(Math.abs(-4));
console.log("-------------------------------------");

//              Math.round(number)  --> returns the round figure of a number

console.log(Math.round(3.4));
console.log(Math.round(3.5));
console.log(Math.round(3.6));
console.log("-------------------------------------");

//           1. Math.ceil(number)   --> returns the nearest greater integer
//           2. Math.floor(number)  --> returns the nearest smaller integer

console.log(Math.ceil(3.1));
console.log(Math.floor(3.9));
console.log("-------------------------------------");

//              Math.random()

console.log(Math.random());  //Generates number between 0 and 1
console.log((Math.random()*10) + 1);
console.log(Math.floor( (Math.random()*10) + 1 ));
const min = 10;
const max = 30;
console.log( Math.floor(Math.random() * (max - min + 1)) + min ); //$$$ Remember this formula
console.log("-------------------------------------");