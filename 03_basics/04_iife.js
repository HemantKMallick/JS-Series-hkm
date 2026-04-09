// Immediately Invoked Function Expression (IIFE)
(function chai() {
    // named IIFE
    console.log(`DB CONNECTED`);
    
})(); // ()() iife

((name) => {
    //unmaned IIFE
    console.log(`DB CONNECTED ${name}`);
    
})("hemant");