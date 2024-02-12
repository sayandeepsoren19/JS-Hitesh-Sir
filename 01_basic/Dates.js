//$$$$$$$$$$$  Current Date  $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

let myTime = new Date();
console.log(typeof myTime);
console.log(myTime);
console.log(myTime.toString());
console.log("--------------------------------------------------------");
console.log("--------------------------------------------------------");

//$$$$$$$$$$  Specific Date  $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

//>>>>>>>>>>  Using String  <<<<<<<<<    
//Month--> Jan = 1 || Dec = 12

//                    ("YYYY-(MM-DD)")
let myTime2 = new Date("2022-01-20"); //set time at- (05:30:00)
console.log(myTime2.toString());
console.log("-----------");

//                ("(MM-DD)-YYYY")
myTime2 = new Date("01-20-2022");
console.log(myTime2.toString());

//                ("Month DD,YYYY 00:00:00")
myTime2 = new Date("January 20,2022 21:30:45");
console.log(myTime2.toString());
console.log("--------------------------------------------------------");

//>>>>>>>>>  Without String  <<<<<<<<
//Month--> Jan = 0 || Dec = 11

myTime2 = new Date(1000);  //milli-seconds
console.log(myTime2.toString());
// new Date(milli-seconds) --> Counts From 1_Jan,1970>>>05:30:00

myTime2 = new Date(0);
console.log(myTime2.toString());

myTime2 = new Date(-1000);
console.log(myTime2.toString());
console.log("-----------");

myTime2 = new Date(2022,0); //year, month
console.log(myTime2.toString());

myTime2 = new Date(2022,0,31); //year, month, Day
console.log(myTime2.toString());

myTime2 = new Date(2022,0,31,21); //year, month, Day, Hour
console.log(myTime2.toString());

myTime2 = new Date(2022,0,31,21,30); //year, month, Day, Hour, Minutes
console.log(myTime2.toString());

myTime2 = new Date(2022,0,31,21,30,45); //year, month, Day, Hour, Minutes, Seconds
console.log(myTime2.toString());

myTime2 = new Date(2022,0,31,21,30,45,1000); //year, month, Day, Hour, Minutes, Seconds, Milli-seconds
console.log(myTime2.toString());
console.log("--------------------------------------------------------");
console.log("--------------------------------------------------------");

//$$$$$$$$$$$  Date Methods  $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//When a date object is created, a number of methods allow you to operate on it.

myTime = new Date();
console.log(myTime); //Hard to Understand
console.log(" ");
console.log(myTime.toString());      
console.log(myTime.toDateString());
console.log(" ");
console.log(myTime.toLocaleString());
console.log(myTime.toLocaleDateString());
console.log(" ");
console.log(myTime.toUTCString());
console.log(myTime.toISOString());
console.log("--------------------------------------------------------");
console.log("--------------------------------------------------------");

//$$$$$$$$$$$  Get Date Methods  $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

console.log(myTime.getFullYear());
console.log(myTime.getMonth()); //Jan = 0 || Dec = 11
console.log(myTime.getDate());
console.log(myTime.getDay());
console.log(" ");
console.log(myTime.getHours());
console.log(myTime.getMinutes());
console.log(myTime.getSeconds());
console.log(myTime.getMilliseconds());
console.log(" ");
console.log(myTime.getTime());//get time in milli-seconds from 1_Jan,1970
console.log("--------------------------------------------------------");
console.log("--------------------------------------------------------");

//$$$$$$$$$$$  Set Date Methods  $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//setMethod() --> Changes the actual Object.

myTime = new Date();
myTime.setFullYear(2020);
console.log(myTime.toString());

myTime = new Date();
myTime.setMonth(0);
console.log(myTime.toString());

myTime = new Date();
myTime.setDate(14);
console.log(myTime.toString());

myTime = new Date();
myTime.setHours(21);
console.log(myTime.toString());

myTime = new Date();
myTime.setMinutes(30);
console.log(myTime.toString());

myTime = new Date();
myTime.setSeconds(45);
console.log(myTime.toString());

myTime = new Date();
myTime.setMilliseconds(999);
console.log(myTime.toString());