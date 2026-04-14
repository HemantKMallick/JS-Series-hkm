// for of loop

// ["", "", ""]
// [{}, {}, {}]

const arr = [1,2,3,4,5]; // iterable
//const arr = 10; // not iterable
for (const num of arr ) {
    //console.log("Number is ", num);
    
    
}
//strings
const greetings = "Hello World!";
for (const greet of greetings) {
   // console.log(`Each char is ${greet}`);
    
}
//map
const map = new Map();
map.set("IN", "India");
map.set("USA", "United State of America");
map.set("Fr", "France");
for (const [key, value] of map) {
    //console.log(key, ":", value);
    
}
//object

const myObject = {
    gme1: "NFS",
    game2: "Spiderman"

}
for (const [key,value] of myObject) {
    //console.log(key, ":", value);
    
}