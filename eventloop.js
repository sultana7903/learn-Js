// js code execution model based on event loop
// event loop work with callback queue or task queue 
// jab function execute hota hai to bahut sare code ek line me lg
// jate as a task queue to event loop us task queue se ek ek code
// leta hai aur usko call stak ke pass push krta rhta hai execute hone ke liye.

// jaha bhi settimeout hota hai to js usko web apis ke pass bhej
//deta hai jaise hi uska time over hota hai to wo task queue me aa 
//jata hai aur phr usko bhi event loop task queue se call stak me
//push kar deta hai for exexution

//js has call stak and heap memory
//heap memory has main memory where code has store and call stak 
//holds the execution context.

setTimeout(function timer(){
  console.log('hi im here!');
},2000);

console.log("hi");

setTimeout(function timer(){
    console.log("hi there is nothing")
}, 5000);

console.log("hello world");