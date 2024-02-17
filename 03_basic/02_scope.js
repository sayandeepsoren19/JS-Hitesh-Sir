let x = 1;
const y = 2;
var z = 3;
{ //New Block Scope
  let x = 10;
  const y = 20;
  var z = 30;

  console.log("Inner let: ",x);
  console.log("Inner const: ",y);
  console.log("Inner var: ",z);
}
console.log("\nOuter let: ",x);
console.log("Outer const: ",y);
console.log("Outer var: ",z);   //Outer var has changed for Inner var
console.log("----------------------111-----------------------------")

function one(){
    const userName = "Sayandeep";
    
    function two(){
        const website = "Youtube";
        console.log(userName);
    }
    
    // console.log(website); //out of scope
    
    two();
}

one();
console.log("----------------------222-----------------------------")

//          Different Ways Of Declaring Functions

console.log(addOne(5)); //Function Call before Declaration => ALLOWED
function addOne(num){   //One Way to Declare function
    return (num+1);
}
//-------------------------------------------------------------

// console.log(addTwo(5));     //Function Call before Declaration => NOT ALLOWED
const addTwo = function(num){ //Because of this way of function Declaration
    return num+2;
}
console.log(addTwo(5));
console.log("----------------------333-----------------------------")