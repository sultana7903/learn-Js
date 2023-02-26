//let, var and const
 
//var, let and const are the keyword of js that helps to create variables
//var has the global level scope 
//while let and const have block/local level scope.

// exmp for var :----
{
    var myName = "sultana";
}
// console.log(myName);

// exmp for let and const
{
    let myName1 = "khan";
    const myName2 = "shahrukh";
    // console.log(myName1, myName2);
}
// console.log(myName1, myName2)     //undefined

//with var we can re-create with same name of variable
//that's why var doesn't prevent us from duplicacy of variable
//but in let and const we can't.
//let and const prevent us from duplicacy of variable


var Num1 = 23;
// console.log(Num1);
var Num1 = 50;
// console.log(Num1);

let Num2 = 45;
// let Num2 = 57;       // not allowed

const Num3 = 20;
// const Num3 = 40;       //not allowed


//with var and let we can first declare the variable and after
//that we can assign the value next line.
var student;
student = "priya";
// console.log(student);

let student2;
student2 = "puja";
// console.log(student2);

//but in  const we need to declare and assign the value together.

// const student3;       //not allowed
const student3 = "pathan";
// console.log(student3);

//variable created by const cannot be reassigned the value.
const person = "rohan";
// person = "sohan";       //not allowed
console.log(person);