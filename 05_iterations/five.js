//      for_each

let myArray = ["India", "Japan", "USA", "Canada", "Germany", "Australia"];

//          one-way
// myArray.forEach(function (values) {   //Here, function is Call-Back Function --> call-back functions don't have names
//     console.log(values +" jana ha");
// })

//      second-way
// myArray.forEach( (values) => {
//     console.log(values + " jana ha");
// } )

//      third-way
// function printEach (values){
//     console.log(values + " jana ha");
// }
// myArray.forEach( printEach );

//      forEach ( (x, y, z) => {} )
// myArray.forEach( (values, index, whole_array) => {
//     console.log(values, index, whole_array);
//     // console.log(typeof whole_array);
// } )

//---------------------------------------------------------

let myArrayOfObjects = [
    {
        progLanguage: "C++",
        fileExtension: ".c"
    },
    {
        progLanguage: "Java",
        fileExtension: ".java"
    },
    {
        progLanguage: "Python",
        fileExtension: ".py"
    }
];
myArrayOfObjects.forEach( (value) => {
    console.log(value);
    console.log(value.progLanguage);
    console.log(value.fileExtension);
} )