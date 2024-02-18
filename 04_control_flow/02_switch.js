let month = 2;

switch (month) {
    case 1:
        console.log("January");        
        break;
    case 2:
        console.log("February");        
        break;
    case 3:
        console.log("March");        
        break;
    case 4:
        console.log("April");        
        break;
    //If we do Not write "break;" in any Case
    //And If that case is matched
    //All next cases with that case will be executed
    //****Except default****
    default:
        console.log("No match Found, SO default is executed")
        // break;
}