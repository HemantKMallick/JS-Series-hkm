function one(){
    const userName="Hemant";
    function two(){
        const website = "hemant.com";
        console.log(userName);
        
    }
    //two();
}
//one();

//Hoisting
console.log(addnum(5)); // We can access 
function addnum(num){
    return num + 1;
}

//console.log(newfunc(6)); // we can't access
const newfunc = function addnum(num){
    return num + 1;
}
console.log(newfunc(6));