//forEach method:-

//forEach method is also higher order function which contains Forloop inside
//it doesn't return array if using inside a variable 
//it work with nested object also.
// forEach return undefined

//Q) consider the below data array and return a new array of name
let data = [
    {id: 1, name: "sultana" },
    {id: 2, name: "King" },
    {id: 3, name: "Payal" },
    {id: 4, name: "Priya" },
];
const newArr = [] ;
const notValid = data.forEach((el,i)=>{
  newArr.push(el.name)
}) 
// console.log(notValid);     //undefined
// console.log(newArr);   

//Q) using forEach method pass the value and index of an array to a function 
// first method of forEach
const numbers =[3,6,7,9];

function myFunc(el , index){
    // console.log(`index is ${index} el is ${el}`)
}
 
// numbers.forEach(myFunc);

// 2nd method of forEach
const numbers2 = [4,6,7,8];

numbers2.forEach(function(number,index){
    // console.log(`index is ${index} number is ${number}`)
});


