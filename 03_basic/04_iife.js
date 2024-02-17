//  Immediately Invoked Function Expression (IIFE)

// function chai(){
//     console.log("Chai Ready ha");
// }
// chai();
//-----------------------------------------------
//      (function_defination)( );
//      it's called IIFE

(function chai() {       //Named IIFE --> function have name
  console.log("Chai Ready ha");
})();  // (;) is important
//This Function get executed immediately
//This method helps against the pollution from Global Scope variables
//------------------------------------------------
//another way
(() => {                //IIFE without name --> function doN'T have name
  console.log("Chai Ready ha");
})(); // (;) is important
//------------------------------------------------
//another way with parameter
((name) => {
  console.log(`Hello ${name}, Chai Ready ha`);
})("Kartik");  // (;) is important
