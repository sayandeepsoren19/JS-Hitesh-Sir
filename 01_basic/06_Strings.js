//String Concatenation
let LASTNAME = "Soren"; //Here, 'LASTNAME' is string.
console.log("Sayandeep\n" +
LASTNAME);
console.log("----------------------------------------------------------------------");

//back-tics ``
//String Interpolation :::
// great programming language feature that allows
// injecting variables, function calls, and arithmetic expressions directly into a string

let lastName = new String("Soren"); //Here, 'lastName' is object.
console.log(`Sayandeep
${lastName}`);
//Use string interpolation over string concatenation.
console.log("----------------------------------------------------------------------");

//Comparing string and object
console.log(typeof LASTNAME);
console.log(typeof lastName);
console.log(LASTNAME == lastName);
console.log(LASTNAME === lastName);
console.log("--------------");

//Comparing two objects always returns false.((It's confusing to use !!!))
let last_Name = new String('Soren'); //Here, 'last_Name' is object.
console.log(typeof lastName);
console.log(typeof last_Name);
console.log(last_Name == lastName);
console.log(last_Name === lastName);
console.log("----------------------------------------------------------------------");

//String Length
console.log(lastName.length);
console.log("----------------------------------------------------------------------");
//               ***Extracting String Charecters
//                  1.Property Access[Index_no]
//                  2.charAt(Index_no)
//                  3.charCodeAt(Index_no)


//              1.Property Access[] Method -- >  get charecter

//object
console.log(lastName[0]); //S
console.log(lastName[1]); //o
console.log(lastName[2]); //r
console.log(lastName[3]); //e
console.log(lastName[4]); //n
lastName[4] = 'y'; //It doesn't work || It doesn't give any error ||
//Because string is Read-Only
console.log(lastName[4]); //n
console.log(lastName[5]); // ????????

//string
console.log(LASTNAME[0]);
console.log(LASTNAME[1]);
console.log(LASTNAME[2]);
console.log(LASTNAME[3]);
console.log(LASTNAME[4]);
lastName[4] = 'y'; //It doesn't work || It doesn't give any error ||
//Because string is Read-Only
console.log(LASTNAME[4]);
console.log(LASTNAME[5]); // ?????????
console.log("----------------");

//              2.charAt(Index_no)

console.log(lastName.charAt(0));
console.log(lastName.charAt(1));
console.log(lastName.charAt(2));
console.log(lastName.charAt(3));
console.log(lastName.charAt(4));
console.log(lastName.charAt(5)); // ??????????

console.log(LASTNAME.charAt(0));
console.log(LASTNAME.charAt(1));
console.log(LASTNAME.charAt(2));
console.log(LASTNAME.charAt(3));
console.log(LASTNAME.charAt(4));
console.log(LASTNAME.charAt(5)); // ?????????
console.log("-------------------");

//              3.charCodeAt(Index_no)

console.log(LASTNAME.charCodeAt(0));
console.log("----------------------------------------------------------------------");

//           ***Extracting String Parts             //Soren
//              1.slice(start, end)                 //01234
//              2.substring(start, end)
//              3.substr(start, length)


//              1.slice(start, end)

console.log(lastName.slice(1));
console.log(lastName.slice(1,3));
console.log(lastName.slice(-3));    //slice() accepts negetive value.
console.log(lastName.slice(-4,-2)); //slice() accepts negetive value.
console.log("------------------");

//              2.substring(start, end)

console.log(lastName.substring(1));  //substring() doesn't accept negetive value.
console.log(lastName.substring(1,4));
console.log("------------------");

//              3.substr(start, length)

console.log(lastName.substr(2));
console.log(lastName.substr(2,1));
console.log(lastName.substr(2,3));
console.log(lastName.substr(-5,3)); //substr() also accepts negetive value.
console.log("----------------------------------------------------------------------");

//              1.toUpperCase()
//              2.toLowerCase()

console.log(lastName.toUpperCase());
console.log(lastName.toLowerCase());
console.log("----------------------------------------------------------------------");

//              1.trim();
//              2.trimStart()
//              3.trimEnd()

let x = "   Soren   ";
console.table([x, x.length]);
console.table([x.trim(), x.trim().length]);
console.table([x.trimStart(), x.trimStart().length]);
console.table([x.trimEnd(), x.trimEnd().length]);
console.log("----------------------------------------------------------------------");

//              1.padStart(total_length, charecter)
//              2.padEnd(total_length, charecter)

//              1.padStart(total_length, charecter)
console.log(lastName.padStart(10,'x'));
console.log(lastName.padEnd(6,'x'));
//The padStart() method is a string method.
//To pad a number, convert the number to a string first.
// See the example below.
let num = 55;
let text = num.toString();
console.log(text.padStart(5,"*"));
console.log("------------------");

//              2.padEnd(total_length, charecter)

console.log(text.padEnd(5,'*'));
console.log("----------------------------------------------------------------------");

//              1.repeat(repeat_count)

let y = "abc ";
console.log(y.repeat(2));
console.log(y.repeat(2).length);
console.log(y.repeat(3));
console.log(y.repeat(3).length);
console.log("----------------------------------------------------------------------");

//             1.replace("replace_this", "with_this");
//             2.replaceAll("replace_this", "with_this");

let z = "Sayandeep Soren.Sayandeep Soren.Sayandeep Soren.";
console.log(z.replace("Soren","SOREN"));

console.log(z.replaceAll("Soren","SOREN"));
console.log(z.replace(/Soren/g,"SOREN")); //replace all mathches
console.log(z.replace(/SOREN/i,"SOREN")); //ignore case-sensitivity while finding matching word
console.log(z.replace(/SOREN/ig,"SOREN")); // i and g together
console.log("----------------------------------------------------------------------");

//              1.indexOf(charecter)

console.log(lastName.indexOf('S'));
console.log(lastName.indexOf('o'));
console.log(lastName.indexOf('r'));
console.log(lastName.indexOf('e'));
console.log(lastName.indexOf('n'));
console.log("----------------------------------------------------------------------");

//              1.split("split_By_this")

let a = "Sayandeep Soren";
const myArr =a.split('a');
console.log(myArr[0]);
console.log(myArr[1]);
console.log(myArr[2]);
console.log(myArr[3]); // ??????