
function sayMyName(){
    console.log("S");
    console.log("a");
    console.log("y");
    console.log("a");
    console.log("n");
    console.log("d");
    console.log("e");
    console.log("e");
    console.log("p");
}

sayMyName();
console.log(" \n ");
sayMyName();
console.log("---------------111----------------")

function addTwoNumbers(num1, num2){
    console.log(num1 + num2);
}

addTwoNumbers();
addTwoNumbers(5, 2);
addTwoNumbers(5, '2');
addTwoNumbers(5, 'a');
addTwoNumbers(5, null);
console.log("---------------222----------------");

//          return 

let result = addTwoNumbers(6, 3); 
console.log("hold = ",result); //???? --> undefined
//Because, addTwoNumbers() does NOT return anything
//addTwoNumbers() just print the addition of two numbers during function execution
console.log("-----------------\n");

//return value from a function
function multiplyTwoNumbers(num1 , num2){
    return (num1 * num2);
}
result = multiplyTwoNumbers(5,3);
console.log(result);
console.log("-----------------\n");

// another case -
function greetUser(userName){
    if(userName === undefined){   //if(!userName)
        console.log("Please, enter your name");
        return
    }
    return `Hello ${userName}, Welcome to our space`
}
greetUser("Shimran");              // OOPs! no output

let greet = greetUser("Shalini"); 
console.log(greet);               // out-put yes

console.log(greetUser("Shimran")); // out-put yes

console.log(greetUser(""));        //Empty string

console.log(greetUser());         //No Argument. --> ??? undefined
console.log("---------------333----------------");

//IF, NO Argument is passed
//THEN, 10 will be AUTOMATICALLY ASSIGNED TO PARAMETER
function printNum(num = 10){
    return num;
}
console.log("Number is = ",printNum(5));
console.log("Number is = ",printNum()); //No Argument.