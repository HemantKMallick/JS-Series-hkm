const user = {
    username: "hemant",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username} , welcome to my website`);
    }
}
// user.welcomeMessage();
// user.username="John"
// user.welcomeMessage();
//console.log(this); // Empty object {}

// function chai(){ 
//     let usename = "hemant";
//     console.log(this.username); // undefind
    
// }
// chai();
// const chai = () =>{
//     let usename = "hemant";
//     console.log(this); 
    
// }
// chai()
//const addTwo = (num1,num2) => { return num1 + num2} // Use {} to return value
//const addTwo = (num1,num2) => (num1 + num2) // Use () to implicit return
const addTwo = (num1,num2) => ({username:"hemant"}) // object return
console.log(addTwo(3,4));

