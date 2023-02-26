//difference between regular function and arrow function

//1) logic in regular can't be written with {} braces but
//in arrow function we can write single line logic without {}braces
//however for multi line logic we should use {} braces.
//overall Arrow functions allow us to write shorter function syntax. 

//With arrow functions, we don't have to type the function keyword,
//the return keyword, and the curly brackets{}.

// If you have parameters, you pass them inside the parentheses
//hello = (val, index) => "Hello " + val;

//In fact, if you have only one parameter, you can skip the parentheses as well
//const hello = val => "Hello " + val;

//1) create a function syntax and print happy Birthday to you...
const myFunc = () => {
    // console.log("happy Birthday to you...");
}
myFunc();

const addition=()=>(1+3+4);
// console.log(addition());

//create an arrow function and pass the any no.to check odd/even
const checkFunc = (number) => number % 2 === 0;
// console.log(checkFunc(6));

//2) create a arrow function and print addition of 1+2+9
const addition1 = () => (1+2+9);
// console.log(addition1());

//3) create a function and print a multiplication of 1,3,5
const multiply = () => (1*3*5);

// console.log(multiply());

//4) create a function and pass the value 3 and print that value.
const userValue = (a) => console.log(a);
// userValue(3);

    
//5) create a func and pass the value my name is khan and print it
const nameN = (v) => console.log(v)
nameN("my name is  khan");

