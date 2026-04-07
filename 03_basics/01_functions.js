// Functions
function addTwoNumber(number1,number2){
    //console.log(number1 + number2);
    let result = number1 + number2;
    return result;
    
}
const result = addTwoNumber(3,4);
//console.log("Result ", result);

// rest operator ...num1
function calculateCartPrice(...num1){
    return num1;
}
console.log(calculateCartPrice(200, 400, 500, 2000));
