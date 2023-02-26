// map is a higher order function of javaScript.
// It contains Forloop inside but only work with array not object.
// it returns  array if using inside a variable 
// eg:- const newArr = data.map((el, i)=>{el.something})

//Q) return a new array of name using map method if exist array is data below
let data = [
    {id: 1, name: "sultana" },
    {id: 2, name: "King" },
    {id: 3, name: "Payal" },
    {id: 4, name: "Priya" }
];
const newArr = data.map((el,i)=>{
    return (
    el.name
    )
})
// console.log(newArr);

//map method as a input ek callback function lega
//it always create new array aur hmlog is new arr ko ek variable me store kar lenge

const numbers = [3,6,8,9,3];
//  const square = function(number){
//   return number*number;
// }

const squareNumber = numbers.map(function(number){
  return number*number;
});
// console.log(squareNumber);

// with arrow function
const squareNumber1 = numbers.map((number, index)=>{
  return `index: ${index}, ${number*number}`;
});
// console.log(squareNumber1);

const users = [
       {firstName: "rohan" , age:45},
       {firstName: "mohan" , age:35},
       {firstName: "sohan" , age:15},
       {firstName: "pohan" , age:25},
]
  const userNames = users.map((user)=>{
    return user.firstName;
})
// console.log(userNames);


