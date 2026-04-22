const promiseOne = new Promise(function(resolve, reject){
    // Do Async task
    //DB calls, network

    setTimeout(function(){
        console.log("Async task is complete");
        resolve();
    }, 1000)
})

promiseOne.then(function(){
    console.log('Promise consumed');
    
})
// Promise two
new Promise(function(resolve, reject){
    setTimeout(function(){
    console.log('Async task 2');
     resolve()
    },1000)
}).then(function(){
    console.log('Async 2 resolved');
    
})

//Promise Three

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
    resolve({user:'hemant', email:'hemant@example.com'})    
    },1000)
})
promiseThree.then(function(user){
  console.log(user);
  
})

//Promise four

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username:'hemant', password: '123456'})
        } else{
            reject("ERROR : Something went wrong");
        }
    },1000)
})
promiseFour.then((user)=>{
 console.log(user);
 return user.username;
 
}).then((username)=>{
console.log(username);

}).catch(function(error){
console.log(error);

}).finally(()=>{
    console.log("The Promise is resolved or rejected");
    
})

//Promise five

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if (!error) {
            resolve({username: 'Javascript', password: '12345'})
                        
        }else{
            reject("ERROR: Something went wrong");
        }

    },1000)
})

async function consumePromiseFive(){
    try {
     const response = await promiseFive;
    console.log(response);
    } catch (error) {
        console.log(error);
        
    }
         
}
consumePromiseFive();

async function getAllUsers(){
    
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await response.json();
        console.log(data);
        
    } catch (error) {
        console.log("E ", error);
        
    }
    
      
}
getAllUsers();