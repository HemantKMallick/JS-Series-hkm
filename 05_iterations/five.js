// foreach loop

//const coding = ["js","php","java","python"]
// coding.forEach(function (item){
//     console.log(item);
    
// })
// coding.forEach( (item)=>{
//    //console.log(item);
    
// })
// function printMe(item){
//    console.log(item);
   
// }
// coding.forEach(printMe);

const myCoading = [
   {
      languageName: "Javascript",
      languageFileName: "js"
   },
   {
      languageName: "Java",
      languageFileName: "java"
   },
   {
      languageName: "Python",
      languageFileName: "py"
   }
];

myCoading.forEach((item)=>{
console.log(item.languageName, item.languageFileName);

});