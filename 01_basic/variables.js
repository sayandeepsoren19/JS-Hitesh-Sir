const a = 10; //Constant variable
a = 100;// Assignment to Const Variable is not allowed

let b = 20; //Scoped Variable 

var c = 30; //Variable that doesn't follow Scope Rule
//We should not use 'var' in our programs

d = 40; //Variable without-const/let/var. Still we can create a variable in javascript

let e;//Variable Declaration without Initialization

console.table([a,b,c,d,e]);