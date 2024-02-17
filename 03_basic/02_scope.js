let x = 1;
const y = 2;
var z = 3;

{
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
