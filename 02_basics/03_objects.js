// singleton
// Object.create

// object literal
const mySym = Symbol("key1");
const JsUser = {
    name:"Hemant",
    "full name": "Hemant Mallick",
    [mySym]: "mykey1",
age: 30,
location: "Bangalore",
email: "hemant@google.com",
isLoggedIn: false,
lastLoginDays:["Monday", "Saturday"]
}
// console.log(JsUser.email);
// console.log(JsUser["email"]); // to access email value in string
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);
//Object.freeze(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
    
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user ${this.name}`);
    
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());




