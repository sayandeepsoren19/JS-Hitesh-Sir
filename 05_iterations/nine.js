//      Array.reduce( )

const myArray = [1, 2, 3];

const initialValue = 0;

// const sum = myArray.reduce(
//   (accumulator, item) => accumulator + item,
//   initialValue
// );
// console.log(sum);
//--------------------------------------------------
//      with different style of writting Call-Back function

// const sum = myArray.reduce(
//   (accumulator, item) => {return accumulator + item}, //call-back function
//   initialValue //first value of accumulator
// );
// console.log(sum);
//-----------------------------------------------
//      with different style of writting Call-Back function

// const sum = myArray.reduce(function (accumulator, item) {
//   console.log(`accumulator: ${accumulator}, and currentItem: ${item}`);
//   return accumulator + item;
// }, 0 /*initialvalue*/);
// console.log(sum);
//-----------------------------------------------------------
//-----------------------------------------------------------

const shoppingCart = [
  {
    course: "Javascript Course",
    price: 100,
  },
  {
    course: "Python Course",
    price: 200,
  },
  {
    course: "React Course",
    price: 300,
  },
  {
    course: "Wordpress Course",
    price: 400,
  },
];

const totalCartPrice = shoppingCart.reduce((accumulator, item) => {
  return accumulator + item.price;
}, 0);
console.log(totalCartPrice);
