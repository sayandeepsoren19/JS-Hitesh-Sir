
//  for_in

// const myObj = {
//   js: "Javascript",
//   cpp: "C++",
//   c: "C",
//   java: "Java",
// };
// console.log(myObj);
// for (const key in myObj) {
//     console.log(key + ":-" + myObj[key]);
//     //         ----          ------------
// }
//------------------------------------------------------

// let programming = ["c", "cpp", "java", "js"];
// for (const key in programming) {
//     console.log(key  +":-"+  programming[key]);
// }
//------------------------------------------------------

let myMap = new Map();
myMap.set("country", "India");
myMap.set("president", "Droupadi Murmu");
myMap.set("prime_Minister", "Narendra Modi");
for (const key in myMap) {
    console.log(key);
}