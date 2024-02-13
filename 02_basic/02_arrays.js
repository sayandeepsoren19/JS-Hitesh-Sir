console.log("-------------------------111------------------------");

//          array.push(array);

const marvel_Heros = ["Ironman", "Thor", "Dr. Strange"];
const dc_Heros = ["Batman", "Flash", "Superman"];
console.log(marvel_Heros);
console.log(dc_Heros);

marvel_Heros.push(dc_Heros); //an array is pushed as an element in the original array 
console.log("\nAfter array.push(array) :\n");

console.log(marvel_Heros); //Now, it is Changed
console.log(dc_Heros);
console.log("-----------------");
console.log(marvel_Heros[3]); //4th element is an array
console.log(marvel_Heros[3][0]); //4th elememt's 1st element
console.log(marvel_Heros[3][1]); //4th elememt's 2nd element
console.log(marvel_Heros[3][2]); //4th elememt's 3rd element
console.log("-------------------------222------------------------");

//          array.concat(array);

const x = [1,2,3];
const y = [10, 20, 30];

const z = x.concat(y); //Concatenation of 2 array elements
console.log("\nAfter array.concat(array) :\n");

console.log(x); //orignal arrays does NOT change
console.log(y); //orignal arrays does NOT change
console.log("-----------------");
console.log(z); 
console.log(x.concat(y));
console.log("------------------------------333-----------------------------");

//         spread operator       => [...arr1, ...arr2, ...arr3]

let allNumbers = [...x, ...y]; //=> copy all elements of all arrays in One Array
console.log(z);
console.log("------------------------------444-----------------------------");

//         array.flat( 2/3/infinity )  => Create a new array with the Sub-ARRAY elements concatenated

let complex_multi_D_array = [1, 2, 3,[4, 5, [6, 7, 8]], 9, 10];

let flat_1_array = complex_multi_D_array.flat(1);
console.log(flat_1_array);
let flat_2_array = complex_multi_D_array.flat(2);
console.log(flat_2_array);
let flat_Infinity_array = complex_multi_D_array.flat(Infinity);
console.log(flat_Infinity_array);
console.log("-----------------------------555------------------------------");

//          Array.isArray( )  => Check if an object is an array
//         ------------------ => Returns true / false

console.log(Array.isArray(x)); //here, 'x' is an array
console.log("------------------------------666-----------------------------");

//         Array.from( )  => Create an array from a string
//        --------------  => Returns an array with a length property from any iterable object.

let text = "ABCDE"; //String
const array_from = Array.from(text); //String is converted into Array

console.log(text); //Output String
console.log(array_from); //Output Array
console.log(" \n ");

console.log(Array.from(    //here object is not able to convert into an Array
    { 
    name: "Sayan",
    age: 24,
    origin: "INDIA"
}
));                        //Output -> ????? ||  empty array -> []
console.log("------------------------------777-----------------------------");

//         Array.of( )  => Creat a new array instance with all arguments

let i = 100, j= 200, k= 300, l= "yoyo", m= true;

console.log(Array.of(i,j,k,l,m)); //All variables are merged into a new array
console.log("------------------------------888-----------------------------");