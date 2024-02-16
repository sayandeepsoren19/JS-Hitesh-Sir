//          Using Constructors  ---> signleton

// const myObj = new Object();
console.log("----------------111---------------");

//          Object literals

// const myObj = {}
// myObj.name = "Sayandeep Soren";           //Property_names are automatically stored as --> 'String'
// myObj.age = 24;                           //Property_names --> name,
// myObj.location = "India";                        //            age,
// myObj.phoneNo = [7, 0, 7, 6, 4, 5, 6, 7, 8, 9];  //            location
//                                                  //            phone no

const myObj = {
  //'Property_name' :  Property_value
  name: "Sayandeep Soren", //Property_names are automatically stored as --> 'String'
  age: 24, //Property_names --> name,
  location: "India", //            age,
  phoneNo: [7, 0, 7, 6, 4, 5, 6, 7, 8, 9], //            location,
}; //            phoneNo
console.log("----------------222---------------");

//Output Whole Object

console.log(typeof myObj);
console.log(myObj);
console.log("----------------");

//Output Object Members  ---> 2 ways

console.log(myObj.name); // Obj.property_name      --> one way
console.log(myObj["name"]); // Obj[ "property_name" ] --> another way

console.log(myObj.age);
console.log(myObj.location);
console.log(myObj.phoneNo);
console.log("----------------");

//When "property_name" is inside quotes

const myObj_2 = {
  property_name: 55, //This property can only be accessed using --> Obj_Name[ "property_name" ]
  //                          We can NOT use --> Obj_Name.property_name
};
console.log(myObj_2.property_name); //Not Allowed --> undefined
console.log(myObj_2["property_name"]); //allowed
console.log("----------------333---------------");

//Symbol in Objects

const mySymbol = Symbol("Key"); //mySymbol --> Symbol(Key)
console.log(mySymbol); //Symbol(Key)

console.log("-----------");

const myObj_3 = {
  mySymbol: "hello", // here, key => mySymbol

  //To use the Symbol as key in a Object
  //use [] around key_name
  [mySymbol]: "hello", // here, key => Symbol(Key)
};

console.log(myObj_3);
console.log("----------------444---------------");

//          Object.freeze()

const myObj_4 = {
  a: 11,
};
myObj_4.a = 22;
Object.freeze(myObj_4); //Make Object's Key's Values Unchangeable
myObj_4.a = 33;

console.log(myObj_4.a);
console.log("----------------555---------------");

//Function Member of an Object

const myObj_5 = {
  greeting() {
    console.log("Hello sarene...have a great day.");
  },
};

console.log(myObj_5.greeting);
console.log(myObj_5.greeting());
