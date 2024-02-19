// for of

// [ "", "", "" ]
// [ {}, {}, {} ]

//-------------Array----------------

// let myArr = [5,10,15,20,25];
// for (const i of myArr) {
//     console.log(i);
// }

//------------String-----------------

// let greeting = "Hello World!";
// for (const i of greeting) {
//     console.log(i);
// }

//-------------Map------------------------------

const map = new Map();
map.set("name", "Sayandeep Soren");
map.set("age", 25);
map.set("location", "Malda");
console.log(map);
// map.set("name", "Sayandeep Soren");
// console.log(map);
for (const i of map) {
    console.log(i);
}
for (const [key, value] of map) {
    console.log(key + ":-" + value);
}

//--------------Object---------------------

//Object is Not-Iterable

// const myObj = {
//     a: 1,
//     b: 2,
//     c: 3
// }
const myObj = {
    'a': 1,
    'b': 2,
    'c': 3
}
console.log(myObj);
// for (const i of myObj) {
//     console.log(i);
// }