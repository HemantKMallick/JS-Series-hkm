// const tinderUser = new Object(); // Singleton object
const tinderUser = {}; // non singleton object
tinderUser.id = "123456";
tinderUser.name = "John";
tinderUser.isLoggedIn = false;
//console.log(tinderUser);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c", 4:"d"}
const obj3 = {5:"e", 6:"f"}

//const newObj = {obj1, obj2, obj3}
//const newObj = Object.assign({},obj1,obj2,obj3)
const newObj = {...obj1,...obj2,...obj3}
// console.log(newObj);
// console.log(Object.keys(tinderUser)); //get keys in array
// console.log(Object.values(tinderUser)); // get values on array
// console.log(Object.entries(tinderUser)); 


// Destructure

const course = {
    coursename: "js in hindi",
    coursefee: "999",
    courseInstructure: "Hitesh"

}
const {courseInstructure:instructure}= course;
//console.log(courseInstructure);
console.log(instructure);

//JSON 
// {
//     "name":"hemant",
//     "place": "Bangalore"

// }


