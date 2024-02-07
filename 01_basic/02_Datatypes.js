"use strict"; // This statement tells that below 'JS Codes' are in 'current-version'
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
//alert(3+3);
//Above statement works in browser 
//But doesn't work in Node Js
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
//           DATA TYPES IN JS
//           ----------------
//                2.BigInt
//                1.Number
//                3.string
//                4.Boolean
//                5.Undefined
//                6.Null
//                7.Object
//                8.Function
//                9.Symbol
// -----------------------------------------
let n1 = 45; //Number
let n2 = 45.654;//Number
// -----------------------------------------
let nn = BigInt(5321458963258741);//BigInt
// -----------------------------------------
let s1 = 'a';//string
let s2 = "a";//string
let s3 = 'Sayandeep';//string
let s4 = "Sayandeep";//string
// -----------------------------------------
let b1 = true;//boolean
let b2 = false;//boolean
// -----------------------------------------
let u1;//undefined
// At the time of declaration, variable is automatically assigned value-'undefined'.
//let u2 = undefined; //WE DO NOT DELIBERATELY ASSIGN value-'undefined' in variable. Although We Can.
// -----------------------------------------
let nu = null;//null
// We DELIBERATELY ASSIGN value-'null' to indicate empty value.
// --------------------------------------------------------------------------------------------------------------------------
//@@@@@@ - means OUTPUT ON SCREEN
console.table([n1,n2,nn,s1,s2,s3,s4,b1,b2,u1,nu]);//@@@@@@@@@
console.table([typeof n1,typeof n2,typeof nn,typeof s1,
    typeof s2,typeof s3,typeof s4,typeof b1,typeof b2,typeof u1,typeof nu]);//@@@@@@

// ----------------------------------------------------------------------------------------------------------------------------
//Array
const myArr =[5,6,7];   //object
console.table([typeof myArr,myArr]);//@@@@@@
// ----------------------------------------
//Object
const myObj = {         //object
    property1: 5,
    property2: 6,
    property3: 7
}
console.table([typeof myObj,myObj]);//@@@@@@
// ----------------------------------------
//Function
function myFun(){      //function
    let result = 5;
    return result;
}
console.table([typeof myFun,myFun()]);//@@@@@@
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&