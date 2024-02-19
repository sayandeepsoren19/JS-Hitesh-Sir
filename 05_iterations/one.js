//for

// for (let index = 0; index < 10; index++) {
//     const element = index + 1;
//     console.log(element);
// }

// console.log(element);
//-----------------------------------------------
// for (let i = 1; i <= 10; i++) {
//     console.log(`Outer Loop: ${i}`);
    
//     for (let j = 1; j <= 10; j++) {
//         console.log(`${i} => inner loop ${j}`);
//     }
// }
//-----------------------------------------------

// let myArray = ["Kerala","Kashmir","Arunachal Pradesh"];

// for (let index = 0; index <= myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
// }
//-----------------------------------------------

//      break || continue

// for (let index = 1; index <= 10; index++) {
//     if(index == 5){
//         console.log(`5 is detected`);
//     }
//     console.log(index);   
// }


// for (let index = 1; index <= 10; index++) {
//     if(index == 5){
//         console.log(`5 is detected`);
//         break;
//     }
//     console.log(index);   
// }


for (let index = 1; index <= 10; index++) {
    if(index == 5){
        console.log(`5 is detected`);
        continue;
    }
    console.log(index);   
}