//$$$$$$$$$$$  Creat an Array  $$$$$$$$$$$$$$$$$$$$$

const arr = ["Sayandeep Soren", 5, 7.6, true, 'v'];
console.log(typeof arr);
console.log("-----111-----");
//Declaring with 'const' --> common practice
//Can contain different types of Values
//Re-sizable
//Creat Shallow Copies(Same_Reference), rather Deep Copies(Diff._Reference)

//Whole Array Output
console.log(arr);
console.log("\n");

//Accessing array elements using index_no
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]); // Ous-side array bound --> Undefined
console.log("------------------333---------------------------");

//$$$$$$$$$$$$$ Another Way to Creat an Array  $$$$$$$$$$$$$$$$$$$$$$$

const myArr = new Array("hello", 5, 3.4, false, 's');
console.log(typeof myArr);
console.log(myArr[0]);
console.log(myArr[1]);
console.log(myArr[2]);
console.log(myArr[3]);
console.log(myArr[4]);
console.log(myArr[5]);    // outside array bound --> undefined
console.log("---------------------444------------------------");

//      push()      => Insert element at Last

myArr.push("pushed_1"); 

myArr.push("pushed_2", "pushed_3", "pushed_4"); //push(a,b,c....) => multiple values possible
console.log(myArr);
console.log("---------------------555------------------------");

//      pop()     => Removes the last element

myArr.pop(); 
myArr.pop();
myArr.pop();
myArr.pop();
console.log(myArr);
console.log("---------------------666------------------------");

//      unshift()      => insert a new element at the Start

myArr.unshift(1999);
//unshift() is very resource consuming
//Because to insert a new element at the start, EVERT ELEMENT MUST BE SHIFTED TO HIS NEXT INDEX_NO.
console.log(myArr);

myArr.unshift(2000,2001,2002); //unshift(a,b,c....) => multiple values allowed
console.log(myArr);
console.log("----------------------777-----------------------");

//      shift()     => Removes the first element

myArr.shift(); 
myArr.shift();
myArr.shift();
myArr.shift();
console.log(myArr);
console.log("----------------------888-----------------------");

//      include(element)      => returns true, if found
//                            => returns false, if not found

console.log(myArr.includes("hello"));
console.log(myArr.includes("heeeelloooo"));
console.log("----------------------999-----------------------");

//      indexOf(element)       => Returns INDEX_NO, if found
//                             => Returns -1, if not found

console.log(myArr.indexOf("hello"));
console.log(myArr.indexOf(5));
console.log(myArr.indexOf(3.4));
console.log(" ");
console.log(myArr.indexOf("heeeelloooo")); //not found
console.log("----------------10 10 10-----------------------");

//      join()      => Convert all array elements into 1 string

console.log(myArr);
console.log(typeof myArr);
console.log(" ");
console.log( myArr.join()); 
console.log(typeof (  myArr.join() ));
console.log("----------------11 11 11-----------------------");

//      slice( , ) || splice ( , )

//  1.  slice     (index_from , <<<< before_index  >>>>>)

console.log("A : ", myArr);
console.log(myArr.slice(1,3));
console.log(myArr.slice(1,4));
console.log(myArr.slice(1,5));
console.log(myArr.slice(1,6)); // Out of array bound --> now????? Automatically takes till higest index_no
console.log("B : ",myArr);

console.log("\n");

//  2.    splice    (index_from, <<<< till_index >>>>>)

console.log("A : ", myArr);
console.log(myArr.splice(1,3)); //***Here, Actual array LOOSE Spliced elements ***
/***After Splice(   , till_index )
 ------------------------------------
 Array has left only those elements in it
 that are NOT spliced from actual elements */
 console.log("B : ", myArr);
 console.log("----------------12 12 12-----------------------");
     