//$$$$$$$$$$$$   COMPARISION b/w Diff. DATA TYPES   $$$$$$$$$$$$$$$$$

//String and Number
//------------------
console.log("2" == 2);//'string' is converted into --> Number
console.log("02" == 2);
console.log("22" == 2);
console.log("2a" == 2);
console.log(NaN == 2);
console.log("---------------------------");

//Boolean and Number
//------------------
console.log(true == 1);
console.log(true == 2);
console.log(false == 0);
console.log(false == 1);
console.log("---------------------------");

//Null and Number
//---------------
console.log(null == 0);
console.log(null >= 0);//equality(==) operator and comparision(>,<,<=,>=) operators work differently
console.log(null <= 0);//Comparision(>,<,<=,>=) operators, convert 'null' --> 0 
console.log(null <=  1);
console.log(null <= -1);
console.log("---------------------------");

//Undefined and Number
// //--------------------
console.log(undefined == 0);
console.log(undefined >= 0);
console.log(undefined <= 0);
console.log(undefined >= 1);
console.log(undefined <= -1);
console.log(undefined == undefined);
console.log(undefined == null);
console.log("-------------------------");
