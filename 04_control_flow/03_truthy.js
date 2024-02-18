// const userName = "Sayandeep";
// const userName = "";
// const userName = undefined;
// const userName = [];

// if(userName){
//     console.log("Got the user name.");
// }else{
//     console.log("Don't have the user name");
// }
//--------------------------------------------

//Falsy Values -->
// false, 0, -0, BigInt --> 0n, "", null, undefined, NaN

//Except all these Falsy Values
//Everything is Truthy Values

//Truthy Values -->
//"0", "false", " ", [], {}, function(){}
//--------------------------------------------

const emptyArray = [];
// const emptyArray = [4, "hello", false];
// if(emptyArray.length === 0){
//     console.log("Array is empty");
// }else{
//     console.log("Array length is NOT empty");
// }
//--------------------------------------------

// const emptyObj = {};
// // const emptyObj = {a: 1};

// if(Object.keys(emptyObj).length === 0){
//     console.log("Object is empty");
// }else{
//     console.log("Object is not empty");
// }
//--------------------------------------------

// if(0 == "") console.log("1"); 
// if(false == "") console.log("2"); 
// if(false == 0) console.log("3"); 
//--------------------------------------------

//      nullish coalescing operator (??)
//      works for --> null & undefined

let x;
// x = 5 ?? 10;
// x = null ?? 25;
// x = undefined ?? 50;
// x = null ?? 12 ?? 24;
// x = null ?? undefined ?? 24;

// console.log(x);
//--------------------------------------------

//      Ternary Operator

// (condition) ? true_statement : false_statement;

// 5>6 ? console.log("true ha") : console.log("false ha");