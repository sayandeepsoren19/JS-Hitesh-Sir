const user = {
  name: "hitesh",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.name}, Welcome to website.`);
    console.log(this);
  },
};

// user.welcomeMessage
// user.welcomeMessage();
// console.log("-------------------------------");
// user.name = "Sayandeep";
// user.welcomeMessage();

console.log(this);

// function chai(){
//     let username = "harry";
//     console.log(this.username);
//     // console.log(this);
// }
// chai();

//Another-Way to declare Function
//-------------------------------
// const chai = function () {
//       let username = "harry";
//       console.log(this.username);
//     //   console.log(this);
// };
// chai();

const chai = () => {
      let username = "harry";
      console.log(this.username);
      console.log(this);
};
chai();
console.log("-------------------------------");

// function addTwoNums(num1, num2){
    //     return num1+num2;
    // }
    
    //Short-cut way to write a function
    const addTwoNums = (num1, num2) => (num1 + num2); //use () parethesis for return
    // const addTwoNums = (num1, num2) => ({name: "John"}); //returning object
    
    console.log(addTwoNums(5,7));
    console.log("-------------------------------");
    
    const myArr = [10,20,30,40,50];
    // myArr.forEach(function () {})
    // myArr.forEach( () => {} )
    // myArr.forEach( () => () )