//callback function
//when we called a function inside another function with passing
//some argument is called callback function

function myFirst(a) {
    // console.log("Hello", a);
  }
  
  function mySecond() {
    myFirst("Goodbye");
  }

  mySecond();
 
//1) create a callback function and print the addition of two variables
//  a=23, b=25 inside the callback function.  
function result(params){
//   console.log(params);
}
function addition(){
    const a = 23;
    const b = 25;
    const add = a + b;
    result(add);
}
addition();

//1) create a callback function and print the multiplication of two variables
//  a=20, b=20 inside the callback function.  
function result2(rcv){
//   console.log(rcv);
}
function multiply(){
    const a = 20;
    const b = 20;
    const multi = a*b;
    result2(multi);
}
multiply();

//1) create a callback function and print the multiplication and add of two variables
//  a=22, b=20 inside the callback function.  
function result3(a,m){
//  console.log(a,m);
}
function multiadd(){
  const a = 22;
  const b = 20;
  const add = a+b;
  const mult = a*b;
  result3(add,mult);
}
multiadd();

//1) create a callback function and print the array = [34,56,76,78]
//  inside the callback function.  
function arr(a){
//  console.log(a)
}
function arr2(){
  const numb = [34,56,76,78]
  arr(numb);
}
arr2();

//1) create a callback function and print the value of array = [34,56,76,78]
//  inside the callback function.  
function callback(val){
  console.log(val);
}
function result4(){
  const array = [34,56,76,78]
  array.map((el,i)=>{
  callback(el);
  })
  
}
result4();

