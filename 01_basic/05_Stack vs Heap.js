console.log("----------------------------------------");
//         Stack ( Primitive DataTypes )
//               Pass by Value

let x = 10;
let y = x; //Pass ba Value
console.log(x);
console.log(y);

y = 50;
console.log(x);
console.log(y);

console.log("----------------------------------------");
//         Heap ( Non-primitive DataTypes )
//               Pass by Reference

let a = {
    property1 : 10
}
let b = a; //Pass by Reference
console.log(a.property1);
console.log(b.property1);

b.property1 = 50;
console.log(a.property1);
console.log(b.property1);