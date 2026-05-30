function one() {
  const userName = "Hemant";
  function two() {
    const website = "hemant.com";
    console.log(userName);
  }
  //two();
}
//one();

//Hoisting
//console.log(addnum(5)); // We can access
function addnum(num) {
  return num + 1;
}

//console.log(newfunc(6)); // ReferenceError: Cannot access 'newfunc' before initialization
const newfunc = function addnum(num) {
  return num + 1;
};
//console.log(newfunc(6));

// variable with var
//console.log("Var: ", a); // Undefind
var a = 10;
console.log("Var: ", a); // We can access

// varibale with let
//console.log("Let: ", b); //ReferenceError: Cannot access 'b' before initialization
let b = "hello world!";
console.log("Let: ", b);

// varibale with const
//console.log("Const: ", c); //ReferenceError: Cannot access 'c' before initialization
const c = "I am const";
console.log("Const: ", c);
