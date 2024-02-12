const myDate = new Date();

console.log(typeof myDate);
console.log(myDate); //Hard-to-understand

console.log(myDate.toString());//(day+date) + (time+time_zone)
console.log(myDate.toLocaleString()); //date + time
console.log(myDate.toDateString()); //(day+date)
console.log(myDate.toLocaleDateString()); //date

console.log(myDate.toISOString()); //Hard-to-understand
console.log(myDate.toJSON());      //Hard-to-understand
console.log("-------------------------------------");

const myCreatedDate = new Date(2019,0,25);
console.log(myCreatedDate.toString());

const myCreatedDate2 = new Date(2019,0,26,22,35);
console.log(myCreatedDate2.toString());

const myCreatedDate3 = new Date("2019-01-27"); //YYYY-(MM-DD)
console.log(myCreatedDate3.toString());              //first month
                                                     //then day
let myCreatedDate4 = new Date("01-28-2019"); //(MM-DD)-YYYY
console.log(myCreatedDate4.toString());

myCreatedDate4 = new Date("01-29-2019"); //Reassignment of new date in 'let' variable --> 'myCreatedDate4'
console.log(myCreatedDate4.toString());
console.log("--------------------------------------");

let myTimeStamp = Date.now(); //returns mili-seconds from 1/Jan/1970 to till now

let a = new Date("2024-02-11");
let b = new Date("2024-02-10");

console.log(myTimeStamp); //this is the most
console.log(a.getTime()); //this is little less than the above
console.log(b.getTime()); ////this is ALSO little less than the above

console.log(Math.floor( Date.now()/1000 ));
console.log("--------------------------------------");

let newDate = new Date();
console.log(newDate.getDate());
console.log(newDate.getDay()); // SUNDAY = 0, SATURDAY = 6
console.log(newDate.getMonth()+1); //JAN = 0, DEC = 11
console.log(newDate.getFullYear());

