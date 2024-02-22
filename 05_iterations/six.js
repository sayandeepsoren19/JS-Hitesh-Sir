const asianCountries = ["India", "China", "Japan", "Indonesia", "Thailand"];

// asianCountries.forEach( (item) => {
//     console.log(item);
// } )
// console.log("-------------------------");

// const elements = asianCountries.forEach( (item) => {
//     // console.log(item);
// } )
// console.log(elements);
// console.log("-------------------------");

// const elements2 = asianCountries.forEach( (item) => {
//     // console.log(item);
//     return item;
// } )
// console.log(elements2);

// // ===>>>> This means myArray.forEach( )
// //       ***doesn't return any Value***
// console.log("-------------------------");
// console.log("-------------------------");

//***But myArray.filter(  )
//   returns values
//ex:-
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNumbers = myNumbers.filter( (item) => {
////     console.log(item);
//     return item;
// } );
// console.log(typeof newNumbers);
// console.log(newNumbers);
//-----------------------------------------------
// const newNumbers = myNumbers.filter( (item) => {
//     // console.log(item);
//     return item>5 ;//return (item_condition);
// } );
// console.log(typeof newNumbers);
// console.log(newNumbers);

//short-cut                               ***below we don't have to write 'return' , because we have not started a new scope using {} for the call-back function 

// const newNumbers = myNumbers.filter( (item) => item>4 );
// console.log(typeof newNumbers);
// console.log(newNumbers);

//      same work using forEach(  )

// const newNumbers = [];
// myNumbers.forEach((item) => {
//   if (item > 4) {
//     newNumbers.push(item);
//   }
// });
// console.log(newNumbers);
//-----------------------------------------------

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let filteredBooks = [];
  filteredBooks = books.filter( (bk) => bk.genre === 'History' )
  filteredBooks = books.filter( (bk) => {return bk.publish > 2000 } )
  filteredBooks = books.filter( (bk) => {return bk.genre === 'History' && bk.publish > 1995 } )

  console.log(filteredBooks);