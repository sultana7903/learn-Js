// A function is a set of statements that take inputs,
// do some specific computation, and produce output.

// Regular function /simple function 

//1) create a function and print happy Birthday to you...
function myFunction(){
    // console.log("happy Birthday to you...");
}

myFunction();

//2) create a function and print addition of 1+2+9
function addition(){
    // console.log(1+2+9);
}
addition();

//3) create a function and print a multiplication of 1,3,5
function multiply(){
    // console.log(1*3*5);
}
multiply();

//4) create a function and pass the value 3 and print that value.
 
 function userValue(a){
    // console.log(a);
 }
 userValue(3);

 //5) create a func and pass the value my name is khan and print it
  
function myName(c){
    // console.log(c);
}
myName("my name is khan");

// create a func and pass the value 2 and 3 and print both
function newNumb(a,b){
//   console.log(a,b)
}
newNumb(2,3);

// create a func and pass the value "my name is khan" and "i'm not a terrorist";
function khan(name,value){
//   console.log(name,value)
}
khan("my name is khan", "i'm not a terrorist");

// create a func and pass the value 1,2,3,4,5 and print all
function allNum(a,b,c,d,e){
//   console.log(a,b,c,d,e);
}
allNum(1,2,3,4,5);

// create a func and pass the variable which contains value = "Siddiqui Sir"
const nameVal = "Siddiqui Sir";
function newName(pram){
    // console.log(pram);
}
newName(nameVal);

//create a func and pass an array = [131,345,324,221,233];
const arr =  [131,345,324,221,233];
function passArr(params) {
    // console.log(params);
}
passArr(arr);

// create a func and pass an array = [23,32,45,56,76] and print length of an arr
const arr1 = [23,32,45,56,76];
function passArr1(params) {
    // console.log(params.length);
}
passArr1(arr1);

//create a func and pass an array = ["sultana", "priya", "neha", "khan"];
// and print the value of 2nd index
const name1 = ["sultana", "priya", "neha", "khan"];
function passName(params) {
    // console.log(params[2]);
}
passName(name1)

// create a func and pass an array = ["sultana", "priya", "neha", "khan"];
// print all the value of an array using forloop inside the func
const name2 = ["sultana", "priya", "neha", "khan"];
function newName2(params) {
    for(let i=0; i<params.length; i++ ){
        // console.log(params[i]);
    }
}
newName2(name2);

// create a func and pass an array = ["sultana", "priya", "neha", "khan"];
// print all the value of an array using map method.
const name3 = ["sultana", "priya", "neha"];
function newName3(params) {
    params.map((element, index)=>{
    //  console.log(element);
    })
}
newName3(name3);

// create a func and pass an array = ["sultana", "priya", "neha", "khan"];
// print all the name of an array using map method.
const name4 = [{name:"sultana"}, {name:"priya"}, {name:"neha"}];
function newName4(params) {
    params.map((el, i)=>{
    // console.log(el.name)
    })
}
newName4(name4);

// create a func and pass an array = ["sultana", "priya", "neha", "khan"];
// return name of an array using map method.
//jab bhi map method me return keyword ka use krnge ya phr 
//{} ke jagah () ka use krnge to hamesha ek variable ke ander map krnge
// in map method after arrow with () return keyword should not be used

const name5 = ["sultana", "priya", "neha", "khan"];
function newName5(params) {
//    const name = params.map((el,i)=>(
//      el
//      ))

              //OR

   const name = params.map((el,i)=>{
     return el;
    })
    // console.log(name);
}
newName5(name5);

// console.log("happy birthday to you...!!!")
function myFunc(){

}
myFunc();

//create a function and pass the array = [23,45,67,33]; and
//print its value with foreach method
const newArr = [23,45,67,33];
function newArr2(params) {
    params.forEach((el,i)=>{
        // console.log(el);
    })
}
newArr2(newArr);

//create a function and pass the array = [23,45,67,33]; and
//return array of value with foreach method
const arrVal3 = [23,45,67,33];
function newVal3(params) {
     const newVal3 = [];
     params.forEach((el,i)=>{
         newVal3.push(el);
    })
    // console.log(newVal3);
    
}
newVal3(arrVal3);

// using forEach method returns value in an array of given below
const objVal = [{name:"rohan", age: 34, gender:"male"}];
function newObj(params){
   const newArr1 = [];
    params.forEach((el,i)=>{
    newArr1.push(el.name)
    newArr1.push(el.age)
    newArr1.push(el.gender)
   })
//    console.log(newArr1);
}
newObj(objVal);

//using forEach  method print its value with index for given arr
//store  it new array
const arr6 = ["mango", "apple", "orange", "banana", "papaya"];
function myArr6(params){
  const  newFruits = [];
  params.forEach((el,i)=>{
   newFruits.push(el,i);
  })
//   console.log(newFruits)
}
myArr6(arr6);

//create a function and pass the array = [23,45,67,33]; and
//print value in the form of an array using for loop
const nmVal = [23,45,67,33];
function myNmval(params){
const newVal7 = [];
for(let i=0; i<params.length; i++){
    newVal7.push(params[i]);
}
// console.log(newVal7);
}
myNmval(nmVal);