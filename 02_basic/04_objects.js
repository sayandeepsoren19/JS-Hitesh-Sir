//                   Creat Objects

//               Using Object Literals
//                --------------------
// const myObj = {}
// myObj.id = "123";
// myObj.name = "Rahul Yadav";
// myObj.isLoggedIn = false;

//              Using Constructors   -->  signleton
//              ------------------        ----------
const myObj = new Object();
myObj.id = "123";
myObj.name = "Rahul Yadav";
myObj.isLoggedIn = false;

console.log(myObj);
console.log("--------------------------111-------------------------");

//             Nested Objects

//Using Constructors   -->  signleton
// const nestedObj = new Object();
// nestedObj.a = 1;
// nestedObj.b = 2;
// nestedObj.c = {
//   d: 3,
//   e: {
//     f: 4,
//     g: 5,
//   },
// };

//Using Object Literals
const nestedObj = {
    a: 1,
    b: 2,
    c: {
        d: 3,
        e: {
            f: 4,
            g: 5
        }
    }
}


console.log(nestedObj.a);
console.log(nestedObj.b);
console.log(nestedObj.c);
console.log(nestedObj.c.d);
console.log(nestedObj.c.e);
console.log(nestedObj.c.e.f);
console.log(nestedObj.c.e.g);
console.log("--------------------------222-------------------------");

//          Merge Objects

const obj1 = { 1: 'a', 2: 'b'};
const obj2 = { 3: 'c', 4: 'd'};

// const obj3 = {obj1, obj2};                    ----> Two Objects inside Object
// const obj3 = Object.assign({}, obj1, obj2);   ----> This is one way
const obj3 = {...obj1, ...obj2};               //----> this is Best Way
console.log(obj3);
console.log("---------------------------333------------------------");

//          Array of Objects

const arr = [
    {a: 1, b: 2},
    {c: 3, d: 4},
    {e: 5, f: 6}
]
console.log(arr);
console.log(arr[0]);
console.log(arr[0].a);
console.log("---------------------------444------------------------");

//          Object.keys(obj)   --> Merge all the     KEYS of an OBJECT into ARRAY
//          Object.values(obj) --> Merge all the   VALUES of an OBJECT into ARRAY

const OBJ = {a:1, b:2, c:3};

console.log(OBJ);
console.log(Object.keys(OBJ));     //KEYS of an OBJECT into ARRAY
console.log(Object.values(OBJ)); //VALUES of an OBJECT into ARRAY
console.log("---------------------------555------------------------");

//          Object.entries(obj)

console.log(Object.entries(OBJ));

//     Object_Name.hasOwnProperty()

console.log(OBJ.hasOwnProperty('a'));
console.log(OBJ.hasOwnProperty('b'));
console.log(OBJ.hasOwnProperty('c'));
console.log(OBJ.hasOwnProperty('d'));